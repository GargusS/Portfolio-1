// card01 Gamehub

// Add an event listener to button the github repo
document.getElementById("myButton01gh").addEventListener("click", function () {
  // Redirect to the desired URL
  window.location.href = "https://github.com/GargusS/Gamehub";
});
// Add an event listener on button to the live site
document.getElementById("myButton01ls").addEventListener("click", function () {
  // Redirect to the desired URL
  window.location.href = "https://gamehub-unicornpoop.netlify.app/";
});

// card02 Community Science Museum

// Add an event listener to button the github repo
document.getElementById("myButton02gh").addEventListener("click", function () {
  // Redirect to the desired URL
  window.location.href = "https://github.com/GargusS/SemesterProjectOne";
});
// Add an event listener on button to the live site
document.getElementById("myButton02ls").addEventListener("click", function () {
  // Redirect to the desired URL
  window.location.href = "https://semesterprojectone.netlify.app/";
});

// card03 Famous Robots Corp

// Add an event listener to button the github repo
document.getElementById("myButton03gh").addEventListener("click", function () {
  // Redirect to the desired URL
  window.location.href = "https://github.com/GargusS/project_exam_2023";
});
// Add an event listener on button to the live site
document.getElementById("myButton03ls").addEventListener("click", function () {
  // Redirect to the desired URL
  window.location.href = "https://project-exam-23.netlify.app/";
});

// Get control to the Hamburger menu and menu links to open / close the sidebar on click
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const sidebar = document.querySelector(".sidebar");
  const menuLinks = document.querySelectorAll(".sidebar a");
  let menuOpen = menuBtn.classList.contains("open");

  // Function to toggle menu visibility
  function toggleMenu() {
    menuOpen = !menuOpen;
    menuBtn.classList.toggle("open", menuOpen);
    sidebar.classList.toggle("open", menuOpen);
  }

  // Add click event listeners to each menu link
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      toggleMenu();
    });
  });

  // Menu button click event
  menuBtn.addEventListener("click", () => {
    toggleMenu();
  });
});
