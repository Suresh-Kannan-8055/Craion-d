const { Sequelize, DataTypes, Model } = require("sequelize");
const dbConfig = require("./config.json");

const sequelize = new Sequelize("coaion_d", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});
(async () => {
  try {
    await sequelize.authenticate(); // Authenticate the database connection
    console.log("Database Connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
