const config = {
  env: {
    format: ["development", "test", "production"],
    default: "production",
    env: "NODE_ENV",
  },
  server: {
    port: {
      format: "port",
      default: 5203,
      env: "NODE_SERVER_PORT",
    },
  },
};

module.exports = config;
