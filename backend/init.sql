CREATE RecipeCollection (
  collection_name   VARCHAR(20),
  collection_id     INT PRIMARY KEY,
  managed_by        VARCHAR(20) REFERENCES Account(username) NOT NULL
);

CREATE Account (
  username          VARCHAR(20) PRIMARY KEY,
  password_hash     VARCHAR(20),
  password_salt     VARCHAR(20)
);

CREATE Stores (
  collection_id     INT REFERENCES RecipeCollection(id),
  recipe            VARCHAR(20) REFERENCES Recipe(recipe_name)
);

CREATE Author (
  recipe_name       VARCHAR(20) REFERENCES Recipe(recipe_name),
  author_name       VARCHAR(20),
  PRIMARY KEY(recipe_name, author_name)
);

CREATE Recipe (
  recipe_name       VARCHAR(20) PRIMARY KEY,
  reference         VARCHAR(2083),
  owned_by          VARCHAR(20) REFERENCES Account(username) NOT NULL
);

CREATE Contains (
  recipe_name       VARCHAR(20) REFERENCES Recipe(recipe_name),
  allergen_name     VARCHAR(20) REFERENCES Allergen(allergen_name),
  PRIMARY KEY(recipe_name, allergen_name)
);

CREATE Composes (
  recipe_name       VARCHAR(20) REFERENCES Recipe(recipe_name),
  ingredient_name   VARCHAR(20) REFERENCES Ingredient(ingredient_name),
  PRIMARY KEY(recipe_name, ingredient_name)
);

CREATE Allergen (
  allergen_name     VARCHAR(20) PRIMARY KEY
);

CREATE Ingredient (
  ingredient_name   VARCHAR(20) PRIMARY KEY
);
