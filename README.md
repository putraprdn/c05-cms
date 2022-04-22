# FSW Challenge 5 - Car Management Dashboard
This challenge is done by Muhamad Putra Perdana - FSW KM-10

## Overview
- [How To Setup](#how-to-setup)
- [Database](#database)
- [API](#api)



## How To Setup
Before running this code you need to setup a few things.

- ### Install dependencies
  To install all required dependencies in this project just simply run this command in your terminal.
  
  ```
  yarn install
  ```
- ### Create .env file
  You need to rename the `.env-example` to `.env` dan fill the required informations like below:
  
  ```
  PORT=3000
  DB_USERNAME=myUsername
  DB_PASSWORD=myPassword
  DB_NAME=myDatabase_db
  DB_HOST=127.0.0.1
  DB_DIALECT=postgres
  ```
- ### Create database
  In the next step, you need create the database by using this command.
  
  ```
  npx sequelize db:create
  ```
  Or you can create your database manually using postgres cli and setup the `DB_NAME` in the `.env` file.
- ### Migrate database
  To initialize the database with the given model(s), you need to run this command.
  
  ```
  npx sequelize-cli db:migrate
  ```
- ### Run the server
  To run the server you can use `yarn` or `npm` following by the scripts in [this](https://github.com/putraprdn/c05-cms/blob/720fb801170bf316b5667e8c279bb02227d4828b/package.json#L5-L8) file.
  
  
## Database
  Here's a quick look on how the structure of the database used in this project.
  **Column** | **Type**
  --- | --- 
  id | integer
  name | varchar(255)
  size | varchar(255)
  rent_price | integer
  image | varchar(255)
  createdAt | timestamp
  updatedAt | timestamp
  
  
## API
  Here's the list of API endpoints that used in this project. You can see the code [here](https://github.com/putraprdn/c05-cms/blob/720fb801170bf316b5667e8c279bb02227d4828b/controller/api/carController.js).  
  >**Note:** the port using in this documentation *(`localhost:3000`)* is for example purposes only, in some cases it may be different with the port you are using.
  - ### List API
    This API will return all datas that available from the database using method `GET`.
    
    `localhost:3000/api/cars`
    
    With the expected output like so:
    ```
    {
      "success": true,
      "error": 0,
      "message": "data successfully listed",
      "data":
      [
        {
            "id": 6,
            "name": "Honda",
            "size": "small",
            "rent_price": 300000,
            "image": "",
            "createdAt": "2022-04-20T16:10:57.567Z",
            "updatedAt": "2022-04-20T16:10:57.567Z"
        }, 
        ...
      ]
    }
    ```
  - ### Get API
    This API will return only one data with given `id` and method `GET`.
    
    `localhost:3000/api/car/:id`
    
    Expected output:
    ```
    {
      "success": true,
      "error": 0,
      "message": "data successfully listed",
      "data": 
      {
        "id": 6,
        "name": "Honda",
        "size": "small",
        "rent_price": 300000,
        "image": "",
        "createdAt": "2022-04-20T16:10:57.567Z",
        "updatedAt": "2022-04-20T16:10:57.567Z"
      }
    }
    ```
  - ### Create API
    This API endpoint will insert new data to your database using method `POST`.
    
    `localhost:3000/api/car/create`
    >**Note:** This API and the rest of API endpoints below (`Update API` and `Delete API`) will redirect you to homepage *(`localhost:3000`)* after execution. So, if you want to check the result you can use [List API](#list-api) or [Get API](#get-api) endpoint.
    
  - ### Update API
    This API will update the data with matched `id` using method `POST`.
    
    `localhost:3000/api/car/update/:id`
    
  - ### Delete API
    This API will delete a data that matched the given `id` from the database using method `GET`.
    
    `localhost:3000/api/car/delete/:id`
