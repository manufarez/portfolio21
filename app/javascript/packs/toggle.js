console.log("custom js file loaded")

document.addEventListener('turbolinks:load', () => {
  // var switcher = document.getElementById('switcher');
  // switcher.addEventListener('click', toggleSwitch);

  // function toggleSwitch() {
  //   var element = document.getElementById("root");
  //   element.classList.toggle("dark");
  // }
  let darkMode = localStorage.getItem("darkMode");
  localStorage.setItem("darkMode", "enabled");
  const darkModeToggle = document.getElementById("switcher");
  const lightModeSwitcher = document.getElementById("light-mode")
  const darkModeSwitcher = document.getElementById("dark-mode")

  //check if darmode is enabled
  //if enabled, turn off
  const disableDarkMode = () => {
    //Remove class darkmode to the body
    document.documentElement.classList.remove("dark");
    // Hide dark-mode icon
    darkModeSwitcher.classList.add("hidden")
    // Show light-mode icon
    lightModeSwitcher.classList.remove("hidden")
    // Update darkmode in the local storage
    localStorage.setItem("darkMode", "disabled");
    // Set background color to white
    document.documentElement.style.backgroundColor = "#FAFDFE";
  }

  //if disabled, turn on
  const enableDarkMode = () => {
    //Add class darkmode to the body
    document.documentElement.classList.add("dark");
    // Hide light-mode icon
    lightModeSwitcher.classList.add("hidden")
    // Show dark-mode icon
    darkModeSwitcher.classList.remove("hidden")
    // Update darkmode in the local storage
    localStorage.setItem("darkMode", "enabled");
    // Set background color to black
    document.documentElement.style.backgroundColor = "#111";
  }

  if (darkMode === "disabled") {
    disableDarkMode();
  }

  if (document.getElementById('bg')) {
    darkModeToggle.addEventListener("click", () => {
      darkMode = localStorage.getItem("darkMode");
      if (darkMode !== "enabled") {
        enableDarkMode();
        console.log(darkMode);
      } else {
        disableDarkMode();
        console.log(darkMode);
      }
    })
  }
});
