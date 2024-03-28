const url_string = window.location;
const url = new URL(url_string);
const idUser = url.searchParams.get("id");

// DOM Elements
const div = document.createElement("div")
const name = document.createElement("div")
const username = document.createElement("div")
const email = document.createElement("div")
const street = document.createElement("div")
const suite = document.createElement("div")
const city = document.createElement("div")
const zipcode = document.createElement("div")
const lat = document.createElement("div")
const lng = document.createElement("div")
const phone = document.createElement("div")
const website = document.createElement("div")
const nameCompany = document.createElement("div")
const catchPhraseCompany = document.createElement("div")
const bs = document.createElement("div")
const btn = document.createElement("button")
const leftSide = document.createElement("div")
const rightSide = document.createElement("div")
const wrapper = document.createElement("div")

const pFirst = document.createElement("p")
const pSecond = document.createElement("p")

console.log("pFirst", pFirst)

div.className = "user-block"
wrapper.className = "wrapper"
leftSide.className = "side"
rightSide.className = "side"
btn.className = "btn"

fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
    .then(res => res.json())
    .then(item => createUserPage(item)
    )

function createUserPage(item) {
    name.innerText = `Name: ${item.name}`
    username.innerText = `Username: ${item.username}`
    email.innerText = `Email: ${item.email}`
    street.innerText = `Street: ${item.address.street}`
    suite.innerText = `Suite: ${item.address.suite}`
    city.innerText = `City ${item.address.city}`
    zipcode.innerText = `Zipcode: ${item.address.zipcode}`
    lat.innerText = `lat: ${item.address.geo.lat}`
    lng.innerText = `lng: ${item.address.geo.lng}`
    phone.innerText = `Phone number: ${item.phone}`
    website.innerText = `Website ${item.website}`
    nameCompany.innerText = `Name of company: ${item.company.name}`
    catchPhraseCompany.innerText = `Catch phrase: ${item.company.catchPhrase}`
    bs.innerText = `Bs: ${item.company.bs}`
    btn.innerText = 'Post of current user'

    btn.onclick = () => {
        return btnOnclick(item.id)
    }
    leftSide.append(name, username, email, street, suite, city, zipcode)
    rightSide.append(lat, lng, phone, website, nameCompany, catchPhraseCompany, bs,)

    wrapper.append(leftSide, rightSide,)
    div.append(wrapper, btn)

}

function btnOnclick(userId) {
    if (pFirst.innerHTML === "") {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(res => res.json())
            .then(posts => {
                return createPostsElements(posts)
            })
    }


}

function createPostsElements(data) {


    for (let i = 0; i < data.length / 2; i++) {
        const linkPost = document.createElement("a")
        linkPost.innerText = `${i + 1}   ${data[i].title}. `
        linkPost.href = `../PostPage/index.html?id=${data[i].id}`
        pFirst.append(linkPost,)

    }
    const halfIndex = Math.floor(data.length / 2);

    for (let j = halfIndex; j < data.length; j++) {
        const linkPost = document.createElement("a")
        linkPost.innerText = ` ${j + 1} ${data[j].title}. `
        linkPost.href = `../PostPage/index.html?id=${data[j].id}`
        pSecond.append(linkPost)
    }


    div.append(pFirst, pSecond)
}

document.body.appendChild(div)
