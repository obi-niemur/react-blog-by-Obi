import { MongoClient } from 'mongodb';
let db;
async function connectTODb(cb){

    //Please change the ${username} and ${password} with your own
    const client = new MongoClient('mongodb+srv://${username}:${password}@cluster0.nuno2se.mongodb.net/?retryWrites=true&w=majority');
    await client.connect()
     db = client.db('react-blog-db');
    cb();

}

export{
    db,
    connectTODb,
}

