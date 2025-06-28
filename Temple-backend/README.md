# Temple Backend

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/temple_db

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here

# Email Configuration (for password reset)
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password_here

# Server Configuration
PORT=4000
```

### 3. Email Setup for Password Reset
To enable password reset functionality, you need to:

1. Use a Gmail account
2. Enable 2-factor authentication
3. Generate an App Password:
   - Go to Google Account settings
   - Security > 2-Step Verification > App passwords
   - Generate a new app password for "Mail"
   - Use this password in the `MAIL_PASS` environment variable

### 4. Start the Server
```bash
npm start
```

## API Endpoints

### Authentication
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/me` - Get current user (protected)

### Password Reset
- `POST /api/users/forgot-password` - Send reset link
- `POST /api/users/reset-password` - Reset password with token

## Troubleshooting

### Common Issues:
1. **Email not sending**: Check your Gmail app password and ensure 2FA is enabled
2. **Database connection**: Ensure MongoDB is running
3. **Port conflicts**: Change PORT in .env if 4000 is already in use 