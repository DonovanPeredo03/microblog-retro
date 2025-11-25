# Microblog Retro

Proyecto académico de microblog con estética retro, desplegado en **AWS** utilizando **S3** para el frontend, **Lambda** para el backend y **API Gateway** para la integración. Incluye scripts de infraestructura con **Terraform** como referencia.

---

## Arquitectura en AWS

El proyecto se compone de tres servicios principales:

- **Frontend**: alojado en un bucket S3 con Static Website Hosting habilitado.  
- **Backend**: función Lambda en Node.js 18.x que devuelve posts en formato JSON.  
- **API Gateway**: expone el backend mediante un endpoint HTTP y habilita CORS para el consumo desde el frontend.  
- **Infraestructura opcional**: definida en `infra/main.tf` para automatizar la creación de recursos.

### Diagrama de arquitectura (texto)
[ Usuario ] | v [ Navegador Web ] | v [ S3 Bucket - Sitio Estático ] | v [ API Gateway ] ---> [ AWS Lambda ] ---> [ DynamoDB 


---

## Estructura del proyecto

---

## Frontend en AWS S3

1. Crear un bucket S3 en AWS (ejemplo: `microblog-retro-frontend`).  
2. Activar **Static Website Hosting** en el bucket.  
3. Subir los archivos `index.html`, `style.css`, `app.js`.  
4. Configurar permisos públicos de lectura para los objetos.  
5. Obtener la URL pública del sitio desde la configuración de hosting.

---

## Backend en AWS Lambda

1. Crear una función Lambda en AWS.  
2. Seleccionar runtime **Node.js 18.x**.  
3. Configurar el handler como `lambda_function.handler`.  
4. Subir el archivo `backend.zip` que contiene `lambda_function.js` y `package.json`.  
5. Guardar y probar la función desde la consola de AWS.

---

## API Gateway

1. Crear una API REST en API Gateway.  
2. Definir un recurso `/posts` con método **GET**.  
3. Integrar el recurso con la función Lambda.  
4. Habilitar **CORS** para permitir llamadas desde el frontend.  
5. Copiar la URL del endpoint generado por API Gateway.

En el frontend (`app.js`), actualizar el `fetch` para apuntar al endpoint de API Gateway:

```javascript
const res = await fetch("https://TU_API_GATEWAY_URL/posts");
