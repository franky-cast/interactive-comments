fetch('./data.json').then(response => response.json()).then(data => {
    console.log(data)
    const {comments, currentUser: {image: {png}},currentUser: {username}} = data
    console.log("comments")
    console.log(comments)
    
    console.log(png)
    console.log(username)
})