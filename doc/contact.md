# Contact API Spec

## Create contact

Endpoint : POST /api/contacts

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "first_name": "I Kadek Dibya",
  "last_name": "Wardhana Dinata",
  "email": "dibya@example.com",
  "phone": "089999999999999999"
}
```

Response Body (Success)

```json
{
  "data": {
    "id": 1,
    "first_name": "I Kadek Dibya",
    "last_name": "Wardhana Dinata",
    "email": "dibya@example.com",
    "phone": "089999999999999999"
  }
}
```

Response Body (Failed)

```json
{
  "errors": "first_name must not blank"
}
```

## Get contact

Endpoint : GET /api/contacts/:id

Request Header :

- X-API-TOKEN : token

Response Body (Success)

```json
{
  "data": {
    "id": 1,
    "first_name": "I Kadek Dibya",
    "last_name": "Wardhana Dinata",
    "email": "dibya@example.com",
    "phone": "089999999999999999"
  }
}
```

Response Body (Failed)

```json
{
  "errors": "contact is not found"
}
```

## Update contact

Endpoint : PUT /api/contacts/:id

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "first_name": "I Kadek Dibya",
  "last_name": "Wardhana Dinata",
  "email": "dibya@example.com",
  "phone": "089999999999999999"
}
```

Response Body (Success)

```json
{
  "data": {
    "id": 1,
    "first_name": "I Kadek Dibya",
    "last_name": "Wardhana Dinata",
    "email": "dibya@example.com",
    "phone": "089999999999999999"
  }
}
```

Response Body (Failed)

```json
{
  "errors": "success update contact"
}
```

## Remove contact

Endpoint : DELETE /api/contacts/:id

Request Header :

- X-API-TOKEN : token

Response Body (Success)

```json
{
  "data": "Ok"
}
```

Response Body (Failed)

```json
{
  "errors": "contact not found"
}
```

## Search contact

Endpoint : GET /api/contacts

Query Parameter :

- name : string, contact first name or contact last name, optional
- phone : string, contact phone, optional
- email : string, contact email, optional
- page : number, default 1
- size : number, default 10

Request Header :

- X-API-TOKEN : token

Response Body (Success)

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "I Kadek Dibya",
      "last_name": "Wardhana Dinata",
      "email": "dibya@example.com",
      "phone": "089999999999999999"
    },
    {
      "id": 2,
      "first_name": "I Kadek Dibya",
      "last_name": "Wardhana Dinata",
      "email": "dibya@example.com",
      "phone": "089999999999999999"
    }
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```

Response Body (Failed)

```json
{
  "errors": "Unauthorized"
}
```
