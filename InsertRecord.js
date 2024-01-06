import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.opqkayu.mongodb.net/Students?retryWrites=true&w=majority`;
const newStudent = {
  firstName: "John",
  lastName: "Doe",
  dateOfBirth: "2003-01-01",
  gender: "Male",
  class: "C.S.E.",
  section: "A",
  rollNumber: "1",
};
  const insertRecord = async () => {
    try {
      const connect = await mongoose.connect(url);
      console.log("Connected to database");

      const database = connect.connection.db;
      const collection = database.collection("studentDetails");

      const result = await collection.insertOne(newStudent);
      console.log(
        `Inserted document into the collection`
      );
    } catch (err) {
      console.error(`Error connecting to the database. \n${err}`);
    } finally {
      mongoose.connection.close();
    }
  };
insertRecord();
