// writing to our mongodb database.

const {MongoClient} = require('mongodb')

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tododb';

async function readTask() {

    const client = await MongoClient.connect(MONGO_URL)
    const tododb = client.db(DB_NAME)

    const todos = tododb.collection('todos')

    // const todoArr = await todos.find({}).toArray()
    // const todoArr = await todos.find({priority: {$exists: true}}).sort({priority: 1}).toArray()
    const todoArr = await todos.find({}).sort({priority: 1}).toArray()
    todoArr.forEach((todo) => {
        console.log(JSON.stringify(todo))
    })

}

readTask()


