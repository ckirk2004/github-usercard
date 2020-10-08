import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "LuckyMcBeast",
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
];

const appendUsers = document.querySelector(".container");

followersArray.forEach((user) => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then((res) => {
      appendUsers.appendChild(gitCard(res.data));
    })
    .catch((err) => console.log(err));
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

axios
  .get("https://api.github.com/users/ckirk2004")
  .then((res) => {
    console.log(res);
    return gitCard(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

function gitCard(obj) {
  //element creation
  const mainDiv = document.createElement("div");
  const userImg = document.createElement("img");
  const secondDiv = document.createElement("div");
  const mainName = document.createElement("h3");
  const userName = document.createElement("p");
  const userLocation = document.createElement("p");
  const userProfile = document.createElement("p");
  const profileLink = document.createElement("a");
  const userFollowers = document.createElement("p");
  const userFollowing = document.createElement("p");
  const userBio = document.createElement("p");
  //add classes
  mainDiv.classList.add("card");
  secondDiv.classList.add("card-info");
  mainName.classList.add("name");
  userName.classList.add("username");
  //add content
  userImg.setAttribute("src", obj.avatar_url);
  mainName.textContent = obj.name;
  userName.textContent = obj.login;
  userLocation.textContent = `Location: ${obj.location}`;
  userProfile.textContent = "Profile:";
  profileLink.setAttribute("href", obj.html_url);
  userFollowers.textContent = `Followers: ${obj.followers}`;
  userFollowing.textContent = `Following: ${obj.following}`;
  userBio.textContent = `Bio: ${obj.bio}`;

  const parentNode = document.querySelector(".cards");
  //appends
  parentNode.appendChild(mainDiv);

  mainDiv.appendChild(userImg);
  mainDiv.appendChild(secondDiv);
  secondDiv.appendChild(mainName);
  secondDiv.appendChild(userName);
  secondDiv.appendChild(userLocation);
  secondDiv.appendChild(userProfile);
  secondDiv.appendChild(profileLink);
  secondDiv.appendChild(userFollowers);
  secondDiv.appendChild(userFollowing);
  secondDiv.appendChild(userBio);

  //return
  return mainDiv;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
