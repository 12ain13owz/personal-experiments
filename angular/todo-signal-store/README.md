# Todo List with Ngrx, and Signal Store

This project is a simple Todo List application built with Angular, leveraging NgRx for state management and the experimental Signal Store for reactive state handling. It demonstrates how to manage a todo list with features like adding, mark completed, and filtering todos using a combination of NgRx and Signal Store.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

## Features

This directory contains implementations showing:

- Add new todos
- Mark todos as completed
- Filter todos (All, Active, Completed)
- Reactive state management with NgRx and Signal Store
- Responsive UI with Tailwind CSS

## Development server

To start a local development server, run:

```bash
# Navigate to the todo-signal-store directory
cd angular/todo-signal-store

# Install dependencies (if not already done)
npm install

# Serve the application
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Using Docker

This project includes a Dockerfile for containerized deployment and testing.

#### Building the Docker image

```bash
# Navigate to the todo-signal-store directory
cd angular/todo-signal-store

# Build the Docker image
docker build -t angular-todo-signal-store-example .
```

#### Running the Docker container

```bash
# Run the container
docker run -d -p 4200:80 --name angular-todo-signal-store angular-todo-signal-store-example
```

The application will be accessible at `http://localhost:4200`.

#### Stopping the container

```bash
docker stop angular-todo-signal-store
docker rm angular-todo-signal-store
```

## Docker Configuration

The included Dockerfile:

- Uses a multi-stage build process
- Stage 1: Builds the Angular application using Node.js
- Stage 2: Serves the built application using Nginx
- Includes custom Nginx configuration for proper Angular routing
- Exposes port 80 for the web server
- Maps to port 4200 when running the container

### Nginx Configuration

The Dockerfile includes a custom Nginx configuration that:

- Properly handles Angular's client-side routing with HTML5 pushState
- Configures the `try_files` directive to redirect all routes to index.html
- Ensures that deep-linking works correctly in the Angular application
- Sets up appropriate error page handling

This configuration is essential for Single Page Applications (SPAs) like Angular to work correctly when deployed with Nginx.

## Resources

- [Angular Official Documentation on Forms](https://angular.dev/guide/forms)
- [Ngrx Official Documention on Signal Store](https://ngrx.io/guide/signals/signal-store)
