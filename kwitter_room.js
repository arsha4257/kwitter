
var firebaseConfig = {
      apiKey: "AIzaSyCDKGdVw8HuohiRrylXJ0GKAyGZ6l9PIoY",
      authDomain: "kwitter-1e780.firebaseapp.com",
      databaseURL: "https://kwitter-1e780-default-rtdb.firebaseio.com",
      projectId: "kwitter-1e780",
      storageBucket: "kwitter-1e780.appspot.com",
      messagingSenderId: "1046272879512",
      appId: "1:1046272879512:web:b3ecc35e8722e60fbb19ed"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcom"+ user_name +"!";

function addroom(){
      room_name=document.getElementById("add_room").value;
      firebase.database().ref("/").child(room_name).update({
       purpose:"room_name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+ Room_names)
      row="<div class='room_name' id="+Room_names+" onclick=redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage("room_name",name);
      window.location="kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location("index.html");
}
