const url_string = window.location;
const url = new URL(url_string);
const idPost = url.searchParams.get("id");

const div = document.createElement("div")
const userId = document.createElement("div")
const postId = document.createElement("div")
const title = document.createElement("div")
const body = document.createElement("div")

const commentsDiv = document.createElement("div")

div.className = "block"

const getData = async () => {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`).then(res => res.json())
    const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`).then(res => res.json())
    createPostElement(post)
    createCommentsElement(comments)
}

const createPostElement = (post) => {
    userId.innerText = `Id of user who is owner ${post.userId}`
    postId.innerText = `Id of post  ${post.id}`
    title.innerText = `Title post: ${post.title}`
    body.innerText = `Body post: ${post.body}`
    div.append(userId, postId, title, body)

    document.body.appendChild(div)
}

const createCommentsElement = (comments) => {


    console.log(comments)

    for (let i = 0; i < comments.length; i += 4) {
        const fourItems = comments.slice(i, i + 4);

        console.log(fourItems);
        fourItems.map(item => {
            const commentsDiv = document.createElement("div")
            const commentsName = document.createElement("div")
            const commentsBody = document.createElement("div")
            const email = document.createElement("div")
            commentsName.innerText = ` Comments name: ${item.name}`
            commentsBody.innerText = `Comments body: ${item.body}`
            email.innerText = `Email: ${item.email}`
            commentsDiv.className="comment"

            commentsDiv.append(commentsName, commentsBody, email)
            document.body.appendChild(commentsDiv)

        })
    }


}


window.onload = getData

