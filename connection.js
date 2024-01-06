import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.opqkayu.mongodb.net/Students?retryWrites=true&w=majority`
    const connection = mongoose.connect(url)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
export default connection;
