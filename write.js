// writing to our mongodb database.

const {MongoClient} = require('mongodb')

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tododb';

async function writeTask() {

    const client = await MongoClient.connect(MONGO_URL)
    const tododb = client.db(DB_NAME)

    const todos = tododb.collection('todos')
    const todo = {
        task: 'an imp task',
        priority: 2,
        owner: 'manager'
    }
    const result = await todos.insertOne(todo)
    console.log(result)

}

writeTask()
