const { Schema } = require("../../Cua").Schemas;
class Pet extends Schema {
  data = {
    id: 0,
    name: "ten pet",
    age: 18,
  };
}

module.exports = Pet;
