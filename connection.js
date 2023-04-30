const {MongoClient} = require('mongodb');
const dotenv = require("dotenv");
dotenv.config();

async function main() {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jtoy9uh.mongodb.net/test`;

    const client = new MongoClient(uri);

    try {
        await client.connect();
    
        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

main().catch(console.error);