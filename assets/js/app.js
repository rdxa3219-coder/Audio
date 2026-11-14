// Audio Studio PRO - Main Application

document.addEventListener("DOMContentLoaded", () => {
  console.log("Audio Studio PRO Loaded");

  const audio = document.querySelector("audio");

  if (audio) {
    console.log("Audio player is ready");
  }
});

function showMessage(message) {
  alert(message);
}
