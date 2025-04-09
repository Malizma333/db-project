PRAGMA foreign_keys = ON;

CREATE TABLE RecipeCollection (
  collection_name   VARCHAR(20),
  collection_id     INT PRIMARY KEY,
  managed_by        VARCHAR(20) NOT NULL
);

CREATE TABLE Account (
  username          VARCHAR(20) PRIMARY KEY,
  password_hash     VARCHAR(20),
  password_salt     VARCHAR(20)
);

CREATE TABLE Stores (
  collection_id     INT,
  recipe            VARCHAR(20),
  owned_by          VARCHAR(20),
  FOREIGN KEY(recipe, owned_by) REFERENCES Recipe(recipe_name, owned_by) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY(collection_id) REFERENCES RecipeCollection(collection_id) ON DELETE CASCADE
);


CREATE TABLE Author (
  recipe_name       VARCHAR(20),
  owned_by          VARCHAR(20),
  author_name       VARCHAR(20),
  PRIMARY KEY(author_name),
  FOREIGN KEY(recipe_name, owned_by) REFERENCES Recipe(recipe_name, owned_by) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Recipe (
  recipe_name       VARCHAR(20),
  reference         VARCHAR(2083),
  owned_by          VARCHAR(20) NOT NULL,
  PRIMARY KEY(recipe_name, owned_by)
);

CREATE TABLE Contains (
  recipe_name       VARCHAR(20),
  owned_by          VARCHAR(20),
  allergen_name     VARCHAR(20) REFERENCES Allergen(allergen_name),
  FOREIGN KEY(recipe_name, owned_by) REFERENCES Recipe(recipe_name, owned_by) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Composes (
  recipe_name       VARCHAR(20),
  owned_by          VARCHAR(20),
  ingredient_name   VARCHAR(20) REFERENCES Ingredient(ingredient_name),
  FOREIGN KEY(recipe_name, owned_by) REFERENCES Recipe(recipe_name, owned_by) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Allergen (
  allergen_name     VARCHAR(20) PRIMARY KEY
);

CREATE TABLE Ingredient (
  ingredient_name   VARCHAR(20) PRIMARY KEY
);
