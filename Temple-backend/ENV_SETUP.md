# Environment Setup Guide

## Required Environment Variables

Create a `.env` file in the root directory of the backend with the following variables:

```env
MONGO_URI=mongodb://localhost:27017
JWT_SECRET=your_jwt_secret_key_here_make_it_long_and_secure
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_email_app_password
PORT=4000
```

## Setup Instructions

1. **MongoDB**: 
   - Install MongoDB locally or use MongoDB Atlas
   - For local MongoDB: `MONGO_URI=mongodb://localhost:27017`
   - For MongoDB Atlas: `MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net`

2. **JWT Secret**: 
   - Generate a secure random string for JWT_SECRET
   - Example: `JWT_SECRET=my_super_secret_jwt_key_2024_iskcon_temple`

3. **Email Configuration** (Optional for development):
   - For Gmail: Use App Password instead of regular password
   - Enable 2-factor authentication and generate an App Password
   - `MAIL_USER=your_email@gmail.com`
   - `MAIL_PASS=your_email_app_password`

4. **Port**: 
   - Default is 4000, but you can change it

## Quick Start (Development)

If you don't have a `.env` file, the application will use default values:
- MongoDB: `mongodb://localhost:27017/IskconData`
- JWT Secret: `your_jwt_secret_key_here_make_it_long_and_secure`
- Email: Will work in development mode without credentials

## Running the Application

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. The server will start on `http://localhost:4000`

## Admin Access

To access the admin dashboard, you need to:

1. **Create an admin user directly in the database**:
   - Use MongoDB Compass or mongo shell
   - Find a user and set `isAdmin: true`
   - Example: `db.users.updateOne({email: "user@example.com"}, {$set: {isAdmin: true}})`

2. **Login as admin**:
   - Go to `http://localhost:4000/login`
   - Use the admin user credentials
   - You should be redirected to `/admin`

## Troubleshooting

- **MongoDB Connection Error**: Make sure MongoDB is running locally or your Atlas connection string is correct
- **JWT Errors**: Ensure JWT_SECRET is set and consistent
- **Email Errors**: Email functionality will work in development mode without credentials
- **Admin Access**: Make sure the user has `isAdmin: true` in the database 