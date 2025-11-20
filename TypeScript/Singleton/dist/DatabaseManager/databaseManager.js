"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseManager = void 0;
const dbConnection_1 = require("../Ultils/dbConnection");
class databaseManager {
    // First Create a Instance Variable
    // Tạo một instance static duy nhất cho nó thôi
    static instance;
    connectionHelper;
    constructor() {
        const connectionString = "mongodb://localhost:27017/mydatabase";
        this.connectionHelper = new dbConnection_1.dbConnectionHelper(connectionString);
        this.connectionHelper.connect();
        console.log("DatabaseManager: Thể hiện duy nhất và kết nối DB đã được tạo.");
    }
    static getInstance() {
        if (!databaseManager.instance) {
            databaseManager.instance = new databaseManager();
        }
        return databaseManager.instance;
    }
    runQuery(query) {
        // Tiến hành run query trong database giả sử
        // Điều này đảm bảo được là nó chỉ là 1 instance duy nhất
        this.connectionHelper.runQuery(query);
    }
}
exports.databaseManager = databaseManager;
//# sourceMappingURL=databaseManager.js.map