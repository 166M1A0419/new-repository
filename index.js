const person = {
    fname:'John',
    lname:'smith',
    age:22,
    basicSal: 2345,
    fullName:()=>{
        console.log(lname+ ' '+ fname)
    },
    hra:()=>{
        basicSal*0.2
    }
}
person.fullName()
person.basicSal()