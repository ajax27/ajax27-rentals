### delete endpoint

1: Create [delete] endpoint with path '/api/v1/rentals/:rentalId'
2: Retreive rentalId, delete rental from array
3: Send back res with message that rental was deleted

### patch endpoint

1: Create [patch] endpoint with path '/api/v1/rentals/:rentalId'
2: Retreive rentalId, retreive data you want to update from [body]
3: Update rental in array
4: Send back res with message that rental was updated

### auth endpoints

1: Create routes and controllers called [users]
2: Create 2 POST endpoints with path '/api/v1/users/login' and '/api/v1/users/register'
3: In both endpoints return JSON response with some custom text
4: Test these endpoints in POSTMAN

### Create User Model: -> contains

1: 'username', of type String, min 4, max 32
2: 'email', of type, String, min 4, max 32,
should be "true" for [required], [lowercase], [unique] and should [match] email regex we provided on frontend:
[/^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)\*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))\$/]
3: 'password', of type String, and is [required], min 4, max 32
