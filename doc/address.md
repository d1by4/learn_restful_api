# Address API Spec

## Create Address

Enpoint : POST /api/contact:idContact/addresses

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "street": "Jalan apa",
  "city": "Kota apa",
  "province": " Provinsi apa",
  "country": "Negara Apa",
  "postal_code": "23123"
}
```

Request Body (Success):

```json
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": "Kota apa",
    "province": " Provinsi apa",
    "country": "Negara Apa",
    "postal_code": "23123"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "postal_code is required"
}
```

## Get Address

Enpoint : POST /api/contact:idContact/addresses/:idAddress

Request Header :

- X-API-TOKEN : token

Request Body (Success):

```json
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": "Kota apa",
    "province": " Provinsi apa",
    "country": "Negara Apa",
    "postal_code": "23123"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "Address is not found"
}
```

## Update Address

Enpoint : PUT /api/contact:idContact/addresses/:idAddress

Request Header :

- X-API-TOKEN : token

Request Body (Success):

```json
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": "Kota apa",
    "province": " Provinsi apa",
    "country": "Negara Apa",
    "postal_code": "23123"
  }
}
```

Response Body (Failed):

```json
{
  "errors": "postal_code is not found"
}
```

## Remove Address

Enpoint : POST /api/contact:idContact/addresses

Request Header :

- X-API-TOKEN : token

Request Body (Success):

```json
{
  "data": "ok"
}
```

Response Body (Failed):

```json
{
  "errors": "address is not found"
}
```

## List address

Enpoint : POST /api/contact:idContact/addresses

Request Header :

- X-API-TOKEN : token

Request Body (Success):

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jalan apa",
      "city": "Kota apa",
      "province": " Provinsi apa",
      "country": "Negara Apa",
      "postal_code": "23123"
    },
    {
      "id": 2,
      "street": "Jalan apa",
      "city": "Kota apa",
      "province": " Provinsi apa",
      "country": "Negara Apa",
      "postal_code": "23123"
    }
  ]
}
```

Response Body (Failed):

```json
{
  "errors": "contact is not found"
}
```
