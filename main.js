// Code to write data to database
// var username=document.getElementById("username");
// var emailid=document.getElementById("email");
// var firstname=document.getElementById("fname");
// var lastname=document.getElementById("lname");
// var firebaseref =  firebase.database().ref().child("Users");
// function submitClick() {
// var uname=username.value;
// var fname=firstname.value;
// var lname=lastname.value;
// var eid= emailid.value;
// var uid=firebaseref.push();
//   uid.child("UserName").set(uname);
//   uid.child("First Name").set(fname);
//   uid.child("Last Name").set(lname);
//   uid.child("Email Id").set(eid);
// }

//Code to get user info

var database=firebase.database();
var dname=document.getElementById("display");
var ename=document.getElementById("eid");
var dname1=document.getElementById("display1");
var ename1=document.getElementById("eid1");
firebase.auth().onAuthStateChanged(function(user){
  if(user){
    var displayName=user.displayName;
    var email=user.email;
    dname.innerText=displayName;
    ename.innerText=email;
    dname1.innerText=displayName;
    ename1.innerText=email;
  }
  else {

  }
});
