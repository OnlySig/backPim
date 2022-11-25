import { DataSource } from "typeorm"
import { User } from "./entity/User";

const myDataSource = new DataSource({
    type: "postgres",
    "host": "peanut.db.elephantsql.com",
    port: 5432,
    username: "byznjnip",
    "password": "sVAvE0Pm-H2TvIArN-ztdHa0VoimFfK2",
    database: "byznjnip",
    //entities: ["src/entity/*.js"],
    entities: [User],
    migrations: ["/migrations/"],
    logging: true,
    synchronize: true,
})

export default myDataSource;