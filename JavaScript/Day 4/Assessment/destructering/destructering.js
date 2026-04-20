let users = {
    id:1,
    username:"Suresh",
    userLocation: {
        city: "Ravulapalem",
        state: "Andhra Pradesh"
    },
    phone: "9876545678",
    skills: {
        frontend: ["react", "HTML", "CSS"],
        backend: ["Java", "Springboot"]
    }
}

let {id, username, userLocation:{city,state}, phone, skills:{frontend:[reacts, html, css], backend:[java, springboot]}} = users

console.log(username, reacts)