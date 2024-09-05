function loadfriends(){
    let list=document.getElementsByClassName("friend-list-ul")[0];
    for (const name in friends) {
        list.innerHTML+=`<li class="friend flex align-center">
                    <img src="${friends[name]}" alt="">
                    <span>${name}</span>
                    </li>`
    }
}
function showppage() {
    const profilepage = (event) => {
        const target = event.currentTarget;
        const nameElement = target.querySelector('span');
        const imageElement = target.querySelector('img');

        const name = nameElement ? nameElement.innerHTML : 'Shashank Saini';
        const image = imageElement ? imageElement.src : 'images/profile_pictures/myprofile.png';
        const btn1=nameElement&&name!='Shashank Saini' ? "Send Request" :"Add to story";
        const btn2=nameElement&&name!='Shashank Saini' ? "Message" :"Edit Profile";
        const existingProfilePage = document.querySelector('.profile-page');
        if (existingProfilePage) {
            existingProfilePage.remove();
        }

        const profilePage = document.createElement('div');
        profilePage.className = 'profile-page';
        profilePage.innerHTML = `
            <div class="profile-box">
                <div class="cover-photo">
                    <img src="images/profile_pictures/cover.jpg" alt="">
                </div>
                <div class="profile-mains flex align-center">
                    <div class="profile-image">
                        <img src="${image}" alt="">
                    </div>
                    <div class="profile-name flex">
                        <p>${name}</p>
                        <p>543 Friends</p>
                    </div>
                    <div class="profile-btns flex justify-center">
                        <button class="addstorybtn">${btn1}</button>
                        <button class="editprofilebtn">${btn2}</button>
                    </div>
                </div>
                <div class="profile-details">
                    <div class="top-intro flex">
                        <div class="intro-studies">
                            <img src="icons/college.png" alt="" class="grey">
                            Studies B.Sc Bachelor of Science in Computer Science at Aatma Ram Sanatan Dharm College, University of Delhi
                        </div>
                        <div class="intro-location">
                            <img src="icons/home.png" alt="" class="grey">
                            Lives in Delhi, India
                        </div>
                    </div>
                    <div class="bottom-intro flex">
                        <div class="intro-school">
                            <img src="icons/college.png" alt="" class="grey">
                            Went to RPVV, Kishanganj
                        </div>
                        <div class="intro-followers">
                            <img src="icons/followers.png" alt="" class="grey">
                            Followed by 34 people
                        </div>
                    </div>
                </div>
                <button class="close-profile-btn profile">X</button>
            </div>`;

        document.body.appendChild(profilePage);

        profilePage.querySelector('.close-profile-btn').addEventListener('click', () => {
            profilePage.remove();
        });

        profilePage.classList.toggle('show');
        
    };
    let list= document.querySelectorAll(".profile");
    list.forEach(element=>{
        element.addEventListener("click",profilepage);
    })
    document.querySelectorAll('.friend').forEach(element => {
        element.addEventListener('click', profilepage);
    });
    document.querySelectorAll(".search-results-profiles").forEach(element => {
        element.addEventListener('click',profilepage);
    });

}
function loadpost(){
    let list=document.querySelector(".post-ul");
    for(const post in posts){
        list.innerHTML+=`<div class="post ">
        <div class="top flex">
            <div class="post-top-left flex  align-center">
                <img src=${posts[post]['profile image']} alt="">
                <div>
                    <p>${posts[post]['name']}</p>
                    <h6>${posts[post]['upload time']}</h6>
                </div>
            </div>
            <div class="post-top-right flex  align-center">
                <img src="icons/dot-option.png" alt="">
                <button id="remove-post">x</button>
            </div>
        </div>
        <p class="post-caption">${posts[post]['caption']}</p>
        <div class="post-image">
            <img src=${posts[post]['post image']} alt="">
        </div>
        <div class="post-engagement flex align-center">
            <div class="likes flex align-center">
                <img src="icons/like.png" alt="">${posts[post]['likes']}
            </div>
            <div class="com-shr-count flex align-center">
                ${posts[post]['comments']}<img src="icons/comment.png" alt="" class="grey">
                ${posts[post]['share']}<img src="icons/share.png" alt="" class="grey">
            </div>
        </div>
        <div class="post-buttons flex align-center">
            <button class="LCS-button flex justify-center align-center">
                <img src="icons/like.png" alt="" class="like-btn-img">Like
            </button>
            <button class="LCS-button flex justify-center align-center">
                <img src="icons/comment.png" alt="" class="grey">Comment
            </button>
            <button class="LCS-button flex justify-center align-center">
                <img src="icons/share.png" alt="" class="grey">Share
            </button>
        </div>
    </div>`
    }    
}

function searchresult(){
    document.querySelector(".search-bar").addEventListener('input',()=>{
    let search=document.querySelector(".search-bar").value.toLowerCase();
    document.querySelectorAll(".search-results-profiles").forEach((element)=>{
        element.remove();
    })
    for (const contact in friends) {
        if (search!='' && contact.toLowerCase().startsWith(search)) {
            let searchtile=`<li class="search-results-profiles flex align-center">
                    <img src=${friends[contact]} alt="">
                    <span>${contact}</span>
                </li>`;
            document.querySelector(".search-results ul").innerHTML+=searchtile;
        }
        showppage();
    }
    })
    document.addEventListener('click', function(event) {

        const searchResults = document.querySelector('.search-results');
        const searchBar = document.querySelector('.search-bar');
        if (!searchResults.contains(event.target) && event.target !== searchBar) {
            document.querySelector(".search-bar").value='';
            document.querySelectorAll(".search-results-profiles").forEach((element)=>{
                console.log("sjsajs")
                element.remove();
            })
        }
    });
}

function storyarea(){
        //loading stories to story area
        let storybox=document.querySelector(".story-wrapper");
        for (const name in friends) {
            storybox.innerHTML+=`<div class="story">
                            <img src=${friends[name]} alt="">
                            <span>${name}</span>
                        </div>`
        }

        //story area buttons working
        let counter=0;
        document.querySelector(".prev-story").addEventListener("click",()=>{
            storybox.scrollBy({
                left: -400,
                behavior: 'smooth'
            });
            })
            document.querySelector(".next-story").addEventListener('click',()=>{
                storybox.scrollBy({
                    left: 400,
                    behavior: 'smooth'
                });
            })

        //handling clicked story's view
        document.querySelectorAll(".story").forEach(element=>{
            element.addEventListener('click',()=>{
                let name=element.getElementsByTagName('span')[0].innerHTML;
                let image=element.getElementsByTagName('img')[0].src;
                const existingStoryPage = document.querySelector('.storypage');
            if (existingStoryPage) {
                existingStoryPage.remove();
            }
            let div=document.createElement('div');
            div.className='storypage flex justify-center align-center';
            div.innerHTML=`<p>${name}</p>
            <img src=${image} alt="">
            <button>X</button>`;
            document.body.appendChild(div);
            div.getElementsByTagName('button')[0].addEventListener('click', () => {
                div.remove();
            });
        })
        document.body.addEventListener('click', function(event) {
            let div = document.querySelector('.storypage');
            
            if (div && !div.contains(event.target)&& !storybox.contains(event.target)) {
                div.remove();
            }
        });
    })
}
function showfriends(){
    let btn=document.querySelector('.friends-list-btn');
    btn.addEventListener('click',()=>{
    let friends=document.querySelector('.right');
    friends.classList.toggle('friends-show-btn');
    })
    document.body.addEventListener('click', function(event) {
        let div = document.querySelector('.right');
        if (div && div.contains(event.target) && !btn.contains(event.target)) {
            div.classList.toggle('friends-show-btn')
        }
    });
}
document.addEventListener('DOMContentLoaded',()=>{
    loadfriends();
    loadpost();
    showppage();
    searchresult();
    storyarea();
    showfriends();
})