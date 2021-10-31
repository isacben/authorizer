# Authorizer for Rapyd

Remote Authorization Server for Rapyd Card Issuing Platform.

This is a simple NodeJS application that exposes 2 enpoints:

1) Status endpoint
2) Authorizer endpoint

## Server status

To check if the serves is deployed, make a request to the status enpoint:

GET /status
```
{{base_uri}}/status
```

Response
```json
{
    "status": "Running..."
}
```

## Remote authorization

Configure Rapyd to send the remote authorization request to the following endpoint:

POST /auth
```
{{base_uri}}/auth
```

Response
```json
{
    "authorization_id": "cardauth_1234567890123456",
    "response_code": "00",
    "auth_code": "T0L7YT"
}
```

The server will authorize all the card sale transactions by returning a "00" response code.

You can simulate an **insufficient funds** response by setting the card issuing transaction (sale) amount to $404 (the currency is not relevant):

Remote authorization request (from Rapyd):
```json
{
    "amount": 404,
    "authorization_id": "cardauth_874618744ffs3r452",
    "card_id": "card_874618744ffs3r452",
    "contact_id": "cont_874618744ffs3r452",
    "created_at": 1352316334,
    "currency": "USD",
    "pos_info": {
        "card_holder_presence": true,
        "identification_code": "GYUI",
        "mcc": "5812",
        "name_and_location": "RITE AID 2244 CORNER ST. MEXICO CITY",
        "terminal_id": "7865"
    },
    "status": "PENDING",
    "type": "authorization"
}
```

Response
```json
{
    "authorization_id": "cardauth_874618744ffs3r452",
    "response_code": "51",
    "auth_code": "H037FD"
}
```

For more information, check Rapyd documentation:

https://docs.rapyd.net/build-with-rapyd/docs/authorizing-a-card-transaction-remotely

~
Isaac Benitez
Sales Engineer @ Rapyd