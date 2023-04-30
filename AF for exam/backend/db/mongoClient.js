import {MongoClient} from 'mongodb';

const URI='mongodb://localhost:27017/posts';

const mongoClient = new MongoClient(URI);

mongoClient.connect().then(()=>{
    console.log('sucessfully connected to the DB');
});

export default mongoClient;