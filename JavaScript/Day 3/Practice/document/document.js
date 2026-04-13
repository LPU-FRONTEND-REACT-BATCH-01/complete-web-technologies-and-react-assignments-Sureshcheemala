let buttonAdd = document.querySelector("#add")
let input = document.querySelector("input")
let ul = document.querySelector("ul")


buttonAdd.addEventListener('click',()=>{
    let li = document.createElement("li")
    let inputText = input.value

    li.textContent = inputText
    

    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"

    deleteButton.addEventListener('click', ()=>{
        li.remove()
    })

    let strikeBtn = document.createElement("button")
    strikeBtn.textContent = "Strike"
    strikeBtn.addEventListener('click', ()=>{
        li.style.textDecoration = "line-through"
    })
    

    li.append(deleteButton)
    ul.append(li)
    li.append(strikeBtn)

    
})
