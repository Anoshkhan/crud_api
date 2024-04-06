const mongoose = require('mongoose');

const StudentSchema = ({
    // name: String,
    // age: Number,
    // course: String
    name: {
        type: String,
        require:[true,"Please enter your name" ]
    },
    age: {
        type: Number,
        require: true
    },
    course: {
        type: String,
        require:true
    }
}

)

const Student = mongoose.model("Student",StudentSchema)

module.exports = Student