FROM python:3

# Set the working directory
WORKDIR /app

# Copy only the requirements file first
COPY requirements.txt .

# Install Python dependencies
RUN pip install -r requirements.txt

# Now copy the rest of your application code
COPY . .

# Collect static files
RUN python manage.py collectstatic --noinput

# Expose the application port
EXPOSE 8000

# Command to run your application
CMD ["python", "manage.py", "runserver", "0.0.0:8000"]