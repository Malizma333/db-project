# generic

For requests which succeed, but no response is listed, `200` is returned.

For requests which error, one of the following is returned.

```
400
{
  "type": "parse_failed",
}
```

```
400
{
  "type": "missing_keys",
  "keys": [<key>, ...]
}
```

```
400
{
  "type": "bad_values",
  "values": [<value>, ...]
}
```

```
400
{
  "type": "bad_auth_token",
}
```

# login

## client -> server

```
{
  "type": "login",
  "username": <string>,
  "password": <string>
}
```

## server -> client

```
200
{
  "type": "login response",
  "auth": <string>,
  "lifetime": <int (seconds)>
}
```

# logout

## client -> server

```
{
  "type": "logout",
  "auth": <string>
}
```

# is logged in

## client -> server

```
{
  "type": "is logged in",
  "auth": <string>
}
```

Note that this will return either `400` or `200` depending on the status of the
auth token.

# change username

## client -> server

```
{
  "type": "change username",
  "auth": <string>,
  "password": <string>,
  "new_username": <string>
}
```

Note that if the password is wrong, a `400` of type `bad_values` is returned.

# change password

## client -> server

```
{
  "type": "change password",
  "auth": <string>,
  "password": <string>,
  "new_password": <string>
}
```

Note that if the password is wrong, a `400` of type `bad_values` is returned.

# add recipe

## client -> server

```
{
  "type": "add recipe",
  "auth": <string>,
  "collection_id": <int>,
  "recipe_name": <string>,
  "reference": <string>,
  "authors": [<string>, ...],
  "ingredients": [<string>, ...],
  "allergens": [<string>, ...]
}
```

# remove recipe

## client -> server

```
{
  "type": "remove recipe",
  "auth": <string>,
  "recipe_name": <string>
}
```

# rename recipe

## client -> server

```
{
  "type": "rename recipe",
  "auth": <string>,
  "recipe_name": <string>,
  "new_recipe_name": <string>,
}
```

# filter recipe collection

## client -> server

```
{
  "type": "filter recipe collection",
  "collection_id": <int>,
  "recipe_name": <string>,
  "include_allergens": [<string>, ...],
  "exclude_allergens": [<string>, ...],
  "include_ingredients": [<string>, ...],
  "exclude_ingredients": [<string>, ...],
  "authors": [<string>, ...],
  "view_min": <int>,
  "view_max": <int>,
}
```

## server -> client

```
200
{
  "type": "filter recipe collection response",
  "recipes": [
    {
      "name": <string>,
      "author": <string>,
      "reference": <string>,
      "allergens": [<string>, ...],
      "ingredients": [<string>, ...],
      "owner": <string>,
    }, ...
  ],
}
```

# rename recipe collection

## client -> server

```
{
  "type": "rename recipe collection",
  "auth": <string>,
  "id": <int>,
  "new_name": <string>
}
```

# add recipe collection

## client -> server

```
{
  "type": "add recipe collection",
  "auth": <string>,
  "name": <string>
}
```

## server -> client

```
200
{
  "type": "add recipe collection response"
  "id": <int>
}
```

# remove recipe collection

## client -> server

```
{
  "type": "remove recipe collection",
  "auth": <string>,
  "id": <int>
}
```

# get owned recipe collections

## client -> server

```
{
  "type": "get owned recipe collections",
  "auth": <string>
}
```

## server -> client

```
200
{
  "type": "get owned recipe collections response",
  "ids": [<int>, ...]
}
```

# get allergens in collection

## client -> server

```
{
  "type": "get allergens in collection",
  "id": <int>
}
```

## server -> client

```
200
{
  "type": "get allergens in collection response",
  "allergens": [<string>, ...]
}
```

# get ingredients in collection

## client -> server

```
{
  "type": "get ingredients in collection",
  "id": <int>
}
```

## server -> client

```
200
{
  "type": "get ingredients in collection response",
  "ingredients": [<string>, ...]
}
```
# get authors in collection

## client -> server

```
{
  "type": "get authors in collection",
  "id": <int>
}
```

## server -> client

```
200
{
  "type": "get authors in collection response",
  "authours": [<string>, ...]
}
```

# get collection name

## client -> server

```
{
  "type": "get collection name",
  "id": <int>
}
```

## server -> client

```
200
{
  "type": "get collection name response",
  "collection_name": <string>
}
```

# count recipes in collection

## client -> server

```
{
  "type": "count recipes in collection",
  "id": <int>
}
```

## server -> client

```
200
{
  "type": "count recipes in collection response",
  "count": <int>
}
```

# change reference

## client -> server

```
{
  "type": "change reference",
  "auth": <string>,
  "recipe_name": <string>,
  "reference": <string>
}
```

# add allergen

## client -> server

```
{
  "type": "add allergen",
  "auth": <string>,
  "recipe_name": <string>,
  "allergen": <string>
}
```

# append allergen

## client -> server

```
{
  "type": "append allergen",
  "allergen_name": <string>
}
```

# remove allergen

## client -> server

```
{
  "type": "remove allergen",
  "auth": <string>,
  "recipe_name": <string>,
  "allergen": <string>
}
```

# add ingredient

## client -> server

```
{
  "type": "add ingredient",
  "auth": <string>,
  "recipe_name": <string>,
  "ingredient": <string>
}
```

# append ingredient

## client -> server

```
{
  "type": "append ingredient",
  "ingredient_name": <string>
}
```

# remove ingredient

## client -> server

```
{
  "type": "remove ingredient",
  "auth": <string>,
  "recipe_name": <string>,
  "ingredient": <string>
}
```

# add author

## client -> server

```
{
  "type": "add author",
  "auth": <string>,
  "recipe_name": <string>,
  "author": <string>
}
```

# remove author

## client -> server

```
{
  "type": "remove author",
  "auth": <string>,
  "recipe_name": <string>,
  "author": <string>
}
```
