# book-food-api
organize your orders schedule


## installation

- `npm install`

## run

- `mongod`
- `node index.js`


## usage

### Specifications
`GET http://localhost:8081/api/v1/specifications`

### Users
- create user
`POST http://localhost:8081/api/v1/users`

```
{
	username: text,
	password: text,
	is_restaurant: boolean
}
```
- login
`POST http://localhost:8081/api/v1/sessions`

```
{
	username: username,
	password: password
}
```
- logout
`DELETE http://localhost:8081/api/v1/sessions/current`
- about me: `GET http://localhost:8081/api/v1/users/me`
- all users: `GET http://localhost:8081/api/v1/users`
- only restaurants: `GET http://localhost:8081/api/v1/collections/users?filter[is_restaurant]=true`
- only clients: `GET http://localhost:8081/api/v1/collections/users?filter[is_restaurant]=false`



### Orders

- create order:
`http://localhost:8081/api/v1/collections/orders`

```
{
	restaurant: id_restaurant,
	content: text,
	datetime: datetime
}
```
