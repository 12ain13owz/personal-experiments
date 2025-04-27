# Form Examples

This directory contains example implementations of forms in Angular, demonstrating the differences and use cases between `FormsModule` (Template-driven forms) and `ReactiveFormsModule` (Reactive forms).

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

## Examples Included

This directory contains implementations showing:

- Basic form setup for both approaches
- Form validation techniques
- Dynamic form controls
- Form submission handling
- Custom validations
- Form state management

## Development server

To start a local development server, run:

```bash
# Navigate to the form-examples directory
cd angular/form-examples

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
# Navigate to the form-examples directory
cd angular/form-examples

# Build the Docker image
docker build -t angular-form-examples .
```

#### Running the Docker container

```bash
# Run the container
docker run -d -p 4200:80 --name angular-forms angular-form-examples
```

The application will be accessible at `http://localhost:4200`.

#### Stopping the container

```bash
docker stop angular-forms
docker rm angular-forms
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
