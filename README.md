# APIs

## Parse

`.parse` is a function that take a single string as an argument

Example

```javascript
const Cookie = require('simple-cookie-parse');
Cookie.parse('name=Felix;cookie=true');
/*
Return(object)
{
    "name": "Felix",
    "cookie": "true"
}
*/
```

## Get

`.get` take two argument, the first one is the cookie string that will be parsing, and the seconds one is the key that you want to get the result of

Example

```javascript
const Cookie = require('simple-cookie-parse');
Cookie.get('name=Felix;cookie=true', 'name');
/*
Return(string)
Felix
*/
```

And all method are also support for Promise base operation

```javascript
const Cookie = require('simple-cookie-parse');
Cookie.parsePromise().then().catch();
Cookie.getPromise().then().catch();
```