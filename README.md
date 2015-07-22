## Backend ready with Token based authentication

```
npm install
nodemon server.js // http://localhost:5000/api/users

http://localhost:5000/api/users ( open to all, not secured with token authentication )
http://localhost:5000/api/admin ( secure, need token to get access )
http://localhost:5000/api/me ( secure, need token to get access )
```

## To get token

### Step 1 - signup

```
http://localhost:5000/api/signup
GET http://localhost:5000/api/me ( will get current logged in user )
http://localhost:5000/api/admin ( accessible now)
```

OR

```
http://localhost:5000/api/login
GET http://localhost:5000/api/me ( will get current logged in user )
http://localhost:5000/api/admin ( accessible now)
```






