// function addSpices(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Spices added")
//             resolve()
//         }, 1000)
//     })
// }

let token =
  "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJzb2hhaWxAZ21haWwuY29tIiwicm9sZXMiOlsiUk9MRV9GT1VOREVSIl0sImlzQWN0aXZlIjp0cnVlLCJpc3MiOiJhdXRoLXNlcnZpY2UiLCJpYXQiOjE3NzU5MDQ1MzgsImV4cCI6MTc3NTkwODEzOH0.a1ua-palOZneZmitOSML9qWubh70CfkIHqjT_kKwKulbHcYMjxyPxc-RidIGEgEB";

let fetchData = async () => {
  try {
    let res = await fetch("http://localhost:8085/startups", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if(res.ok){
        let data = await res.json()
        console.log(data);
        displayData(data.profile)
    }
    console.log(res);
  } catch (error) {
    console.log(error);
    
  }
};

fetchData();

let displayData = (data) =>{
  let container = document.createElement("ul")
  let name = document.createElement("li")
  let description = document.createElement("li")

  name.textContent = profile.name
  description.textContent = profile.description
}
