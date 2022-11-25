"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
var myDataSource = new typeorm_1.DataSource({
    type: "postgres",
    "host": "peanut.db.elephantsql.com",
    port: 5432,
    username: "byznjnip",
    "password": "sVAvE0Pm-H2TvIArN-ztdHa0VoimFfK2",
    database: "byznjnip",
    //entities: ["src/entity/*.js"],
    entities: [User_1.User],
    migrations: ["/migrations/"],
    logging: true,
    synchronize: true,
});
exports.default = myDataSource;
