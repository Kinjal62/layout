mdc.textField.MDCTextField.attachTo(document.querySelector('.myText1'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.myText2'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.myText3'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.myText4'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.myText5'));
mdc.textField.MDCTextField.attachTo(document.querySelector('.myText6'));

mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));
const dialog1 = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.dialog1'));
const dialog2 = new mdc.dialog.MDCDialog.attachTo(document.querySelector('.dialog2'));
$('#signin').on('click',function(event){
	dialog1.open();
});
$('#cancel').on('click',function(event){
	dialog1.close();
});

function signin(){
	var name = document.getElementById('name').value;
	var pwd = document.getElementById('pw').value;
	console.log("Name =>" , name);
	console.log("Password =>" , pwd);
}
$('#signup').on('click',function(evt){
	dialog2.open();
});
function signup(){
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var email = document.getElementById('email').value;
	var pwd = document.getElementById('pwd').value;
	console.log("FirstName=====>" , fname);
	console.log("LastName=====>", lname);
	console.log("Email========>", email);
	console.log("Password =>" , pwd);
}