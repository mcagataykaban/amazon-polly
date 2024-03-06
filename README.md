# Amazon Polly Text-to-Speech Service

This project utilizes Amazon Polly to convert text to speech in a web application. Built with Node.js and Express, it demonstrates how to integrate AWS Polly into a simple backend service.

## Features

- Text-to-speech conversion using AWS Polly.
- Supports multiple languages and voices.
- Neural engine for lifelike speech synthesis.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- AWS account with access to Polly

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mcagataykaban/amazon-polly.git
2. Navigate to the project directory:
   ```bash
   cd <repository-name>
3. Install dependencies:
   ```bash
   yarn install or  npm install
4. Create a .env file in the root of your project and add your AWS credentials and region:
   AWS_ACCESS_KEY_ID=<your-access-key-id>
   AWS_SECRET_ACCESS_KEY=<your-secret-access-key>
   AWS_REGION=<your-aws-region>
   PORT=<optional-custom-port>
5. To start the server, run:
   ```bash
   yarn start or  npm start
