
var firebaseConfig = {
      apiKey: "AIzaSyAFDWhxdTBQKVxeOxk3ioGH3uDX724dUt4",
      authDomain: "hashtag-5fd62.firebaseapp.com",
      databaseURL: "https://hashtag-5fd62-default-rtdb.firebaseio.com",
      projectId: "hashtag-5fd62",
      storageBucket: "hashtag-5fd62.appspot.com",
      messagingSenderId: "774844805359",
      appId: "1:774844805359:web:407ab4c177afb68ea22b1a",
      measurementId: "G-FKRNGK7LDR"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

usr_nm= localStorage.getItem("user");
document.getElementById("something").innerHTML="W3lc0m3 " + "<b>" + usr_nm + "</b>";

function sbmt(){
      room_name= document.getElementById("input").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"@dding r00m n@m3"
      });
      localStorage.setItem("room name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name : "+ Room_names);
      row="<div class='room_name' id=" + Room_names + "onclick='redirect(this.id)'>#"+Room_names+"</div>";
     document.getElementById("output").innerHTML+=row;
});});}
getData();

function redirect(name) {
      console.log( usr_nm + "redirected to logan page");
      localStorage.setItem("room_name" , name);
      window.location="kwitter_page.html";
}

function getoutofhere(){
      localStorage.removeItem("room_name" );
      localStorage.removeItem("usr_nm");
      window.location="index.html";
}