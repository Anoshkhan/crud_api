const express = require("express");
const {getStudents,getStudent,createstudent,updateStudent,deleteStudent} = require("../controllers/student.controller")
const router = express.Router()

//get route
router.get("/", getStudents)
router.get("/:id", getStudent)
//create route
router.post("/", createstudent)
//update route
router.put("/:id", updateStudent)
//delete route
router.delete("/:id", deleteStudent)
 

module.exports = router