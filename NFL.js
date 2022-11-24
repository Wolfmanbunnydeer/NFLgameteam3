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
    
    
 let el;
    let userInput;
    let input = document.getElementById("date");
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

    let link;
    let flex;
document.getElementById("Game");
    let mylist = document.getElementById("list");
    let theid = 0;
    let thenums = [];

    function AddGame() {
      id++;
      el = document.createElement("li");
      el.style.listStyle = "none";
      el.id = id;
      list.append(el);
      el.innerHTML = input.value;
     
      nums.push(id);
      console.log(nums);
      console.log(el);
      input.value = "";
      input.focus();
    }
  function update() {
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

    let link;
    let flex;
document.getElementById("Game");
    let mylist = document.getElementById("list");
    let theid = 0;
    let thenums = [];

    function update() {
      id++;
      el = document.createElement("li");
      el.style.listStyle = "none";
      el.id = id;
      list.append(el);
      el.innerHTML = input.value;
     
      nums.push(id);
      console.log(nums);
      console.log(el);
      input.value = "";
      input.focus();
    }   





    //try another way to add starting with an existing li
    //then create other li dynamically
    // function addEl() {
    //   let dest = document.querySelector("li");
    // }

    function deleteItem() {
      el.remove();
      console.log("Element:" + el + " removed")
      input.focus();
    }
function AddGame()() {
  window.location.assign("https://wolfmanbunnydeer.github.io/NFLgameteam3/")
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

var close = document.getElementsByClassName("close");

var i;

for (i = 0; i < close.length; i++) {

  close[i].onclick = function() {

    var div = this.parentElement;

    div.style.display = "none";

  }

}

 

// Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {

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

    alert("This field cannot be empty!");

  } else {

    document.getElementById("list").appendChild(li);

  }

  document.getElementById("item").value = "";

 

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

var close = document.getElementsByClassName("close");

var i;

for (i = 0; i < close.length; i++) {

  close[i].onclick = function() {

    var div = this.parentElement;

    div.style.display = "none";

  }

}

 

// Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {

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

    alert("This field cannot be empty!");

  } else {

    document.getElementById("list").appendChild(li);

  }

  document.getElementById("item").value = "";

 

  var span = document.createElement("SPAN");

  var txt = document.createTextNode("\u00D7");

  span.className = "close";

  span.appendChild(txt);

  li.appendChild(span);

 

  for (i = 0; i < close.length; i++) {

    close[i].onclick = function() {

      var div = this.parentElement;

      div.style.display = "none";
      
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
const nflTeams = [
  {
 


  }
  ]
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
  function AddGame() {
  const frame = document.getElementById("myFrame");
  const h2 = frame.contentWindow.document.getElementsByTagName("H2")[0];
  const node = document.importNode(h2, true);
  document.body.appendChild(node);
  }
  document.getElementById("gameButton").addEventListener("click", myFunction);

function UPDATE() {
let theflex = ""
var i
  for (i= 0; theflex.length; i++)
    if(i>0); theflex = "<option>"
  }          document.getElementById("gameButton").addEventListener("click", NFLFunction);

function NFLFunction() {
var theNFLstat  = ""
for (let i = 0; i < theNFLstat.length; i++) {  
 for (let j= 0; j <= i; j++)
 {
var theNFLstat= [
     {
      City: "Arizona",
      Name: "Arizona Cardinal",
      Date: "March 7",
      AwayTeam: "Falcon",
      Hometeam: "Cardinals",
      Homepoint: "78",
      AwayPoint: "45"
    },
    {
      City: "Atlanta",
      Name: "Falcons",
      Date: "March 7",
      AwayTeam: "Minnesota Vikings",
      Hometeam: "Falcons",
      Homepoint: "23",
      AwayPoint: "8"
    },
    {
      City: "N/S Carolinas",
      Name: "Carolina Panther",
      Date: "March 7",
      AwayTeam: "Minnesota Vikings",
      Hometeam: "Panther",
      Homepoint: "45",
      AwayPoint: "8"
    },
    {
      City: "Chicago",
      Name: "Chicago Bears",
      Date: "March 7",
      AwayTeam: "Dallas Cowboys",
      Hometeam: "Chicago Bears",
      Homepoint: "78",
      AwayPoint: "8"
    },
    {
      City: "Dallas",
      Name: "Dallas Cowboys",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Dallas Cowboys",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Detroits",
      Name: "Detroit Lions",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Detroit Lions",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Jacksonville",
      Name: "Jacksonville Jaguars",
      Date: "March 7",
      AwayTeam: "Chicago Bears",
      Hometeam: "Jacksonville Jaguars",
      Homepoint: "90",
      AwayPoint: "87"
    },

    {
      City: "GreenBay",
      Name: "Green Bay Packers",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Green Bay Packers",
      Homepoint: "90",
      AwayPoint: "87"
    },

    {
      City: " Los Angeles",
      Name: " Los Angeles Rams",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Los Angeles Rams",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: " Los Angeles",
      Name: " Los Angeles Rams",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Los Angeles Rams",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Minnesota",
      Name: "Minnesota Vikings",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Minnesota",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "New Orleans",
      Name: "New Orleans Saints",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "New Orleans Saints",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "New York",
      Name: "New York Giants",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "New York Giants",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Denver",
      Name: "Denver Broncos",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Denver Broncos",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Houston ",
      Name: "Houston Texan",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: "Houston Texan",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Miami ",
      Name: " Miami Dolphins ",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Miami Dolphins ",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Tennessee",
      Name: " Tennessee Titans",
      Date: "March 7",
      AwayTeam: "Detroit Lions",
      Hometeam: " Tennessee Titans",
      Homepoint: "90",
      AwayPoint: "87"
    },
    {
      City: "Buffalo",
      Name: " Buffalo Bills",
      Date: "March 7",
      AwayTeam: "Miami Dolphins",
      Hometeam: "Buffalo Bills",
      Homepoint: "90",
      AwayPoint: "87"
    }
  ] 
   theNFLstat =theNFLstat+ "The Date is "+".<br> The Hometeam is"+ ".<br> The Awayteam is" + ".<br> The Awaypoint is" +".<br>the Homepoint is"+ "."
}
document.getElementById("gameOutput").innerHTML =  theNFLstat; 
}
var stat = 
document.getElementById("gameButton").addEventListener("click", gameFunction);

function gameFunction() {
let MyArray  = document.getElementById("gameDiv").value;
  var i
 for (i=0;i< MyArray;i++)
{
  MyArray+="&myArray="+MyArray[i];
}
  var flex = document.createElement("mySelect");

  var StatinputValue = document.getElementById("mySelect").value;

  var teamStat = ""
   for (i = 0; i< teamStat.length; i++){    
  StatinputValue="" }
  }  
document.getElementById("gameDiv").value = "";
} 
function UPDATE()
{
    update = setInterval(UPDATE, 60);
}
function DRAW()
{
    window.addEventListener('keydown', function (e) {
        keys.keys = (keys.keys || []);
        keys.keys[e.keyCode] = true;
    });
    window.addEventListener('keyup', function (e){
        keys.keys[e.keyCode] = false;
    });
}}  
  }
      

    }

  }

}

