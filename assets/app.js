var config = {
    apiKey: "AIzaSyCUqaSU3isI-Rl02S6E_UJYc_K7a6eXimQ",
    authDomain: "train-schedule-eb7e6.firebaseapp.com",
    databaseURL: "https://train-schedule-eb7e6.firebaseio.com",
    projectId: "train-schedule-eb7e6",
    storageBucket: "",
    messagingSenderId: "42634464469"
  };
  
  firebase.initializeApp(config);
  var dataRef = firebase.database();
 
var train = "";
var place = "";
var number = "";
var next = "";


$("#submit").click(function(){
    event.preventDefault(); 
      console.log("clicked");
    train = $("#train-name").val().trim();
      console.log(train);
    place = $("#place").val().trim();
      console.log(place);
    number = $("#number").val().trim();
      console.log(number);
    next = $("#next").val().trim();
      console.log(next);   

var trainInfo = {
    train:train,
    place:place,
    number:number,
    next:next
  }


dataRef.ref().push(trainInfo);

console.log(train);
console.log(place);
console.log(number);
console.log(next);

$("#train-name").val("");
$("#place").val("");
$("#next").val("");
$("#number").val("");
});       

dataRef.ref().on("child_added", function(childSnapshot) {
  console.log("appending")
  console.log(childSnapshot.val());

var nameInfo = childSnapshot.val().train;
var placeInfo = childSnapshot.val().place;
var numberInfo = childSnapshot.val().number;
var nextInfo = childSnapshot.val().next;

console.log(nameInfo);
console.log(placeInfo);
console.log(numberInfo);
console.log(nextInfo);

var row = $("<tr>").append(
  $("ap-train").append(nameInfo),
  $("ap-place").append(placeInfo),
  $("ap-time").append(numberInfo),
  $("ap-next").append(nextInfo),

);
  $("#employee-table > tbody").append(row);


});

