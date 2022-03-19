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



function submit() {
    usr_nm=document.getElementById("text_input").value;
    localStorage.setItem("user",usr_nm);
    window.location= "kwitter_room.html" ;
}