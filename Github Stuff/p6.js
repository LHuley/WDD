function myonload(){
    document.getElementById("menu1").addEventListener("click", displayDate);
    document.getElementById("menu2").addEventListener("click", pan);
    document.getElementById("inp").addEventListener("click", validateForm);
    }

function validateForm() {
    alert("Form submitted successfully!");
    let x = document.forms["myForm"]["sel1"];

    let n = document.forms["myForm"]["name2"];

    let p = document.forms["myForm"]["pwd2"];

    alert("what was checked were: "+x.value + " " + n.value + " " + p.value);
    if (x.checked != "") {
      alert("Animal is checked");
      return false;
    }
  }


  
function inform(){
    const button = document.getElementById('menu1');
    const textDiv = document.getElementById('collapsibleText');

  button.addEventListener('click', function() {
    if (textDiv.style.display === 'none' || textDiv.style.display === '') {
      textDiv.style.display = 'block';
    } else {
      textDiv.style.display = 'none';
    }
  });
}

function pan(pan) {
    const element = document.getElementById(pan);
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
}