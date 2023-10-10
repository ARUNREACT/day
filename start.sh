#!/bin/bash

# Navigate to the Laravel backend directory
cd backend/

# Start the Laravel backend server
php artisan serve &

# Navigate to the React frontend directory
cd ../frontend/

# Start the React development server
npm start
