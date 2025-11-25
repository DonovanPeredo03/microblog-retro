// Importar cliente DynamoDB v3
const { DynamoDBClient, PutItemCommand, ScanCommand } = require("@aws-sdk/client-dynamodb");
const { v4: uuidv4 } = require("uuid"); // para IDs únicos

const client = new DynamoDBClient({ region: "us-east-1" });
const TABLE_NAME = "Posts";

exports.handler = async (event) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    };

    const method = event.requestContext?.http?.method || event.httpMethod;

    // Preflight CORS
    if (method === "OPTIONS") {
        return { statusCode: 200, headers, body: JSON.stringify({ message: "CORS preflight OK" }) };
    }

    // POST: guardar nuevo post en DynamoDB
    if (method === "POST") {
        try {
            const body = JSON.parse(event.body);
            if (!body.message || !body.author) {
                return { statusCode: 400, headers, body: JSON.stringify({ error: "Faltan campos: mensaje y autor" }) };
            }

            const newPost = {
                PostID: { S: uuidv4() },          // ID único
                message: { S: body.message },     // contenido
                author: { S: body.author },       // autor
                timestamp: { N: Date.now().toString() } // para orden cronológico
            };

            await client.send(new PutItemCommand({
                TableName: TABLE_NAME,
                Item: newPost
            }));

            return {
                 statusCode: 200,
                headers,
                body: JSON.stringify({
                    status: "Post guardado",
                    post: {
                        PostID: newPost.PostID.S,
                        message: newPost.message.S,
                        author: newPost.author.S,
                        timestamp: newPost.timestamp.N
                    }
                })
            };
        } catch (err) {
            return { statusCode: 500, headers, body: JSON.stringify({ error: "Error al procesar POST", details: err.message }) };
        }
    }

    // GET: devolver todos los posts desde DynamoDB
    if (method === "GET") {
        try {
            const result = await client.send(new ScanCommand({ TableName: TABLE_NAME }));
            const posts = result.Items.map(item => ({
                PostID: item.PostID.S,
                message: item.message.S,
                author: item.author?.S || "Anónimo",
                timestamp: parseInt(item.timestamp?.N || "0")
            }));

            // Ordenar cronológicamente (más recientes primero)
            posts.sort((a, b) => b.timestamp - a.timestamp);

            return { statusCode: 200, headers, body: JSON.stringify({ posts }) };
        } catch (err) {
            return { statusCode: 500, headers, body: JSON.stringify({ error: "Error al obtener posts", details: err.message }) };
        }
    }

    // Otros métodos no permitidos
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Método no permitido" }) };
};
