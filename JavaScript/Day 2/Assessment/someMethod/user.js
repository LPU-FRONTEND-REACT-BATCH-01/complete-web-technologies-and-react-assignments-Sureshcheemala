let users = [
    {
        id:1,
        username: "Sohail",
        password: "Sohail@12"
    },
    {
        id:2,
        username: "Suresh",
        password: "Suresh@12"
    },
    {
        id:3,
        username: "Abhinav",
        password: "Abhi@123"
    }
]

let inputData = {
    username: "Suresh",
    password: "Suresh@12"
}

let results = users.some(ele => ele.username === inputData.username)

if(results){
    let user = users.find(ele => ele.username === inputData.username)

    if(user.password === inputData.password){
        console.log("Home")
    }else{
        console.log("Error, Incorrect password")
    }
}else{
    console.log("User not found")
}

