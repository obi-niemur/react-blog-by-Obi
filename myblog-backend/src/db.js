import { MongoClient } from 'mongodb';
let db;
async function connectTODb(cb){
    const client = new MongoClient(`mongodb+srv://Niemur1:Programmer1996@cluster0.nuno2se.mongodb.net/?retryWrites=true&w=majority`);
    await client.connect()
     db = client.db('react-blog-db');
    cb();

}

export{
    db,
    connectTODb,
}