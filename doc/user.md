## User api Spec

## Register user

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "dibya",
  "password": "rahasia",
  "name": "dibya wardhana"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "dibya",
    "name": "dibya wardhana"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username must not blank..."
}
```

## Login user

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "dibya",
  "password": "rahasia"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "dibya",
    "name": "dibya wardhana",
    "token": "uuid"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Username or password wrong"
}
```

## Get user

Endpoint : GET /api/users/current

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "username": "dibya",
    "name": "dibya wardhana"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Update user

Endpoint : PATCH /api/users/current

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "password": "rahasia", // tidak wajib
  "name": "dibya wardhana" // tidak wajib
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "dibya",
    "name": "dibya wardhana"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Logout user

Endpoint : DELETE /api/users/current

Request Header :

- X-API-TOKEN : token

Response Body (Success) :

```json
{
  "data": "OK"
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```
