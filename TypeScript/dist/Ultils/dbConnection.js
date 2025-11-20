"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnectionHelper = void 0;
class dbConnectionHelper {
    connectString;
    constructor(connectString) {
        this.connectString = connectString;
    }
    runQuery(query) {
        console.log(`Executing query: ${query} on connection: ${this.connectString}`);
    }
    connect() {
        console.log(`Connected to database with connection string: ${this.connectString}`);
    }
    disconnect() {
        console.log(`Disconnected from database with connection string: ${this.connectString}`);
    }
}
exports.dbConnectionHelper = dbConnectionHelper;
//# sourceMappingURL=dbConnection.js.map