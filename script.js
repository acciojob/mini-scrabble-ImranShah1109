//your code here

let text = document.getElementById("evaluatedText");
    let heading = document.getElementById("letterCount");
    text.addEventListener('input',countLetter);
    


    function countLetter(){
      let word = text.value;
      heading.innerHTML = word.length;

    }
