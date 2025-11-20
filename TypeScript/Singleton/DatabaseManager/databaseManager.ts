import { dbConnectionHelper } from "../../Ultils/dbConnection";

export class databaseManager {
    // First Create a Instance Variable
    // Tạo một instance static duy nhất cho nó thôi
    private static instance: databaseManager

    private connectionHelper : dbConnectionHelper;

    private constructor() {
        const connectionString = "mongodb://localhost:27017/mydatabase";
        this.connectionHelper = new dbConnectionHelper(connectionString);
        this.connectionHelper.connect();
        console.log("DatabaseManager: Thể hiện duy nhất và kết nối DB đã được tạo.");
    }

    public static getInstance(): databaseManager {
        if (!databaseManager.instance) {
            databaseManager.instance = new databaseManager();
        }
        return databaseManager.instance;
    }

    public runQuery(query: string) {
        console.log(`Running query: ${query}`);
        // Logic to run the query using this.connectionHelper
    }
}