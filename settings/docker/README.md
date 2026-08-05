# Database Services with Docker Compose

This project provides a Docker Compose setup to run multiple database/storage services (MySQL, MongoDB, PostgreSQL, Redis, and MinIO) and a batch script (`db.bat`) to manage them. You can configure your Windows environment to run `db` commands from any directory.

## Prerequisites

- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) installed.
- Windows environment for running `db.bat` (or adapt for other OS).

## Services

The `docker-compose.yml` defines the following services:

- **MySQL** (`mysql`):
  - Image: `mysql:latest`
  - Port: `3306`
  - Credentials: `user_mysql`/`pass_mysql`, Root: `root`
  - Volume: `mysql-data`
- **MongoDB** (`mongo`):
  - Image: `mongo:latest`
  - Port: `27017`
  - Credentials: `user_mongo`/`pass_mongo`
  - Volumes: `mongo-data`, `mongo-config`
- **PostgreSQL** (`postgres`):
  - Image: `postgres:latest`
  - Port: `5432`
  - Credentials: `user_postgres`/`pass_postgres`
  - Volume: `postgres-data`
- **Redis** (`redis`):
  - Image: `redis:latest`
  - Port: `6379`
- **MinIO** (`minio`):
  - Image: `minio/minio:latest`
  - Ports: `9000` (S3 API), `9001` (web console)
  - Credentials: `user_minio`/`pass_minio`
  - Volume: `minio-data`

All services use `restart: unless-stopped` — they come back automatically after a Docker/host restart or a crash, but stay down once you explicitly `db down` them.

## Configure Windows Environment for Global `db` Command

`db.bat` locates `docker-compose.yml` next to itself automatically (via `%~dp0`), so no extra environment variable is needed — just add its folder to PATH:

1. **Find the full path** of your project directory (e.g., `C:\Users\YourName\Projects\db-service`).
2. **Open Environment Variables**:
   - Press `Win + S`, type `environment variables`, and select **Edit the system environment variables** or **Edit environment variables for your account**.
3. In the **System Properties** or **Environment Variables** window:
   - Select the **Path** variable under **User variables** (or **System variables** for all users) and click **Edit**.
   - Click **New** and paste the full path to the directory containing `db.bat` (e.g., `C:\Users\YourName\Projects\db-service`).
   - Click **OK** to save all changes.
4. **Verify the setup**:
   - Open a new Command Prompt and type `db`. You should see usage instructions:
     ```
     Usage: db.bat action [services...]
     Example: db.bat up mongo postgres
     ```

**Note**: Restart your Command Prompt after making changes to apply the new PATH.

## Usage

Use the `db.bat` script to manage database services. The script supports `up` (start) and `down` (stop) actions for specified services.

### Commands

```bash
db.bat <action> <service1> [service2 ...]
```

- **action**: `up` (start services in detached mode) or `down` (stop and remove services).
- **services**: `mysql`, `mongo`, `postgres`, `redis`, `minio` (one or more).

### Examples

- Start MongoDB and PostgreSQL:
  ```bash
  db.bat up mongo postgres
  ```
- Stop MySQL and Redis:
  ```bash
  db.bat down mysql redis
  ```
- Start all services:
  ```bash
  db.bat up mysql mongo postgres redis
  ```

### Notes

- Run `db.bat` in a Windows Command Prompt.
- Ensure Docker is running before executing commands.
- If no services are specified, the script will show usage instructions.

## DATABASE_URL Examples (for Local Development)

Since all services expose their default ports to `localhost`, you can connect directly from your backend application (e.g., Node.js with Prisma, Express, NestJS, etc.) running on your Windows machine (not inside a container).
Replace `[DATABASE_NAME]` with any name you like (e.g., `dev_db`, `myapp`, `test`). Databases will be created automatically on first connection (except MySQL, which requires manual creation).

### PostgreSQL

```
DATABASE_URL="postgresql://user_postgres:pass_postgres@localhost:5432/[DATABASE_NAME]?schema=public"
```

- Recommended for Prisma.

### MySQL

```
DATABASE_URL="mysql://user_mysql:pass_mysql@localhost:3306/[DATABASE_NAME]?charset=utf8mb4&parseTime=true"
```

- MySQL requires you to create the database first (e.g., via MySQL Workbench or command line: mysql -u root -proot -e "CREATE DATABASE [DATABASE_NAME];").

### MongoDB

```
DATABASE_URL="mongodb://user_mongo:pass_mongo@localhost:27017/[DATABASE_NAME]?authSource=admin"
```

- Database is created automatically on first insert.

### Redis

```
REDIS_URL="redis://localhost:6379"
```

### MinIO

```
MINIO_ENDPOINT="localhost"
MINIO_PORT=9000
MINIO_ACCESS_KEY="user_minio"
MINIO_SECRET_KEY="pass_minio"
```

- Web console: [http://localhost:9001](http://localhost:9001)
- S3-compatible SDKs (e.g. `@aws-sdk/client-s3`, `minio` npm package) can connect using the endpoint above with `useSSL: false`.

### Example .env file snippet

```
# PostgreSQL
DATABASE_URL="postgresql://user_postgres:pass_postgres@localhost:5432/dev_db?schema=public"

# MySQL
DATABASE_URL="mysql://user_mysql:pass_mysql@localhost:3306/dev_db?charset=utf8mb4&parseTime=true"

# MongoDB
MONGODB_URI="mongodb://user_mongo:pass_mongo@localhost:27017/dev_db?authSource=admin"

# Redis
REDIS_URL="redis://localhost:6379"
```

## Volumes

Persistent data is stored in the following Docker volumes:

- `db-mysql-data`
- `db-mongo-data`
- `db-mongo-config`
- `db-postgres-data`
- `db-minio-data`

(Redis has no volume — data is in-memory only.)

## Troubleshooting

- **Error: "Please specify the services"**: Ensure you provide at least one service name.
- **Docker Compose failed**: Check if Docker is running and the service names are correct.
- **Port conflicts**: Ensure ports `3306`, `27017`, `5432`, `6379`, `9000`, and `9001` are free.
- **Command `db` not found**: Verify that the directory containing `db.bat` is in your PATH and restart Command Prompt.
- **Compose file not found**: `db.bat` looks for `docker-compose.yml` next to itself — make sure you haven't moved `db.bat` out of this folder.
- **Docker CLI was not found in PATH**: `db.bat` looks for `docker-compose` first, then falls back to `docker compose` (v2 plugin) — install/update Docker Desktop if neither is found.
