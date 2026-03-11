const mongoose = require("mongoose");
//mongoDB connection
mongoose.connect("mongodb://localhost:27017/student_api")
.then(() => {
   console.log("activity 1: connection buit");
})
.catch(err => {
    console.log("activity 1: connection failed", err)
});
//schema created
var studentSchema = new mongoose.Schema({
    name : String,
    age : Number ,
    grade : String
});
//model created (collection)
 const Student = mongoose.model('Student', studentSchema); 
 //document created
var newStudent = new Student({ 
name: 'John ', 
age: 20, 
grade: 'A' 
}); 
newStudent.save() 
.then(() => console.log('activity2 : Student saved!')) 
.catch(err => console.log('activity 2 : Error:', err)); 

const students = [ 
{ name: 'Alice', age: 21, grade: 'B' }, 
{ name: 'Bob', age: 22, grade: 'A' }, 
{ name: 'Charlie', age: 23, grade: 'C' } 
]; 
Student.insertMany(students) 
.then(() => console.log('activity 3: Students inserted!'))
.catch(err => console.log('activity 3: Error:', err)); 

// 4.document deleted
Student.findByIdAndDelete('69a5eb584468c0153f508ccf')  // Replace with actual student ID 
.then(() => console.log('activity 3 : Student deleted!')) 
.catch(err => console.log('activity 3: Error:', err)); 
// 3. document updated
Student.updateOne({ name: 'Alice' }, { $set: { grade: 'A+' } }) 
.then(() => console.log('activity 3 : Student updated!')) 
.catch(err => console.log('activity 3 : Error:', err)); 

// 2. document read
Student.find() 
.then(students => console.log('activity 4 : All Students:', students)) 
.catch(err => console.log('acttivity 4 : Error:', err)); 

//Activity 4
//schema validations
 studentSchema = new mongoose.Schema({ 
name: { type: String, required: true }, 
age: { type: Number, required: true, min: 18, max: 60 }, 
grade: { type: String, required: true } 
}); 

newStudent = new Student({ 
name: 'mary', 
age: 50,  // Invalid age, should be >=18 
grade: 'A' 
}); 
newStudent.save() 
.then(() => console.log('activity 4: Student saved!')) 
.catch(err => console.log('activity 4: Validation Error:', err)); 

//Activity 5
// Course Schema 
const courseSchema = new mongoose.Schema({ 
name: String, 
duration: String 
}); 
//course model
const Course = mongoose.model('Course', courseSchema); 
// Student Schema with reference to Course 
 studentSchema = new mongoose.Schema({ 
name: String, 
age: Number, 
grade: String, 
enrolledCourse: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' } 
}); 
//course document created
const newCourse = new Course({ 
    name: 'Mathematics',
     duration: '6 months' }); 
newCourse.save() 
.then(course => { 
//student document created with course referennce
const newStudent = new Student({ 
name: 'John Doe', 
age: 20, 
grade: 'A', 
enrolledCourse: course._id 
}); 
return newStudent.save(); 
}) 
.then(student => console.log('activity 5 : Student with course:', student)) 
.catch(err => console.log('activity 5 : Error:', err)); 
// Populate course info when querying student 
Student.findOne({ name: 'John Doe' }) 
.populate('enrolledCourse') 
.then(student => console.log('activity 5 : Student with populated course:', student)) 
.catch(err => console.log('activity 5: Error:', err)); 

//Activity 6

 
// find
Student.find({ grade: 'A' }) 
.then(students => console.log('activity 6: Grade A Stdents:', students)) 
.catch(err => console.log('activity 6 : Error:', err)); 
// Sort 
Student.find().sort({ age: -1 }) 
.then(students => console.log('activity 6 : Sorted by Age (Desc):', students)) 
.catch(err => console.log('activity 6 : Error:', err)); 
// Limit 
Student.find().limit(3) 
.then(students => console.log('activity 6 : Limited to 3 students:', students)) 
.catch(err => console.log('activity 6: Error:', err)); 