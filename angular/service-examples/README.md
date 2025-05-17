# Service Examples

This directory contains example implementations of services in Angular, demonstrating the differences and use cases between **Singleton Services** (`providedIn: 'root'`) and **Component-Provided Services**. The project is a Todo List application styled with Tailwind CSS.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

## Features

This directory contains implementations showing:

- **Singleton Service**: A `TodoService` that manages Todo data across the application using a single instance.
- **Component-Provided Service**: A `CounterService` that maintains separate instances for each component to demonstrate isolated state.
- **Routing**: Navigation between `/todos` (all todos) and `/completed` (completed todos) routes.
- **Tailwind CSS**: Modern, responsive UI with utility-first styling.
- **RxJS Observables**: Reactive data management for todos.
- **Dependency Injection**: Proper use of Angular's DI system for services.

## Development server

To start a local development server, run:

```bash
# Navigate to the service-examples directory
cd angular/service-examples

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
# Navigate to the service-examples directory
cd angular/service-examples

# Build the Docker image
docker build -t angular-service-examples .
```

#### Running the Docker container

```bash
# Run the container
docker run -d -p 4200:80 --name angular-services angular-service-examples
```

The application will be accessible at `http://localhost:4200`.

#### Stopping the container

```bash
docker stop angular-services
docker rm angular-services
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

- [Angular Official Documentation on Services and Dependency Injection](https://angular.dev/guide/di)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation/framework-guides/angular)
- [RxJS Documentation](https://rxjs.dev/)
