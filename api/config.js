const config = {
    db: {
        host: "172.23.0.2",
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    },
    listPerPage: 10,
};
module.exports = config;