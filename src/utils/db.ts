const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://root:root@recipe-app-db.go8nl8a.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect((err: any) => {
  const collection = client.db("recipe-app-db").collection("recipes");
  console.log(err);
  console.log(collection);
  // perform actions on the collection object
  client.close();
});