const { Sequelize } = require("sequelize");
require("dotenv").config();

const PokemonModel = require("./models/Pokemon");
const TypeModel = require("./models/Type");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false }
);

// ACA definimos el modelo. En el archivo models/PostsModel, lo que tenemos es una funcion que cuando se ejecute definira el modelo.
// infiero que se pueden tener varias instancias de sequelize O.o
PokemonModel(sequelize);
TypeModel(sequelize);

// Establecemos relaciones entre las entidades
const { Pokemon, Type } = sequelize.models;

Type.belongsToMany(Pokemon, { through: 'PokemonType' });
Pokemon.belongsToMany(Type, { through: 'PokemonType' });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
