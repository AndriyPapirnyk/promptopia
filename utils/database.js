import mongoose from 'mongoose';

let isConected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConected) {
        console.log('Mongodb is already conected!');
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConected = true;
        console.log('Conected to mongodb');
    } catch(error) {
        console.error(error);
    }
}