# Node.js Hello API

This is a simple Node.js API for testing on EC2, Docker, or Kubernetes.

## Run Locally

```bash
npm install
npm start
```

## Docker Build & Run

```bash
docker build -t nodejs-hello-api .
docker run -p 3000:3000 nodejs-hello-api
```

## Kubernetes (optional)

Create a deployment and service to run this container on a K8s cluster.
# nodejs-hello-api
