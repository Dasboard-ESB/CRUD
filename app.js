var uid1="HHAitW0oiMaIi8GksU1Erai0Buw1";
var uid2="yuGdYaICjPVFRwlS60ArL862UyR2";
var uid=null;

  
  const dbRef = firebase.database().ref();
  firebase.auth().onAuthStateChanged(function(user){
  if(user){
    uid=user.uid;
	if(uid1==uid){
		console.log("They match " +" "+uid);
		geton();
	}
	else if (uid2==uid){
		console.log("They match " +" "+uid);
		geton1();
	}
	else{
		console.log("They dont");
	}
  }
  else {

  }
});
function geton(){
const usersRef = dbRef.child('Users');
readUserData();
function readUserData(){
	const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {
	//edit icon
	let editIconUI = document.createElement("span");
	editIconUI.class = "edit-user";
	editIconUI.innerHTML = " ✎";
	editIconUI.setAttribute("userid", snap.key);
	editIconUI.addEventListener("click", editButtonClicked)
    // delete icon
	let deleteIconUI = document.createElement("span");
	deleteIconUI.class = "delete-user";
	deleteIconUI.innerHTML = " ☓";
	deleteIconUI.setAttribute("userid", snap.key);
	deleteIconUI.addEventListener("click", deleteButtonClicked)
	let user = snap.val();
    let $li = document.createElement("li");
    $li.innerHTML = user.name;
    $li.append(editIconUI);
	$li.append(deleteIconUI);
    $li.setAttribute("child-key", snap.key); 
    $li.addEventListener("click", userClicked)
    userListUI.append($li);
   
   
});
}

function userClicked(e) {

  var userID = e.target.getAttribute("child-key");

  const userRef = dbRef.child('Users/' + userID);

  const userDetailUI = document.getElementById("userDetail");
  userDetailUI.innerHTML = ""

  userRef.on("child_added", snap => {
    var $p = document.createElement("p");
    $p.innerHTML = snap.key + " - " + snap.val()
    userDetailUI.append($p);
  });

}

const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked);

function addUserBtnClicked(){
	const usersRef = dbRef.child('Users');
	const addUserInputsUI = document.getElementsByClassName("user-input");
	// this object will hold the new user information
 let newUser = {};
 // loop through View to get the data for the model 
for (let i = 0, len = addUserInputsUI.length; i < len; i++) {

let key = addUserInputsUI[i].getAttribute('data-key');
let value = addUserInputsUI[i].value;
newUser[key] = value;
}
usersRef.push(newUser, function(){
   console.log("data has been inserted");
 });
}
// --------------------------
function deleteButtonClicked(e) {

		e.stopPropagation();

		var userID = e.target.getAttribute("userid");

		const userRef = dbRef.child('Users/' + userID);
		
		userRef.remove();

}

function editButtonClicked(e) {
	
	document.getElementById('edit-user-module').style.display = "block";

	//set user id to the hidden input field
	document.querySelector(".edit-userid").value = e.target.getAttribute("userid");

	const userRef = dbRef.child('Users/' + e.target.getAttribute("userid"));

	// set data to the user field
	const editUserInputsUI = document.querySelectorAll(".edit-user-input");


	userRef.on("value", snap => {

		for(var i = 0, len = editUserInputsUI.length; i < len; i++) {

			var key = editUserInputsUI[i].getAttribute("data-key");
					editUserInputsUI[i].value = snap.val()[key];
		}

	});




	const saveBtn = document.querySelector("#edit-user-btn");
	saveBtn.addEventListener("click", saveUserBtnClicked)
}


function saveUserBtnClicked(e) {
 
	const userID = document.querySelector(".edit-userid").value;
	const userRef = dbRef.child('Users/' + userID);

	var editedUserObject = {}

	const editUserInputsUI = document.querySelectorAll(".edit-user-input");

	editUserInputsUI.forEach(function(textField) {
		let key = textField.getAttribute("data-key");
		let value = textField.value;
  		editedUserObject[textField.getAttribute("data-key")] = textField.value
	});



	userRef.update(editedUserObject);

	document.getElementById('edit-user-module').style.display = "none";


}

}	

/////////////////////////////////////////////////////////////////////////////////////////////////

function geton1(){
const usersRef = dbRef.child('keycode');
readUserData();
function readUserData(){
	const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {
	//edit icon
	let editIconUI = document.createElement("span");
	editIconUI.class = "edit-user";
	editIconUI.innerHTML = " ✎";
	editIconUI.setAttribute("userid", snap.key);
	editIconUI.addEventListener("click", editButtonClicked)
    // delete icon
	let deleteIconUI = document.createElement("span");
	deleteIconUI.class = "delete-user";
	deleteIconUI.innerHTML = " ☓";
	deleteIconUI.setAttribute("userid", snap.key);
	deleteIconUI.addEventListener("click", deleteButtonClicked)
	let user = snap.val();
    let $li = document.createElement("li");
    $li.innerHTML = user.name;
    $li.append(editIconUI);
	$li.append(deleteIconUI);
    $li.setAttribute("child-key", snap.key); 
    $li.addEventListener("click", userClicked)
    userListUI.append($li);
   
   
});
}

function userClicked(e) {

  var userID = e.target.getAttribute("child-key");

  const userRef = dbRef.child('keycode/' + userID);

  const userDetailUI = document.getElementById("userDetail");
  userDetailUI.innerHTML = ""

  userRef.on("child_added", snap => {
    var $p = document.createElement("p");
    $p.innerHTML = snap.key + " - " + snap.val()
    userDetailUI.append($p);
  });

}

const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked);

function addUserBtnClicked(){
	const usersRef = dbRef.child('keycode');
	const addUserInputsUI = document.getElementsByClassName("user-input");
	// this object will hold the new user information
 let newUser = {};
 // loop through View to get the data for the model 
for (let i = 0, len = addUserInputsUI.length; i < len; i++) {

let key = addUserInputsUI[i].getAttribute('data-key');
let value = addUserInputsUI[i].value;
newUser[key] = value;
}
usersRef.push(newUser, function(){
   console.log("data has been inserted");
 });
}
// --------------------------
function deleteButtonClicked(e) {

		e.stopPropagation();

		var userID = e.target.getAttribute("userid");

		const userRef = dbRef.child('keycode/' + userID);
		
		userRef.remove();

}

function editButtonClicked(e) {
	
	document.getElementById('edit-user-module').style.display = "block";

	//set user id to the hidden input field
	document.querySelector(".edit-userid").value = e.target.getAttribute("userid");

	const userRef = dbRef.child('keycode/' + e.target.getAttribute("userid"));

	// set data to the user field
	const editUserInputsUI = document.querySelectorAll(".edit-user-input");


	userRef.on("value", snap => {

		for(var i = 0, len = editUserInputsUI.length; i < len; i++) {

			var key = editUserInputsUI[i].getAttribute("data-key");
					editUserInputsUI[i].value = snap.val()[key];
		}

	});




	const saveBtn = document.querySelector("#edit-user-btn");
	saveBtn.addEventListener("click", saveUserBtnClicked)
}


function saveUserBtnClicked(e) {
 
	const userID = document.querySelector(".edit-userid").value;
	const userRef = dbRef.child('keycode/' + userID);

	var editedUserObject = {}

	const editUserInputsUI = document.querySelectorAll(".edit-user-input");

	editUserInputsUI.forEach(function(textField) {
		let key = textField.getAttribute("data-key");
		let value = textField.value;
  		editedUserObject[textField.getAttribute("data-key")] = textField.value
	});



	userRef.update(editedUserObject);

	document.getElementById('edit-user-module').style.display = "none";


}

}	
