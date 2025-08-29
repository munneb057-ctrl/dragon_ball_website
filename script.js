document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("whatif-form");
  const input = document.getElementById("whatif-input");
  const output = document.getElementById("output");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const whatIfText = input.value.trim();
    if (whatIfText === "") return;

    // Clear previous scene
    output.innerHTML = "";

    // Add What If text
    const whatIfDisplay = document.createElement("h2");
    whatIfDisplay.textContent = "🔥 What If: " + whatIfText + " 🔥";
    output.appendChild(whatIfDisplay);

    // Create scene container
    const scene = document.createElement("div");
    scene.style.display = "flex";
    scene.style.justifyContent = "space-between";
    scene.style.alignItems = "center";
    scene.style.marginTop = "20px";

    // Left character (Android 18)
    const img18 = document.createElement("img");
    img18.src = "images/android18.png";
    img18.alt = "Android 18";
    img18.style.width = "200px";
    img18.style.animation = "fadeInLeft 1s ease-in-out";

    // Right character (Trunks)
    const imgTrunks = document.createElement("img");
    imgTrunks.src = "images/trunks.png";
    imgTrunks.alt = "Trunks";
    imgTrunks.style.width = "200px";
    imgTrunks.style.animation = "fadeInRight 1s ease-in-out";

    // Add both to scene
    scene.appendChild(img18);
    scene.appendChild(imgTrunks);
    output.appendChild(scene);
  });
});