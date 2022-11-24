var NFL= [
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
  ]);

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
      list.append(el);
      el.innerHTML = input.value;
      nums.push(id);
      console.log(nums);
      console.log(el);
      input.value = "";
      input.focus();
    }
function AddGame() {
  var x = document.getElementById("gameForm");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("Game").innerHTML = text;
}
function GameFunction()
       let theDate =
           document.getElementbyId("date").value;
        let theHometeam =
              document.getElementbyId("Hometeam").value;
   let theawayteam =
              document.getElementbyId("awayteam").value;
   let thehomepoint =
   document.getElementbyId("homepoint").value;
     let theawaypoint =
         document.getElementById("awaypoint").value;
function AddGame(){
       
            var rows = "";
            var date = document.getElementById("date").value;
  
            var Hometeam= document.getElementById("Hometeam").value;
            var awayteam = document.getElementById("awayteam").value;   
              var homepoint = document.getElementById("homepoint").value; 
              var awaypoint = document.getElementById("awaypoint").value;
           flex += "<div><p>"  +theDate + theHometeam + theawayteam  + thehomepoint +
               + theawaypoint +".";
            $(flex-container).appendTo("#gridlayout");
       
    }

    function AddGame(){
        document.getElementById("game").addgame();
    }
