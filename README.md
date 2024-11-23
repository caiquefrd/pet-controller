# Pet Controller

This project is a simple API for managing pets using Node.js, Express, and MongoDB.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (v4 or higher)

## Getting Started

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/pet-controller.git
    cd pet-controller
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following content:

    ```env
    PORT=3000
    ```

4. Start the MongoDB server if it's not already running.

5. Start the application:

    ```sh
    npm start
    ```

6. The server will be running on `http://localhost:3000`.

## API Endpoints

### Create a Pet

- **URL:** `/api/pets`
- **Method:** `POST`
- **Body:**
    ```json
    {
      "name": "Pet Name",
      "specie": "Pet Specie",
      "age": 3,
      "tutor": "Tutor Name",
      "tutor_phone": "Tutor Phone"
    }
    ```
- **Response:**
    ```json
    {
      "message": "Pet created successfully",
      "pet": { ... }
    }
    ```

### List Pets

- **URL:** `/api/pets`
- **Method:** `GET`
- **Response:**
    ```json
    {
      "message": "List of pets",
      "pets": [ ... ]
    }
    ```

### Search Pets

- **URL:** `/api/pets/search`
- **Method:** `GET`
- **Query Parameters:** `query`
- **Response:**
    ```json
    {
      "message": "List of pets",
      "pets": [ ... ]
    }
    ```

### Update a Pet

- **URL:** `/api/pets/:id`
- **Method:** `PUT`
- **Body:**
    ```json
    {
      "name": "Updated Name",
      "specie": "Updated Specie",
      "age": 4,
      "tutor": "Updated Tutor",
      "tutor_phone": "Updated Phone"
    }
    ```
- **Response:**
    ```json
    {
      "message": "Pet updated successfully",
      "pet_updated": { ... }
    }
    ```

### Delete a Pet

- **URL:** `/api/pets/:id`
- **Method:** `DELETE`
- **Response:**
    ```json
    {
      "message": "Pet deleted successfully",
      "pet_deleted": { ... }
    }
    ```

## Project Structure

- `src/`
  - `controllers/`
    - `index.ts`: Contains the `PetController` class with methods for handling API requests.
  - `middleware/`
    - `index.ts`: Contains middleware for validating pet data.
  - `models/`
    - `connection.ts`: Contains the MongoDB connection setup.
    - `index.ts`: Contains the Mongoose schema and model for `Pet`.
  - `routes/`
    - `index.ts`: Contains the Express routes for the API.
  - `index.ts`: Entry point of the application.

## License

This project is licensed under the MIT License.