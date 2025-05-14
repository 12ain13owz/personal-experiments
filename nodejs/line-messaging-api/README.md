# LINE Messaging API Bot

This project is a Node.js-based LINE bot built using the LINE Messaging API and Express.js. It demonstrates handling various LINE events such as text messages, follows, unfollows, group joins, and leaves, with appropriate responses for each event.

This project was generated using Node.js and Express.js, with dependencies managed via npm.

## Features

This project includes implementations showing:

- Handling of LINE webhook events
- Text message processing and echoing
- Welcome messages for follow and group join events
- Detailed event logging for debugging
- Non-text message handling
- Environment variable configuration for secure credentials
- Docker support for containerized deployment

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- A [LINE Developer Console](https://developers.line.biz/) account
- A LINE channel with Messaging API enabled
- [ngrok](https://ngrok.com/) or similar tool for local development (to expose your local server to the internet)

## Development Server

To start a local development server, run:

```bash
# Navigate to the line-messaging-api directory
cd line-messaging-api

# Install dependencies (if not already done)
npm install

# Set up environment variables
cp .env.example .env
# Edit .env to add your CHANNEL_SECRET and CHANNEL_ACCESS_TOKEN

# Start the development server
npm run dev
```

Once the server is running, the application will be accessible at `http://localhost:3000`. The server will automatically restart when you modify any source files due to the `tsx` watch mode.

To make the webhook publicly accessible, use a tool like `ngrok`:

```bash
ngrok http 3000
```

Then, configure the LINE webhook in the LINE Developers Console with the URL `https://<ngrok-url>/webhook`.

### Using Docker

This project includes a Dockerfile for containerized deployment and testing.

#### Building the Docker Image

```bash
# Navigate to the line-messaging-api directory
cd line-messaging-api

# Build the Docker image
docker build -t line-messaging-api .
```

#### Running the Docker Container

```bash
# Run the container
docker run -d -p 3000:3000 --name line-bot line-messaging-api
```

The application will be accessible at `http://localhost:3000`. Ensure the `.env` file contains your LINE channel credentials.

#### Stopping the Container

```bash
docker stop line-bot
docker rm line-bot
```

## Docker Configuration

The included Dockerfile:

- Uses the official Node.js 18 Alpine image
- Installs dependencies and copies application code
- Exposes port 3000 for the Express server
- Runs the application in development mode with `npm run dev`
- Supports environment variables via `--env-file .env`

This configuration is suitable for both development and production, though for production, you may want to modify the `CMD` to use a production-ready command (e.g., `node src/index.js`).

## Project Structure

```
line-messaging-api/
├── src/
│   └── index.js          # Main bot logic
├── .env                  # Environment variables (not tracked)
├── .env.example          # Template for environment variables
├── .gitignore            # Git ignore file
├── Dockerfile            # Docker configuration file
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Dependency lock file
└── README.md             # This file
```

## Resources

- [LINE Messaging API Documentation](https://developers.line.biz/en/docs/messaging-api/)
