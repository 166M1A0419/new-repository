let person = {
    fname:'John',
    lname:'smith',
    age:22,
    fullName:()=>{
        console.log(lname+ ' '+ fname)
    }
}
person.fullName()