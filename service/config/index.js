// Load variables from .env
require("dotenv").config();

const convict = require("convict");
const schema = require("./config.schema");

// Initialize convict with the specified schema
const config = convict(schema);

// Throws an error if config does not conform to schema
config.validate({ allowed: "strict" });

// Export config as a json object
module.exports = config.getProperties();
