"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const databaseManager_1 = require("./Singleton/DatabaseManager/databaseManager");
const getInstance = databaseManager_1.databaseManager.getInstance();
getInstance.runQuery("SELECT * FROM users");
const getInstance2 = databaseManager_1.databaseManager.getInstance();
getInstance2.runQuery("SELECT * FROM products");
console.log("Are both instances the same?", getInstance === getInstance2);
//# sourceMappingURL=app.js.map