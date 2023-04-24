const { Sequelize } = require("sequelize");
require("dotenv").config();

const PokemonModel = require("./models/Pokemon");
const TypeModel = require("./models/Type");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false,
});
// ACA definimos el modelo. En el archivo models/PostsModel, lo que tenemos es una funcion que cuando se ejecute definira el modelo.
// infiero que se pueden tener varias instancias de sequelize O.o
PokemonModel(sequelize);
TypeModel(sequelize);
// Establecemos relaciones entre las entidades
const { Pokemon, Type } = sequelize.models;

Type.belongsToMany(Pokemon, { through: "PokemonType" }, { timestamps: false });
Pokemon.belongsToMany(Type, { through: "PokemonType" }, { timestamps: false });

sequelize
  .authenticate()
  .then(() => console.log("Connected to the database"))
  .catch((error) => console.error("Unable to connect to the database:", error));

sequelize
  .query("SELECT current_database()")
  .then((result) => {
    console.log("Nombre de la base de datos:", result[0][0].current_database);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
