import express from "express";
import cors from 'cors';
import connection from "./connection.js";
import { Student } from "./student.modules.js";
import bodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json
app.use(bodyParser.json());

app.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);
    const newStudent = await student.save();
    // res.json(newStudent);
    res.send({ message: "Student added successfully"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/:rollNumber", async (req, res) => {
  try {
    const student = await Student.findOne({
      rollNumber: req.params.rollNumber,
    });
    if (!student) {
      // If no student is found with the given rollNumber
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/:rollNumber", async (req, res) => {
  try {
    const rollNumber = req.params.rollNumber;
    const { firstName, lastName, dateOfBirth, gender, className } = req.body;
    if (!firstName && !lastName && !dateOfBirth && !gender && !className) {
      return res
        .status(400)
        .json({
          message: "At least one field must be provided for the update",
        });
    }

    const updatedStudent = await Student.findOneAndUpdate(
      { rollNumber: req.params.rollNumber },
      { $set: { firstName, lastName, dateOfBirth, gender, className } },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(updatedStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/:rollNumber", async (req, res) => {
  try {
    const deletedStudent = await Student.findOneAndDelete({ rollNumber: req.params.rollNumber });
    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(deletedStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
