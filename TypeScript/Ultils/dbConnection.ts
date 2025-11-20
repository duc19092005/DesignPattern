export class dbConnectionHelper{
    private connectString : string;

    constructor(connectString : string){
        this.connectString = connectString;
    }

    public runQuery(query: string){
        console.log(`Executing query: ${query} on connection: ${this.connectString}`);
    }

    public connect(){
        console.log(`Connected to database with connection string: ${this.connectString}`);
    }

    public disconnect(){
        console.log(`Disconnected from database with connection string: ${this.connectString}`);
    }
}