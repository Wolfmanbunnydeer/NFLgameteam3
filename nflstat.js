var tempdate = document.querySelector("date");
  var hometeam = document.querySelector("Hometeam");
  var awayteam = document.querySelector("awayteam");
  var homepoint = document.querySelector("homepoint");
  var awaypoint = document.querySelector(".awaypoint");

  var NFL = document.createElement("game").innerHTML = [
    {     
      thisDate: tempdate,
      AwayTeam: awayteam,
      Hometeam: hometeam,
      Homepoint: homepoint,
      AwayPoint: awaypoint
      }
    ]
    
   //document.getElementById("gameOutput").innerHTML =
    var gameinput= "Date: " +
      tempdate +
      ".<br> HomeTeam: " +
      hometeam +
      ".<br> Home Point: " +
      homepoint +
      ".<br> Away Team:" +
      awayteam +
      ".<br> Away Point:" +
      awaypoint +
      ".";
//alert(gameinput)
 let el;
    let userInput;
   let input = "Date: "+ document.getElementById("date");
 alert(input);
 let list = document.getElementById("list");
    let id = 0;
    let nums = [];

    function AddGame() {
      id++;
      el = document.createElement("li");
      el.style.listStyle = "none";
      el.id = id;
      list.appendChild(el);
      el.innerHTML = input.value;
      nums.push(id);
      console.log(nums);
      console.log(el);
      input.value = "";
     input.focus();
    }

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
$('#MinimumToday').attr('min', today);

var NFLteam = 
    document.getElementById("hometeam");
function myFunction() {
  var x = document.getElementById("mySelect");
  var txt = "";
  var i;
  for (i = 0; i < x.length; i++) {
    txt = txt + x.options[i].text + "<br>";
  }
  
  document.getElementById("gameOutput").innerHTML = txt;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open('GET', "https://wolfmanbunnydeer.github.io/NFLgames-team3/");
  req.onload = function() {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
function myFunction() {

// Create a p element:
const para = document.createElement("p");

// Create a text node:
const node = document.createTextNode("This is a paragraph.");

// Append text node to the p element:
para.appendChild(node);

// Append the p element to the body:
document.getElementById("gameDIV").innerhtml(para);
}
function createNFLItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
// get the ul#NFL
const NFL = document.querySelector('#AddGame');
// add NFL item
function myFunction() {
  const element = document.getElementById("gameDIV");
  if (element.getElementByClass== "flex-container") {
    element.getElementByClass = "flex-container";
  } else {
    element.getElementByClass = "flex-container";
  }

   var content = "<b> Games Entered by User</b><br>";
    document.getElementById("gameOutput").innerHTML = content;


 
function resetTable() {

/* Find a <table> element with id="myTable":*/
var table = document.getElementById("myTable");

/* Add some text to the new cells:*/
 document.getElementById("date").value='';
 document.getElementById("HomeTeam").value='';
document.getElementById("homepoint").value='';
  document.getElementById("awayteam").value='';
document.getElementById("awaypoint").value='';  
  
}


// Create a "close" button and append it to each list item

var myNodelist = document.getElementsByTagName("LI");

var i;

for (i = 0; i < myNodelist.length; i++) {

  var span = document.createElement("SPAN");

  var txt = document.createTextNode("\u00D7");

  span.className = "close";

  span.appendChild(txt);

  myNodelist[i].appendChild(span);

}

 

// Click on a close button to hide the current list item

var close = document.getElementsByClassName("flex-container");

var i;

for (i = 0; i < close.length; i++) {

  close[i].onclick = function() {

    var div = this.parentElement;

    div.style.display = "none";

  }

}

 

// Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');

document.addEventListener('click', function(eval) {

  if (ev.target.tagName === 'LI') {

    ev.target.classList.toggle('checked');

  }

}, false);

 

// Create a new list item when clicking on the "Add" button

function newElement() {

  var li = document.createElement("li");

  var inputValue = document.getElementById("item").value;

  var t = document.createTextNode(inputValue);

  li.appendChild(t);

  if (inputValue === '') {

  } else {

    document.getElementById("list").appendChild(li);

  }

  document.getElementById("gameDiv").value = "";

 

  var span = document.createElement("SPAN");

  var txt = document.createTextNode("\u00D7");

  span.className = "close";

  span.appendChild(txt);

  li.appendChild(span);

 

  for (i = 0; i < close.length; i++) {

    close[i].onclick = function() {

      var div = this.parentElement;

      div.style.display = "none";

    }
  }
 }
}



