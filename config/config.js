require("dotenv").config();

module.exports = {
    "development": {
        "username": process.env.dev_username,
        "password": process.env.dev_password,
        "database": process.env.dev_database,
        "host": process.env.dev_host,
        "port": process.env.dev_port,
        "dialect": "mysql"
    },
    "production": {
        "username": process.env.db_username,
        "password": process.env.db_password,
        "database": process.env.db_database,
        "host": process.env.db_host,
        "dialect": "mysql"
    }
}
