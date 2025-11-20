import { databaseManager } from "./Singleton/DatabaseManager/databaseManager";

const getInstance = databaseManager.getInstance();

getInstance.runQuery("SELECT * FROM users");

const getInstance2 = databaseManager.getInstance();

getInstance2.runQuery("SELECT * FROM products");

console.log("Are both instances the same?", getInstance === getInstance2);