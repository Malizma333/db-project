PRAGMA foreign_keys = ON;

CREATE TABLE RecipeCollection (
  id                INTEGER PRIMARY KEY,
  manager           VARCHAR(100) NOT NULL,
  name              VARCHAR(100) NOT NULL
);

CREATE TABLE Account (
  username          VARCHAR(100) PRIMARY KEY NOT NULL,
  password_hash     VARCHAR(50) NOT NULL,
  password_salt     VARCHAR(50) NOT NULL
);

CREATE TABLE Stores (
  collection_id     INTEGER NOT NULL,
  recipe_name       VARCHAR(100) NOT NULL,
  recipe_owner      VARCHAR(100) NOT NULL,
  FOREIGN KEY(recipe_name, recipe_owner) REFERENCES Recipe(name, owner) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(collection_id) REFERENCES RecipeCollection(id) ON DELETE CASCADE
);

-- is the primary key needed here?
CREATE TABLE Author (
  name              VARCHAR(100) NOT NULL,
  recipe_name       VARCHAR(100) NOT NULL,
  recipe_owner      VARCHAR(100) NOT NULL,
  PRIMARY KEY(name, recipe_name, recipe_owner),
  FOREIGN KEY(recipe_name, recipe_owner) REFERENCES Recipe(name, owner) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Recipe (
  name              VARCHAR(100) NOT NULL,
  owner             VARCHAR(100) NOT NULL,
  reference         VARCHAR(2083),
  PRIMARY KEY(name, owner)
);

CREATE TABLE Contains (
  recipe_name               VARCHAR(100) NOT NULL,
  recipe_owner              VARCHAR(100) NOT NULL,
  allergen_name             VARCHAR(100) NOT NULL,
  allergen_collection_id    INTEGER NOT NULL,
  FOREIGN KEY(allergen_name, allergen_collection_id) REFERENCES Allergen(name, collection_id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(recipe_name, recipe_owner) REFERENCES Recipe(name, owner) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Composes (
  recipe_name               VARCHAR(100) NOT NULL,
  recipe_owner              VARCHAR(100) NOT NULL,
  ingredient_name           VARCHAR(100) NOT NULL,
  ingredient_collection_id  INTEGER NOT NULL,
  FOREIGN KEY(ingredient_name, ingredient_collection_id) REFERENCES Ingredient(name, collection_id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(recipe_name, recipe_owner) REFERENCES Recipe(name, owner) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Allergen (
  name              VARCHAR(100) NOT NULL,
  collection_id     INTEGER NOT NULL REFERENCES RecipeCollection(id),
  PRIMARY KEY(name, collection_id)
);

CREATE TABLE Ingredient (
  name              VARCHAR(100) NOT NULL,
  collection_id     INTEGER REFERENCES RecipeCollection(id) NOT NULL,
  PRIMARY KEY(name, collection_id)
);
