# Dapp Backend

A decentralized application backend built with NestJS framework, providing a robust and scalable server-side infrastructure.

## Features

- Built with NestJS framework
- TypeScript support
- RESTful API endpoints
- Scalable architecture
- Testing support
- Production-ready configuration

## Prerequisites

- Node.js (v14 or higher)
- Yarn package manager
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/YourUsername/dapp-backend.git

cd dapp-backend

```

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g mau
$ mau deploy
```

Project Structure
```
src/
├── controllers/     # Route controllers
├── services/       # Business logic
├── models/         # Data models
├── middleware/     # Custom middleware
├── config/         # Configuration files
└── main.ts         # Application entry point
```