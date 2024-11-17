async function getData() {
  var nameInput = document.getElementById("userName").value;
  var heading = document.getElementById("head");
  var location = document.getElementsByClassName("location")[0];
  var profileImg = document.getElementsByClassName("profileImg")[0];
  var name = document.getElementsByClassName("name")[0];
  var bio = document.getElementsByClassName("bio")[0];
  var email = document.getElementsByClassName("email")[0];
  var repository = document.getElementsByClassName("repository")[0];
  var followers = document.getElementsByClassName("followers")[0];
  var following = document.getElementsByClassName("following")[0];
  var card = document.getElementsByClassName("card")[0];

  const url = `https://api.github.com/users/${nameInput}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      card.innerHTML = "<h1> No User Found!!!</h1>";
    }
    const json = await response.json();
    console.log(json);
    if (card && json) {
      if (json.email == null || json.location == null) {
        json.email = "test@gmail.com";
        json.location = "Pakistan";
      }
      if (
        repository.length < 10 ||
        followers.length < 10 ||
        following.length < 10
      ) {
      }
      heading.innerHTML = `Welcome, ${json.name}!`;
      location.innerHTML = json.location;
      profileImg.src = json.avatar_url;
      name.innerHTML = json.name;
      bio.innerHTML = json.bio;
      email.innerHTML = json.email;
      repository.innerHTML = `Repository: ${json.public_repos}`;
      followers.innerHTML = `Followers: ${json.followers}`;
      following.innerHTML = `Following: ${json.following}`;
    }
  } catch (error) {
    console.error(error.message);
  }
}
function myFunction() {
  var element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";
}
