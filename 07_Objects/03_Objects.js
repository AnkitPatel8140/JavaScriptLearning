const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// console.log(course.courseInstructor)

// we can access an objects fields with this syntax also
// here courseInstructor will se accessible with the name 
// instructor
const {courseInstructor : instructor} = course

console.log(instructor)