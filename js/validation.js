var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// JavaScript Document
function check(){

		var x=document.form1.Name.value;
		var a=document.form1.Address.value;
		var ci=document.form1.City.value;
		var em=document.form1.Email.value;
		var comm=document.form1.Comments.value;
		var err=1;
		
		var ck_name = /^[A-Za-z ]{1,50}$/; 
		var ck_tags = /[<>]/;
		var city_text = /^[A-Za-z ]{1,50}$/;
		var Phone=document.form1.Phone;
		var regEmail = /^([-a-zA-Z0-9._]+@[-a-zA-Z0-9.]+(\.[-a-zA-Z0-9]+)+)$/;

		
	if(document.form1.Name.value.search(/\S/) == -1 ) 
	{
		alert("Please Enter Name");
		document.form1.Name.focus();
		err=0;
	}else if(!ck_name.test(document.form1.Name.value))
	{
		alert("Please Enter Valid Name which is less than 50 characters ");
		document.form1.Name.focus();
		err=0;
	}/*else if(document.form1.Address.value.search(/\S/) == -1 ) 
	{
		alert("Please Enter Address");
		document.form1.Address.focus();
		err=0;
	}else if((a.length>200))
	{
		alert("Please Enter Address which is less than 200 characters");
		document.form1.Address.focus();
		err=0;
	}else if(ck_tags.test(a))
	{
		alert("Please Enter address without tags");
		document.form1.Address.focus();
		err=0;
	}*/else if(document.form1.City.value.search(/\S/) == -1 ) 
	{
		alert("Please Enter City");
		document.form1.City.focus();
		err=0;
	}else if(!city_text.test(ci))
	{
		alert("Please Enter valid City which is less than 50 characters");
		document.form1.City.focus();
		err=0;
	}else if ((Phone.value==null)||(Phone.value=="")){
		alert("Please Enter your Phone Number")
		Phone.focus();
		err=0;
	}else if (checkInternationalPhone(Phone.value)==false){
		alert("Please Enter a Valid Phone Number")
		Phone.value="";
		Phone.focus();
		err=0;
	}/*else if(document.form1.Email.value.search(/\S/) == -1 )
	{
		alert("Please Enter Valid Email Address");
		document.form1.Email.focus();
		err=0;
	}else if((em.length>50))
	{
		alert("Please Enter Email Address  which is less than 50 characters");
		document.form1.Email.focus();
		err=0;
	}else if(!regEmail.test(document.form1.Email.value))
	{
		alert("Please Enter Valid Email Address");
		document.form1.Email.focus();
		err=0;
	}*//*else if(document.form1.Comments.value.search(/\S/) == -1 ) 
	{
		alert("Please Enter Comments");
		document.form1.Comments.focus();
		err=0;
	}else if((comm.length>500))
	{
		alert("Please Enter Comments which is less than 500 characters");
		document.form1.Comments.focus();
		err=0;
	}else if(ck_tags.test(comm))
	{
		alert("Please Enter comment without tags");
		document.form1.Address.focus();
		err=0;
	}*/
	
	if(err==1){
		return true;
	}else{
		return false;
	}
}


function checkInternationalPhone(strPhone){

	var stripped = strPhone.replace(/[\ ]/g, '');
	var charpos = stripped.search("[^0-9\-\+\(\)]"); 
	//strip out acceptable non-numeric characters
	//alert(strPhone.length);
	if(strPhone.length < 10){
		return false;
	}else{
		if(strPhone.length > 0 &&  charpos >= 0) 
		{ 
			return false;
		}else{
			return true;
		}
	}
}




}