

let isClicked = false;

document.getElementById("different-color").addEventListener("click", function() {
  if (isClicked) {
    document.body.style.backgroundColor = "yellow";
   
  } 
  else {
    document.body.style.backgroundColor = "red";
  }
  isClicked = !isClicked; 
});



let firstNum = 23;
let secondNum = 6;


document.querySelectorAll(".main-button").forEach(button => {
    button.addEventListener("click", function() {
        
        alert("taskmeeter.netlify.app says board updated successfully");

        
        firstNum++;
        document.getElementById("first-num").innerText = firstNum;

        
        secondNum--;
        document.getElementById("second-num").innerText = secondNum;

        
    });
});


document.querySelectorAll(".main-button").forEach(button => {
  button.addEventListener("click", function() {
      document.getElementById("message").innerText = "You have Complete The Task Add Dark Mode at 12:48:15 PM";
  });
});


document.getElementById("clear").addEventListener("click", function() {
  document.getElementById("message").innerText = "";
});

function openhtml(){
  window.location.href = "main.html";
}

function gohtml(){
  window.location.href = "index.html";

}
