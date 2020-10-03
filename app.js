// Init Github
const github = new GitHub();
// Init UI
const ui = new UI();

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
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //   Show Profile
        ui.showProfile(data.profile);
        // Show Repos
        ui.showRepos(data.repos);
      }
    });
  } else {
    //   Clear Profile
    ui.clearProfile();
  }
});
