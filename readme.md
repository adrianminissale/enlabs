### Install
```
  npm install
```
---------------
### .env
```
  create a .env file on the root of project and paste the code sent by email
```
---------------
### Run App
#### Terminal 1 (backend)
```
  npm run server
```
#### Terminal 2 (frontend)
```
  npm run client
```
---------------
### Frontend
```
  http://localhost:8000
```
---------------
### Backend Search Example
#### All movies:
```
  http://localhost:8080/movies
```
#### All movies with pagination:
```
  http://localhost:8080/movies?page=2
```
#### By Id:
```
  http://localhost:8080/movies/259693
```
#### By Name:
```
  http://localhost:8080/movies?name=Conjuring
```
#### By Genre:
```
  http://localhost:8080/movies?genre=Horror
```
---------------
### Last comments
I tried to put focus in the backend part, creating a database and connecting the data necessary for the frontend app