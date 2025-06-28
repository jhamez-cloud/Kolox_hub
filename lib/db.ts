import {MongoClient} from "mongodb";

if(!process.env.MONGODB_URI){
    throw new Error("MONGODB_URI was not found or provided");
}

const Client = new MongoClient(process.env.MONGODB_URI,{
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

