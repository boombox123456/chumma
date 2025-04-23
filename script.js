window.onload = () => {
  // Remove "container" class from <body>
  document.body.classList.remove("container");

  // Show welcome popup
  const popup1 = document.getElementById("popup-message1");
  const popup2 = document.getElementById("popup-message2");
  
  
  popup1.classList.add("show");

  setTimeout(() => {
    popup1.classList.add("hide");

    setTimeout(() => {
      popup1.style.display = "none";
      popup2.classList.add("show");

      setTimeout(() =>{
        popup2.classList.add("hide");

        setTimeout(() => {
          popup2.style.display="none";
          codeBox.innerHTML=codeSnippet;
          codeBox.style.display="block";
        }, 1500)
      }, 1500)
    }, 1500); 
  }, 1500);
};