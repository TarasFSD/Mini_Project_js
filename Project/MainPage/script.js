const container = document.getElementById("container")

const btnOnclick = (id) => {
    location.href = `../UserDetailsPage/index.html?id=${id}`
}
fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        data.map(item => {
            const block = document.createElement("div")
            const divId = document.createElement("div")
            const divName = document.createElement("div")
            const btn = document.createElement("button")

            block.className = "block"
            btn.className = "btn"

            divId.innerText = `User ID: ${item.id}`
            divName.innerText = `Name: ${item.name}`
            btn.innerText = "Check user details"

            btn.onclick = (() =>
                    btnOnclick(item.id)
            )

            block.append(divId, divName, btn)
            container.appendChild(block)


        })
    })