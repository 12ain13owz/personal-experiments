# Authentication with Auth0

This is an Angular application integrated with Auth0 for authentication, styled with Tailwind CSS, and organized into feature modules for managing employees and claims. The project uses modern Angular practices, including standalone components, lazy loading, and a utility for merging Tailwind classes.

## Features

- **Authentication with Auth0**:
  - Login and logout functionality using Auth0.
  - Redirects to a callback page after successful login.
  - Displays user profile (email and picture) in the launcher component.
- **Launcher Dashboard**:
  - A central hub displaying user information (email, profile picture, or initials).
  - Card-based navigation to Employee Management and Claim Management features.
  - Responsive design with Tailwind CSS, including hover effects and mock logos.
- **Employee Management**:
  - List view of employees in a responsive table (ID, Name, Email, Status).
  - Filter by name and status (Active, Inactive).
  - Mock pagination with Previous/Next buttons.
- **Claim Management**:
  - List view of claims in a responsive table (ID, Date, Amount, Status).
  - Filter by Claim ID and status (Pending, Approved, Rejected).
  - Mock pagination with Previous/Next buttons.
- **Styling with Tailwind CSS**:
  - Uses `tw-merge` and `clsx` via a `TailwindService` to manage dynamic Tailwind classes.
  - Card-based UI with consistent design across components (shadows, rounded corners).
  - Responsive layouts for mobile and desktop.

## Development Server

To start a local development server, run:

1. **Clone the repository**:

   ```bash
   # Navigate to the authen-auth0 directory
   cd angular/authen-auth0
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure Auth0**:
   - Create an Auth0 account and set up a Single Page Application (SPA).
     [https://www.okta.com/free-trial/customer-identity/]
   - Generate environments `src/environments/environment.development.ts` and `environment.ts` with your Auth0 credentials:

     ```typescript
     environment = {
        production: false,
        auth0: {
            domain: 'YOUR_AUTH0_DOMAIN',
            clientId: 'YOUR_CLIENT_ID',
            redirectUri: window.location.origin + '/login/callback',
        },

     ```

   - Ensure `Allowed Callback URLs`, `Allowed Logout URLs`, and `Allowed Web Origins` are set in the Auth0 Dashboard (e.g., `http://localhost:4200/login/callback` for development).

4. **Run the development server**:

   ```bash
   ng serve
   ```

   - Navigate to `http://localhost:4200` in your browser.
   - The app will automatically reload when you make changes to the source code.

5. **Build for production**:

   ```bash
   ng build
   ```

   - The build artifacts will be stored in the `dist/` directory.

## Using Docker

To run the project using Docker, follow these steps:

This project includes a Dockerfile for containerized deployment and testing.

#### Building the Docker image

```bash
# Navigate to the form-examples directory
cd angular/authen-auth0

# Build the Docker image
docker build -t angular-auth0-examples .
```

#### Running the Docker container

```bash
# Run the container
docker run -d -p 4200:80 --name angular-auth0 angular-auth0-examples
```

#### Stopping the container

```bash
docker stop angular-auth0
docker rm angular-auth0
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

- **Angular Documentation**: [https://angular.io/docs](https://angular.io/docs)
- **Auth0 Angular SDK**: [https://auth0.com/docs/quickstart/spa/angular](https://auth0.com/docs/quickstart/spa/angular)
- **Tailwind CSS Documentation**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **tw-merge**: [https://github.com/dcastil/tailwind-merge](https://github.com/dcastil/tailwind-merge)
- **clsx**: [https://github.com/lukeed/clsx](https://github.com/lukeed/clsx)
- **Docker Documentation**: [https://docs.docker.com/](https://docs.docker.com/)
- **Nginx Configuration**: [https://nginx.org/en/docs/](https://nginx.org/en/docs/)
- **Project Structure**:

```
  .
  └── app/
    ├── core/
    │   ├── config
    │   ├── guards
    │   └── services
    ├── features/
    │   ├── claim/
    │   │   └── pages/
    │   │       └── claim-list
    │   ├── employee/
    │   │   └── pages/
    │   │       └── employee-list
    │   ├── launcher/
    │   │   └── pages/
    │   │       └── launcher
    │   └── login/
    │       └── pages/
    │           ├── login
    │           └── login-callback
    ├── app.config
    ├── app.html
    ├── app.routes.ts
    ├── app.scss
    ├── app.spec.ts
    └── app.ts
```

For additional support, contact the project maintainer or refer to the linked resources.
