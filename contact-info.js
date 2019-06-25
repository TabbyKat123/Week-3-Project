function{
	var contactInfo =function(firstname,lastname,Email,Telephone){
		return new contactInfo.init(firstname,lastname,Email,Telephone);}

	var contacts=[];
	var savecontactInfo=()=>{
		var fname=document.querySelector('[name="firstname"]').value;
		var lastname=document.querySelector('[name="lastname"]').value;
		var Email=document.querySelector('[name="Email"]').value;

		var newcontact= new contactInfo(firstname,lastname,Email,Telephone);

		contacts.push(newcontact);

		contacts.log('Saved!');

	};
var Search =() =>{
	document.getElementById("result").innerHTML="";

	var Search = document.querySelector('[name="Search"]').value;

	for (i=0; i<contacts.length;i++){
		contactInfo=contacts[i];


		firstname=contacts.firstname;
		phone=contacts.phone;

		if(firstname.includes(Search))
			console.log(firstname, "found!")

		var p tag = document.createElement("p");
		
	}
}

	













