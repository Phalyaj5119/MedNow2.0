for(let i=0;i<localStorage.length;i++){
    console.log(i)
    const table = document.querySelector("tbody")
    const row = document.createElement("tr")
    const cell1 = document.createElement("td")
    const cell2 = document.createElement("td")
    const button = document.createElement("button")
    cell1.textContent = localStorage.key(i)
    cell2.textContent = localStorage.getItem(`${localStorage.key(i)}`)
    button.setAttribute("onclick",`del('${localStorage.key(i)}')`)
    button.innerText = "Remove"
    row.append(i+1)
    row.appendChild(cell1)
    row.appendChild(cell2)
    row.append(button)
    table.appendChild(row)
}

function del(key){
    console.log(key)   
    localStorage.removeItem(key)
    location.reload()
}

function createUser(){
    localStorage.setItem("perkyPearl","pearl")
    localStorage.setItem("Payal","payal")
    localStorage.setItem("Phalya","phalya")
    localStorage.setItem("Parv01","parv")
}