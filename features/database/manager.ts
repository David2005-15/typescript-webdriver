import * as sqlite3 from "sqlite3";
import {Assertion} from "../support/assertion";

let database: any = null;
let assert = new Assertion();


export class Manager {
    async connectWithDb(path: any) {
        database = new sqlite3.Database(`${path}`, sqlite3.OPEN_READWRITE, (err: any) => {
            if (err) return console.log(err.message);

            console.log("connected");
        });
    }

    async createBestsellerTable(path: any) {
        await this.connectWithDb(path);

        await database.run("CREATE TABLE bestsellers(item VARCHAR(20), price FLOAT(10))");
    }

    async inertIntoBestseller(path: any, item: any, price: any) {
        await this.connectWithDb(path);

        const sql = "INSERT INTO bestsellers(item, price) VALUES(?, ?)"

        await database.run(sql, [item, price], err => {
            if (err) return console.log(err.message);

            console.log("New Row Added");
        });
    }

    async orderAndCheck(path: any, order: string, priceList: any) {
        await this.connectWithDb(path);
        const sql = `SELECT price FROM bestsellers ORDER BY price ${order}`;
        let arr: number[] = [];

        database.all(sql, [], (err: any, rows: any) => {
            if (err) return console.log("error accrued");

            rows.forEach((row: any) => {
                arr.push(row.price)
            });

            assert.toBeEq(JSON.stringify(arr), JSON.stringify(priceList));
            return console.log(arr);
        });
    }

    async dropTable(path: any) {
        await this.connectWithDb(path);
        database.run("DROP TABLE bestsellers");
    }
}