async function loadHTML() {
    const response = await fetch("1.html");
    const html = await response.text();
    document.querySelector("#content").innerHTML = html;
  }
  
  loadHTML();
  