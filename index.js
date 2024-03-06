let posts = [
    {
        name: "Vincent Van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4 
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postImageEl = document.getElementById("post-image-container")
const imageInfoEl = document.getElementById("authorAndLocation")
const commentsAreaEl = document.getElementById("comments-section")




function createImg() {
    let img = document.createElement("img")
    img.setAttribute("src", posts[0].post)
    postImageEl.appendChild(img)
    img.setAttribute("id","postImg");
    img.classList.add("post")
}

function createAuthorImg() {
    let img = document.createElement("img")
    img.setAttribute("src", posts[0].avatar)
    imageInfoEl.appendChild(img)
    
    img.setAttribute("id","post-avatar");
    img.classList.add("avatar")
    
} 

function createAuthorName() {
    let paintingInfo = document.createElement("p")
    paintingInfo.innerHTML += 
    `
     <span id="author">${posts[0].name}</span>
     <span id="location">${posts[0].location}</span>
     
    `
    imageInfoEl.appendChild(paintingInfo)
    paintingInfo.classList.add("postInfo")
       
}

    


function createIcons() {
    let heartIcon = document.createElement('img')
    heartIcon.src = 'images/icon-heart.png'
    commentsAreaEl.appendChild(heartIcon)
    heartIcon.setAttribute("id","heart");
    heartIcon.classList.add("icons")
    
    
    let commentsIcon = document.createElement('img')
    commentsIcon.src = 'images/icon-comment.png'
    commentsAreaEl.appendChild(commentsIcon)
    
    commentsIcon.classList.add("icons")
    commentsIcon.setAttribute("id","comment");
    
    let shareIcon = document.createElement('img')
    shareIcon.src = 'images/icon-dm.png'
    commentsAreaEl.appendChild(shareIcon)
    
    shareIcon.setAttribute("id","share");
    shareIcon.classList.add("icons")
    
    
}

function showLikes(){
    let likes = document.createElement("p")
    likes.innerHTML = `<span id="likes">${posts[0].likes} likes</span>`
    commentsAreaEl.appendChild(likes)
    likes.classList.add("comment-area")
    likes.setAttribute("id","like");
}



function createComments() {
    let comments = document.createElement("p")
    comments.innerHTML = `<span id="username">${posts[0].username}</span> ${posts[0].comment}`
    commentsAreaEl.appendChild(comments)
    comments.classList.add("comment-area")
}


function hoverIconHeart() {
    let heart = document.getElementById("heart");
    heart.onmouseover = mouseOver
    heart.onmouseout = mouseOut
    
    function mouseOver() { 
      heart.src = "images/icon-heart-filled.png";
    }
    function mouseOut() { 
      heart.src = "images/icon-heart.png";
    }

   
}


function hoverIconComments() {
    let comments = document.getElementById("comment");
    comments.onmouseover = mouseOver
    comments.onmouseout = mouseOut
    
    function mouseOver() { 
      comments.src = "images/icon-comment-filled.png";
    }
    function mouseOut() { 
      comments.src = "images/icon-comment.png";
    }
    
   
}

function hoverIconShare() {
    let share = document.getElementById("share")
    share.onmouseover = mouseOver
    share.onmouseout = mouseOut
   
    
    function mouseOver() { 
      share.src = "images/icon-dm-filled.png"
    }
    function mouseOut() { 
      share.src = "images/icon-dm.png"
    }
    
   
 
}


createAuthorImg()
createAuthorName() 
createImg()
createIcons()
showLikes()
createComments()
hoverIconHeart()
hoverIconComments()
hoverIconShare() 

const heartBtn = document.getElementById("heart")
const likeValue = document.getElementById("like")
const postImg = document.getElementById("postImg")
let clickCount = 0

postImg.addEventListener("click", function(){ 
    
    let likeCount = posts[0].likes;
    
    likeCount +=1
    clickCount +=1
    
    likeValue.innerHTML = `<span id="likes">${likeCount} likes</span>`
    console.log(likeCount)
    console.log(clickCount)
    
    clickImg()
    
    function clickImg() {
      heartBtn.src = "images/icon-heart-filled.png"
    }
    
    postImg.onmouseout = mouseOut
    
    function mouseOut() { 
      heartBtn.src = "images/icon-heart-filled.png"
    }
    
    if (clickCount % 2 == 0) {
      heartBtn.src = "images/icon-heart.png"
      heartBtn.onmouseout = mouseOut
    
      function mouseOut() { 
        heartBtn.src = "images/icon-heart.png"
      }
      
      likeCount -=1
      likeValue.innerHTML = `<span id="likes">${likeCount} likes</span>`
    }
    
    
    
})

heartBtn.addEventListener("click", function(){ 
    
    let likeCount = posts[0].likes;
    
    likeCount +=1
    clickCount +=1
    
    likeValue.innerHTML = `<span id="likes">${likeCount} likes</span>`
    console.log(likeCount)
    console.log(clickCount)
    
    clickHeart()
    
    function clickHeart() {
      heartBtn.src = "images/icon-heart-filled.png"
    }
    
    heartBtn.onmouseout = mouseOut
    
    function mouseOut() { 
      heartBtn.src = "images/icon-heart-filled.png"
    }
    
    if (clickCount % 2 == 0) {
      heartBtn.src = "images/icon-heart.png"
      heartBtn.onmouseout = mouseOut
    
      function mouseOut() { 
        heartBtn.src = "images/icon-heart.png"
      }
      
      likeCount -=1
      likeValue.innerHTML = `<span id="likes">${likeCount} likes</span>`
    }
    
    
    
})






