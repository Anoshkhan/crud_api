const Student = require("../models/student");
const getStudents = async (req,res)=>{
    try{
        const students = await Student.find({})
        res.status(200).json(students)
    }catch(err){
        res.status(500)
        res.send(err)
    }
}

const getStudent = async(req,res)=>{
    try{
      const id = req.params.id;
      const student = await Student.findById(id);
      res.status(200).json(student);
  }
  catch(err){
      res.status(500).json({message: err.message})
  }
}

const createstudent = async (req,res)=>{
    try{
        const student = await Student.create(req.body);
        res.status(200).json(student)
    }catch(err){
        res.status(500).send(err)
    }
}

const updateStudent = async(req,res)=>{
    try{
      const id = req.params.id;
      const student = await Student.findByIdAndUpdate(id, req.body);
      if(!student){
        res.status(404).json({message: "Product not found"})
      }
      const updatedStudent = await Student.findById(id);
      res.status(200).json(updatedStudent);
  }
  catch(err){
      res.status(500).json({message: err.message})
  }
}

const deleteStudent =  async(req,res)=>{
    try{
      const id = req.params.id;
      const student = await Student.findByIdAndDelete(id, req.body);
      if(!student){
        res.status(404).json({message: "Product not found"})
      }
      res.status(200).send("Student Deleted!!!!!!");
  }
  catch(err){
      res.status(500).json({message: err.message})
  }
}

module.exports = {
    getStudents,
    getStudent,
    createstudent,
    updateStudent,
    deleteStudent
}