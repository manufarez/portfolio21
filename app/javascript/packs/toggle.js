console.log("custom js file loaded")

document.addEventListener('turbolinks:load', () => {
  // var switcher = document.getElementById('switcher');
  // switcher.addEventListener('click', toggleSwitch);

  // function toggleSwitch() {
  //   var element = document.getElementById("root");
  //   element.classList.toggle("dark");
  // }
  let darkMode = localStorage.getItem("darkMode");
  const darkModeToggle = document.getElementById("switcher");

  //check if darmode is enabled
  //if enabled, turn off
  //if disabled, turn on

  const enableDarkMode = () => {
    //Add class darkmode to the body
    document.body.classList.add("dark");
    // Update darkmode in the local storage
    localStorage.setItem("darkMode", "enabled");
  }

  const disableDarkMode = () => {
    //Remove class darkmode to the body
    document.body.classList.remove("dark");
    // Update darkmode in the local storage
    localStorage.setItem("darkMode", null);
  }



  if (darkMode === "enabled") {
    enableDarkMode();
  }

  darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  })
});




