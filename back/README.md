# Back

This backend project includes the following features:

## User Registration

- Adds a token upon user registration.
- Utilizes a separate empty database for additional user information.

## Login / Logout

- Regenerates a token upon login.
- Deactivates the token upon logout.

## Email Services

- Sends confirmation emails upon registration.
- Handles password reset requests through email.

## MJML Styling for Emails

- Uses MJML for styling email templates.

## Logging

- Implements logging using Winston.

## File Import

- Allows users to upload and assign unique identifiers to files (images).

## Publications

- Enables users to create and browse publications.

## Main Dependencies

- **Express**: Minimalist web framework for Node.js.
- **Mongoose**: Object Data Modeling (ODM) for MongoDB.
- **Multer**: Middleware for handling file uploads.
- **Bcrypt**: Secure password hashing library.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **Dotenv**: Module for loading environment variables from a file.
- **Jose**: JavaScript/TypeScript implementation of JSON Object Signing and Encryption specifications.
- **Mjml**: Email template engine.
- **Nodemailer**: Library for sending emails from Node.js.
- **Nodemon**: Tool for automatically restarting the server upon code changes.
- **TypeScript**: Programming language that extends JavaScript by adding static types.
- **UUID**: Universally Unique Identifier generation.
- **Winston**: Logging library.

## Development Dependencies

- **Concurrently**: Utility for running multiple commands concurrently.

## TypeScript Type Declarations

- **@types/express**: Type declarations for Express.
- **@types/multer**: Type declarations for Multer.
- **@types/mjml**: Type declarations for Mjml.
- **@types/uuid**: Type declarations for UUID.

## How to use in development ?

To use this backend project, `pnpm` is required. If you don't have it installed, you can install it globally by running the following command:

### Intall `pnpm`

```bash
npm install -g pnpm
```

### Navigate to the backend directory

```bash
cd back
```

### Install dependencies

```bash
pnpm i
```

### Run in development mode (Linux and macOS)

```bash
pnpm dev
```

### Run in development mode (Windows)

```bash
pnpm win
```

<br />
<br />

> _Matthieu Gravy_
>
> > <a href="https://www.linkedin.com/in/matthieugravy/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" title="linkedin"/></a>
