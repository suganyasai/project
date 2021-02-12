
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDKwLFf70uFnckqf4IbOMvE8FQbeigufUA",
    authDomain: "rwitt-book.firebaseapp.com",
    databaseURL: "https://rwitt-book.firebaseio.com",
    projectId: "rwitt-book",
    storageBucket: "rwitt-book.appspot.com",
    messagingSenderId: "123532027270",
    appId: "1:123532027270:web:ff3f9e54c551f85e80b807"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    user_name=localStorage.getItem("user_name");
     document.getElementById("userName").innerHTML="Welcome "+user_name+"!";
  
     function addRoom(){
    roomName=document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(roomName).update({
          purpose : "adding room name"
    });
  
      localStorage.setItem("room name",roomName);
      window.location="kwitter_page.html";
     }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log ("Room name-"+Room_names);
     row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML +=row;
    });});}
  getData();
  
  function redirectToRoomName(name){
  console.log (name);
  localStorage.setItem("Room name",name);
  window.location="kwitter_page.html";
  }
  
  function logout(){
    localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }