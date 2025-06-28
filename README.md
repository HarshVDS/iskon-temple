# ISKCON Temple Project

This is a full-stack web application for ISKCON temple management with disciple registration and volunteer management features.

## Project Structure

- `Temple-backend/` - Node.js/Express backend API
- `Temple-Frontend/` - React.js frontend application

## Live Deployment

- **Frontend**: https://iskon-temple.vercel.app/
- **Backend API**: https://iskon-temple-b.vercel.app/

## Local Development Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup (Port 4000)

1. Navigate to the backend directory:
   ```bash
   cd Temple-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   MAIL_USER=your_gmail_address
   MAIL_PASS=your_gmail_app_password
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

   The backend will run on `http://localhost:4000`

### Frontend Setup (Port 3000)

1. Navigate to the frontend directory:
   ```bash
   cd Temple-Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`

## API Configuration

The project has been configured for production deployment:

- **Frontend API Base URL**: `https://iskon-temple-b.vercel.app/api`
- **Backend CORS Origin**: `https://iskon-temple.vercel.app`
- **Email Links**: All email links now point to `https://iskon-temple.vercel.app`

## Features

- User authentication (login/register)
- Disciple registration with approval workflow
- Volunteer management
- Password reset functionality
- Email notifications

## API Endpoints

- `/api/users` - User authentication and management
- `/api/disciples` - Disciple registration
- `/api/approval` - Approval workflow
- `/api/volunteers` - Volunteer management

## Development Notes

- The backend uses nodemon for automatic restarting during development
- CORS is configured to allow requests from the frontend
- All API calls use the centralized axios instance in `src/utils/api.js`
- Email functionality requires Gmail SMTP configuration

## Troubleshooting

1. **CORS Errors**: Ensure the backend is running on port 4000 and frontend on port 3000
2. **Database Connection**: Check your MongoDB connection string in the `.env` file
3. **Email Issues**: Verify your Gmail credentials and enable "Less secure app access" or use App Passwords
