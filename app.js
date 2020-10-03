// Init Github
const github = new GitHub();

// Search Input
const searchInput = document.getElementById("searchUser");

// Search Input Event Listener
searchInput.addEventListener("keyup", (e) => {
  // Get Input Text
  const userText = e.target.value;

  if (userText !== "") {
    //   Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //   Show Alert
      } else {
        //   Show Profile
      }
    });
  }
});
