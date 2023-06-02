# Todo API
This is a RESTful API for managing tasks in a Todo application. It allows users to perform CRUD operations on tasks and provides authentication using JSON Web Tokens (JWT).
### API Endpoints
The API provides the following endpoints:
### Authentication
1. POST /register: Register a new user.
2. POST /login: Log in and obtain a JWT token.
### Tasks
1. GET /tasks: Get all tasks for the authenticated user.
2. POST /tasks: Create a new task for the authenticated user.
3. GET /tasks/:id: Get a specific task by ID for the authenticated user.
4. PUT /tasks/:id: Update a specific task by ID for the authenticated user.
5. DELETE /tasks/:id: Delete a specific task by ID for the authenticated user.

## Authentication and Authorization
1. Authentication is implemented using JWT. Upon successful login, a JWT token is generated and returned in the response.
2. To access the protected routes (tasks endpoints), include the JWT token in the Authorization header with the format Bearer [token].

### Prerequisites
1. Node.js and npm should be installed on your system.
2. MongoDB should be installed and running.

### Getting Started
1. Clone the repository: git clone [repository URL]
2. Install dependencies: npm install
3. Configure environment variables:
   1. Create a .env file in the root directory.
   2. Define the following variables:
        1. PORT: Port number for the API server (default: 3000).
        2. DB_URL: MongoDB connection URL.
        3. SECRET_KEY: Secret key for JWT token generation.
4. Start the server: npm start
5. The API should now be running at http://localhost:[PORT]

## Examples

1. Register a new user:
   - Method: POST
   - URL: `/register`
   - Body:
     ```json
     {
       "username": "Rohit",
       "password": "123"
     }
     ```

2. Log in and obtain a JWT token:
   - Method: POST
   - URL: `/login`
   - Body:
     ```json
     {
       "username": "Rohit",
       "password": "123"
     }
     ```

3. Get all tasks for the authenticated user:
   - Method: GET
   - URL: `/tasks`
   - Headers:
     ```
     Authorization: Bearer [JWT Token]
     ```

4. Create a new task for the authenticated user:
   - Method: POST
   - URL: `/tasks`
   - Headers:
     ```
     Authorization: Bearer [JWT Token]
     ```
   - Body:
     ```json
     {
       "name": "Buy groceries",
       "description": "Milk, eggs, bread"
     }
     ```

5. Update a specific task by ID for the authenticated user:
   - Method: PUT
   - URL: `/tasks/:id`
   - Headers:
     ```
     Authorization: Bearer [JWT Token]
     ```
   - Body:
     ```json
     {
       "name": "Buy groceries",
       "description": "Milk, eggs, bread",
       "status": "completed"
     }
     ```

6. Delete a specific task by ID for the authenticated user:
   - Method: DELETE
   - URL: `/tasks/:id`
   - Headers:
     ```
     Authorization: Bearer [JWT Token]
     ```






