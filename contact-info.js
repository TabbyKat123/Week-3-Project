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


	













