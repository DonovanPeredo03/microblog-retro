# Retro Microblog

A serverless microblog application deployed on **Amazon Web Services (AWS)** using cloud-native services to deliver a scalable web application.

The project demonstrates the implementation of a serverless architecture with **Amazon S3**, **AWS Lambda**, **Amazon API Gateway**, and **Terraform** for infrastructure management.

---

## Features

- Retro-inspired responsive user interface
- Serverless backend powered by AWS Lambda
- RESTful API exposed through Amazon API Gateway
- Static website hosting with Amazon S3
- Infrastructure as Code (IaC) using Terraform
- Cloud-native architecture
- Scalable deployment

---

## Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | HTML5, CSS3, JavaScript |
| **Backend** | AWS Lambda (Node.js 18.x) |
| **API** | Amazon API Gateway |
| **Storage** | Amazon S3 |
| **Infrastructure** | Terraform |
| **Cloud Platform** | Amazon Web Services (AWS) |

---

## Technical Highlights

- Designed a serverless architecture using AWS managed services.
- Hosted the frontend as a static website on Amazon S3.
- Developed backend functionality using AWS Lambda with Node.js.
- Exposed REST endpoints through Amazon API Gateway.
- Automated infrastructure provisioning with Terraform.
- Applied cloud-native architecture principles for scalability and low operational overhead.

---

## Architecture

```text
                User
                  │
                  ▼
            Web Browser
                  │
                  ▼
     Amazon S3 (Static Website)
                  │
                  ▼
      Amazon API Gateway
                  │
                  ▼
        AWS Lambda (Node.js)
                  │
                  ▼
             Amazon DynamoDB
```

---

## Project Structure

```text
microblog-retro/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── backend/
│   ├── lambda_function.js
│   ├── package.json
│   └── backend.zip
│
├── infra/
│   └── main.tf
│
└── README.md
```

---

## Deployment

### Frontend

The frontend is deployed as a static website using **Amazon S3 Static Website Hosting**.

### Backend

The backend runs as an **AWS Lambda** function using the **Node.js 18.x** runtime.

### API

The application exposes its REST endpoints through **Amazon API Gateway** with CORS enabled.

### Infrastructure

Infrastructure provisioning can be automated using the Terraform configuration located in:

```text
infra/main.tf
```

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/DonovanPeredo03/microblog-retro.git
cd microblog-retro
```

---

### Deploy the Frontend

1. Create an Amazon S3 bucket.
2. Enable **Static Website Hosting**.
3. Upload the files inside the `frontend/` directory.
4. Configure public read permissions.
5. Copy the generated website URL.

---

### Deploy the Backend

1. Create an AWS Lambda function.
2. Select the **Node.js 18.x** runtime.
3. Set the handler to:

```text
lambda_function.handler
```

4. Upload `backend.zip`.
5. Deploy the function.

---

### Configure API Gateway

1. Create a REST API.
2. Create a `/posts` resource.
3. Add the **GET** method.
4. Integrate it with AWS Lambda.
5. Enable CORS.
6. Deploy the API.

Update the frontend endpoint inside `app.js`:

```javascript
const res = await fetch("https://YOUR_API_GATEWAY_URL/posts");
```

---

## Future Improvements

- User authentication with Amazon Cognito
- CRUD operations for posts
- DynamoDB integration for persistent storage
- Image uploads using Amazon S3
- CI/CD pipeline with GitHub Actions
- CloudWatch monitoring
- Custom domain with Route 53
- HTTPS using AWS Certificate Manager

---

## Author

**Samuel Donovan Peredo Jiménez**

Computer Science Student  
University of Guadalajara (UDG)

**Backend Development • Cloud Computing • Data Intelligence**

- GitHub: https://github.com/DonovanPeredo03
- LinkedIn: https://www.linkedin.com/in/samuel-donovan-peredo-jimenez-16275b385/
