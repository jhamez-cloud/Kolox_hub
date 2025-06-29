import {MongoClient, ServerApiVersion} from "mongodb";

if(!process.env.MONGODB_URI){
    throw new Error("MONGODB_URI was not found or provided");
}

const client = new MongoClient(process.env.MONGODB_URI,{
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function getDB(db_name:string){
    try{
        await client.connect();
        console.log("Connected to MongoDB");
        return client.db(db_name);
    }catch(e){
        console.error("Error connecting to database:",e.message);
    }
}

export const getCollection = async (collection_name:string)=>{
    const db = await getDB("Kolox_hub_db");
    if(db){
        return db.collection(collection_name);
    }
}

