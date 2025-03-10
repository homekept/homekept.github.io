function toggleDialog(name) {
    let box = document.getElementById("dialog");
    let buttText = document.getElementById("dialogbutton");
    if (box.style.display === "none") {
      box.style.display = "block";
      buttText.innerHTML = "Hide " + name
    } else {
      box.style.display = "none";
      buttText.innerHTML = "Show " + name
    }

  }
