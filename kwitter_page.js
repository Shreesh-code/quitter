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
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like= message_data['like'];
name_tag="<h4>" + name + "<img src='tick.png' class='usrTck'>" +"</h4>";
message_tag="<h3 class='msgH3'>" +  message + "</h3>";
licke_tag= "<button  class='btn btn-warning' id= " + firebase_message_id + " value=" + like + "onclick='update(this.id)' >" ;
span_tag="<span class='glyphicon glyphicon-thumbs-up' >likes: " + like +"</span> </button> <hr>";

row=name_tag + message_tag + licke_tag + span_tag;

document.getElementById("output").innerHTML += row;



//End code
      } });  }); }
getData();

function s3nd(){
msg=document.getElementById("message").value;
firebase.database().ref(room_name).push({name:usr_nm, 
      message:msg, 
      like:0});

      document.getElementById("message").innerHTML=" ";

}

function woodout(){
      localStorage.removeItem("room_name" );
      localStorage.removeItem("usr_nm");
      window.location="index.html";
}

function update(message_id) {
console.log(name + "clicked like" + message_id);
button_id=message_id;

likes=document.getElementById(button_id).value;
update_likes = Number(likes)+1;
console.log(likes);
firebase.database().ref(room_name).child(message_id).update({licke_tag:update_likes});
}
