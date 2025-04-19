# generic

For requests which succeed, but no response is listed, `200` is returned.

For requests which error, one of the following is returned.

```
400
{
  "type": "parse_error",
}
```

This error is for a key which should have been in the Client -> Server request,
but was not found.

```
400
{
  "type": "key_error",
  "key": <string>,
}
```

This error is for when an invalid value for they key `type` is found.

```
400
{
  "type": "type_error",
}
```

This error is for database keys (like collection.id) that don't exist, maybe
some other things later.

```
400
{
  "type": "resource_error",
  "message": <string>,
}
```

```
400
{
  "type": "username_error",
}
```

```
400
{
  "type": "password_error",
}
```

```
400
{
  "type": "auth_token_error",
}
```

```
500
{
  "type": "internal_server_error",
  "message": <string>,
}
```

# login

## client -> server

```
{
  "type": "login",
  "username": <string>,
  "password": <string>,
}
```

## server -> client

```
200
{
  "type": "login_response",
  "auth": <string>,
  "expiration": <int (unix time)>,
}
```

# logout

## client -> server

```
{
  "type": "logout",
  "auth": <string>,
}
```

# is logged in

## client -> server

```
{
  "type": "is_logged_in",
  "auth": <string>,
}
```

Note that this will return either `400` of type `auth_token_error`, or `200`
with no body.

# change username

## client -> server

```
{
  "type": "change_username",
  "auth": <string>,
  "password": <string>,
  "new_username": <string>,
}
```

# change password

## client -> server

```
{
  "type": "change_password",
  "auth": <string>,
  "password": <string>,
  "new_password": <string>,
}
```

# add recipe

## client -> server

```
{
  "type": "add_recipe",
  "auth": <string>,
  "collection_id": <int>,
  "recipe_name": <string>,
  "reference": <string>,
  "authors": [<string>, ...],
  "ingredients": [<string>, ...],
  "allergens": [<string>, ...],
}
```

# remove recipe

## client -> server

```
{
  "type": "remove_recipe",
  "auth": <string>,
  "recipe_name": <string>,
}
```

# rename recipe

## client -> server

```
{
  "type": "rename_recipe",
  "auth": <string>,
  "recipe_name": <string>,
  "new_recipe_name": <string>,
}
```

# filter recipe collection

## client -> server

```
{
  "type": "filter_recipe_collection",
  "collection_id": <int>,
  "recipe_name": <string>,
  "include_allergens": [<string>, ...],
  "exclude_allergens": [<string>, ...],
  "include_ingredients": [<string>, ...],
  "exclude_ingredients": [<string>, ...],
  "authors": [<string>, ...],
  "view_min": <int>,
  "view_max": <int>,
  "random": <bool>,
}
```

## server -> client

```
200
{
  "type": "filter_recipe_collection_response",
  "recipes": [
    {
      "name": <string>,
      "authors": [<string>, ...],
      "reference": <string>,
      "allergens": [<string>, ...],
      "ingredients": [<string>, ...],
      "owner": <string>,
    }, ...
  ],
  "table_size": <int>,
}
```

# rename recipe collection

## client -> server

```
{
  "type": "rename_recipe_collection",
  "auth": <string>,
  "id": <int>,
  "new_name": <string>,
}
```

# add recipe collection

## client -> server

```
{
  "type": "add_recipe_collection",
  "auth": <string>,
  "name": <string>,
}
```

## server -> client

```
200
{
  "type": "add_recipe_collection_response",
  "id": <int>,
}
```

# remove recipe collection

## client -> server

```
{
  "type": "remove_recipe_collection",
  "auth": <string>,
  "id": <int>,
}
```

# get owned recipe collections

## client -> server

```
{
  "type": "get_owned_recipe_collections",
  "auth": <string>,
}
```

## server -> client

```
200
{
  "type": "get_owned_recipe_collections_response",
  "ids": [<int>, ...],
}
```

# get allergens in collection

## client -> server

```
{
  "type": "get_allergens_in_collection",
  "id": <int>,
}
```

## server -> client

```
200
{
  "type": "get_allergens_in_collection_response",
  "allergens": [<string>, ...],
}
```

# get ingredients in collection

## client -> server

```
{
  "type": "get_ingredients_in_collection",
  "id": <int>,
}
```

## server -> client

```
200
{
  "type": "get_ingredients_in_collection_response",
  "ingredients": [<string>, ...],
}
```
# get authors in collection

## client -> server

```
{
  "type": "get_authors_in_collection",
  "id": <int>,
}
```

## server -> client

```
200
{
  "type": "get_authors_in_collection_response",
  "authours": [<string>, ...],
}
```

# get collection exists

## client -> server

```
{
  "type": "get_collection_exists",
  "id": <int>,
}
```

Returns status `200` (no body) if that collection id exists, otherwise a `400`
of type `resource_error`.

# get collection name

## client -> server

```
{
  "type": "get_collection_name",
  "id": <int>,
}
```

## server -> client

```
200
{
  "type": "get_collection_name_response",
  "collection_name": <string>,
}
```

# count recipes in collection

## client -> server

```
{
  "type": "count_recipes_in_collection",
  "id": <int>,
}
```

## server -> client

```
200
{
  "type": "count_recipes_in_collection_response",
  "count": <int>,
}
```

# change reference

## client -> server

```
{
  "type": "change_reference",
  "auth": <string>,
  "recipe_name": <string>,
  "reference": <string>,
}
```

# create allergen

## client -> server

```
{
  "type": "create_allergen",
  "collection_id": <string>,
  "allergen_name": <string>,
}
```

# destroy allergen

coming AD (After Databases)

# add allergen

## client -> server

```
{
  "type": "add_allergen",
  "auth": <string>,
  "recipe_name": <string>,
  "allergen": <string>,
}
```

# remove allergen

## client -> server

```
{
  "type": "remove_allergen",
  "auth": <string>,
  "recipe_name": <string>,
  "allergen": <string>,
}
```

# create ingredient

## client -> server

```
{
  "type": "create_ingredient",
  "collection_id": <string>,
  "ingredient_name": <string>,
}
```

# destroy ingredient

coming AD (After Databases)

# add ingredient

## client -> server

```
{
  "type": "add_ingredient",
  "auth": <string>,
  "recipe_name": <string>,
  "ingredient": <string>,
}
```

# remove ingredient

## client -> server

```
{
  "type": "remove_ingredient",
  "auth": <string>,
  "recipe_name": <string>,
  "ingredient": <string>,
}
```

# add author

## client -> server

```
{
  "type": "add_author",
  "auth": <string>,
  "recipe_name": <string>,
  "author": <string>,
}
```

# remove author

## client -> server

```
{
  "type": "remove_author",
  "auth": <string>,
  "recipe_name": <string>,
  "author": <string>,
}
```
