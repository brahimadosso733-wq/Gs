# API Documentation

## Authentication Endpoints

### Login
- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
      "username": "string",
      "password": "string"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
        "token": "JWT_TOKEN",
        "user": {
            "id": "uuid",
            "username": "string",
            "role": "string"
        }
    }
    ```
  - **401 Unauthorized**:
    ```json
    {
        "error": "Invalid credentials"
    }
    ```

## Student Endpoints

### Get Students
- **URL**: `/api/students`
- **Method**: `GET`
- **Response**:
  - **200 OK**:
    ```json
    [
        {
            "id": "uuid",
            "name": "string",
            "grade": "string"
        }
    ]
    ```

### Get Student By ID
- **URL**: `/api/students/{id}`
- **Method**: `GET`
- **Response**:
  - **200 OK**:
    ```json
    {
        "id": "uuid",
        "name": "string",
        "grade": "string"
    }
    ```

## Parent Endpoints

### Get Parents
- **URL**: `/api/parents`
- **Method**: `GET`
- **Response**:
  - **200 OK**:
    ```json
    [
        {
            "id": "uuid",
            "name": "string"
        }
    ]
    ```

### Get Parent By ID
- **URL**: `/api/parents/{id}`
- **Method**: `GET`
- **Response**:
  - **200 OK**:
    ```json
    {
        "id": "uuid",
        "name": "string"
    }
    ```

## Inspector Endpoints

### Get Inspectors
- **URL**: `/api/inspectors`
- **Method**: `GET`
- **Response**:
  - **200 OK**:
    ```json
    [
        {
            "id": "uuid",
            "name": "string"
        }
    ]
    ```

### Get Inspector By ID
- **URL**: `/api/inspectors/{id}`
- **Method**: `GET`
- **Response**:
  - **200 OK**:
    ```json
    {
        "id": "uuid",
        "name": "string"
    }
    ```

---

*Note: Replace `uuid` and `string` with actual values where applicable.*