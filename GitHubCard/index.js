/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = []
//   console.log(followersArray);

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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
//step 1
// console.log(entryPoint);
axios 
.get('https://api.github.com/users/jvillalp')
.then(response =>{
  entryPoint.append(createCard(response));
})
.catch(error =>{
  console.log('The data was not returned', error);
});

const followersArray = [
  'mrzacsmith', 'caw442000', 'amberlowe1001', 'haase1020'
];
followersArray.forEach(user =>{
  axios
        .get('https://api.github.com/' + user)
        .then(response =>{
          console.log("hello", response)
          entryPoint.append(createCard(response.data))
        })
        .catch(error =>{
          console.log('The user was not returned', error);
        })
})
// console.log(response)
const entryPoint = document.querySelector('.cards');

function createCard(user){
  // console.log('hello', )
const   
      card = document.createElement('div'),
      userImg = document.createElement('img'),
      cardInfo = document.createElement('div'),
      fullName = document.createElement('h3'),
      userName = document.createElement('p'),
      userLocation = document.createElement('p'),
      userProfile = document.createElement('p'),
      userProfileUrl = document.createElement('a'),
      userFollowers = document.createElement('p'),
      userFollowing = document.createElement('p'),
      userBio = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  fullName.classList.add('name');
  userName.classList.add('username');
  

  card.append(userImg);
  card.append(cardInfo);
  cardInfo.append(fullName);
  cardInfo.append(userName);
  cardInfo.append(userLocation);
  cardInfo.append(userProfileUrl)
  cardInfo.append(userFollowers);
  cardInfo.append(userFollowing);
  cardInfo.append(userBio);

  userImg.src = user.data.avatar_url;
  fullName.textContent = user.data.name;
  userName.textContent = user.data.login;
  userLocation.textContent = `location: ${user.data.location}`;
  userProfile.textContent =  `Profile URL: ${user.data.html_url}`;
  userProfileUrl.href = user.data.html_url;
  userFollowers.textContent = `Followers: ${user.data.followers}`;
  userFollowing.textContent = `Following: ${user.data.following}`;
  bio.textContent = `Bio: ${user.data.bio}`;

  cardInfo.append(userProfile);

return card;
}


