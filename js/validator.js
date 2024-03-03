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

String.prototype.trim = function() {
	a = this.replace(/^\s+/, '');
	return a.replace(/\s+$/, '');
};

function validateEmailv2(email)
{
// a very simple email validation checking. 
// you can add more complex email checking if it helps 
	if(email.length <= 0)
	{
		return true;
	}
	var splitted = email.match("^(.+)@(.+)$");
	if(splitted == null) return false;
	if(splitted[1] != null )
	{
		var regexp_user=/^\"?[\w-_\.]*\"?$/;
		if(splitted[1].match(regexp_user) == null) return false;
	}
	if(splitted[2] != null)
	{
		var regexp_domain=/^[\w-\.]*\.[A-Za-z]{2,4}$/;
		if(splitted[2].match(regexp_domain) == null) 
		{
			var regexp_ip =/^\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]$/;
			if(splitted[2].match(regexp_ip) == null) return false;
		}// if
		return true;
	}
	return false;
}


//Trim
function ltrim ( s ){
	return s.replace( /^\s*/, "" )
}
function rtrim ( s ){
	return s.replace( /\s*$/, "" );
}
function trim ( s ){
	return rtrim(ltrim(s));
}


function addValidation(strValidateStr,fieldID,strError) 
{	

	var epos = strValidateStr.search("="); 		
	var command  = ""; 
	var cmdvalue = ""; 
	var theForm;
	if(epos >= 0) 
	{ 
		command  = strValidateStr.substring(0,epos); 
		cmdvalue = strValidateStr.substr(epos+1); 
	} 
	else 
	{ 
		command = strValidateStr;		
	} 
	objValue= document.getElementById(fieldID);

	switch(command) 
	{ 
		
		case "req": 
		case "required": 
		{ 
			if(eval(objValue.value.trim().length) == 0) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name + " : Required Field"; 					
				}//if
				return strError+"\n";				
			}//if
			
			break;             
		}//case required 
		case "maxlength": 
		case "maxlen": 
		{ 
			if(eval(objValue.value.length) >  eval(cmdvalue)) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name + " : "+cmdvalue+" characters maximum "; 
				}//if 				
				return strError+"\n";
			}//if 

			break; 
		}//case maxlen 
		case "fixlen": 
		case "fixlength": 
		{ 
			if(eval(objValue.value.length) !=  eval(cmdvalue)) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name + " : "+cmdvalue+" characters maximum "; 
				}//if 				
				return strError+"\n";
			}//if 

			break; 
		}//case maxlen 
		
		case "minlength": 
		case "minlen": 
		{ 
			if(eval(objValue.value.length) <  eval(cmdvalue)) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name + " : " + cmdvalue + " characters minimum  "; 
				}//if
				return strError+"\n";
			}//if 

			break; 
		}//case minlen 
		case "alnum": 
		case "alphanumeric": 
		{ 
			var charpos = objValue.value.search("[^A-Z a-z 0-9]"); 
			if(objValue.value.length > 0 &&  charpos >= 0) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name+": Only alpha-numeric characters allowed "; 
				}//if 				
				return strError+"\n";
			}//if 
			
			break; 
		}//case alphanumeric 
		case "num": 
		case "numeric": 
		{ 
			var charpos = objValue.value.search("[^0-9\.]"); 
			if(objValue.value.length > 0 &&  charpos >= 0) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name+": Only digits allowed "; 
				}//if
				return strError+"\n";
			}//if
			
			break;               
		}//numeric 
		//################# need for Credit Card validation ##################
		
		case "cc": 
		{ 
			if (!objValue.value.match(/^\d{1,20}$|^\*{8,15}\d{4,4}$/))
			{
				//strError = "Require a valid decimal."; 
				return strError+"\n";
			}
			break;
			
		}//numeric 
		
		
		// ############################# End #################################
		case "dec": 
		case "decimal": 
		{ 
			
				if (!objValue.value.match(/^\d{1,10}$|^\d+\.\d{1,2}?$/))
				{
					//strError = "Require a valid decimal."; 
					return strError+"\n";
				}
				break;
				  
		}//numeric 

		case "mobile": 
		{ 
			if(objValue.value!='')
			{
				var stripped = objValue.value.replace(/[\(\)\.\-\ ]/g, '');
				//strip out acceptable non-numeric characters
				if (isNaN(parseInt(stripped))) {
					if(!strError || strError.length ==0) 
					{ 
						strError = objValue.name+": Only digits allowed "; 
					}//if 
					return strError+"\n";
				}				
				else if (!(stripped.length == 10)) {
					if(!strError || strError.length ==0) 
					{ 
						strError = objValue.name+": Only digits allowed "; 
					}//if					
					return strError+"\n";
				}	
				break;               
			}
			break;			
		}//mobile 
		// FUNCTION TO VALIDATE NAME WHICH CONTAIN SPACE
/*					function validate_name_space(name)
					{
						var iChars = "!@#$%^&*()+=-[]\\\;,./{}|\" >?"; // not allowlable character
						for(i=0;i<iChars.length;i++)
						{
							if(name.indexOf(iChars.charAt )!=-1)
								return false;
						}
						if(i==iChars.length)
							return true;
					}
*/		case "alphabetic": 
		case "alpha": 
		{ 
			var charpos = objValue.value.search("[^A-Za-z]"); 
			if(objValue.value.length > 0 &&  charpos >= 0) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name+": Only alphabetic characters allowed "; 
				}//if				
				return strError+"\n";
			}//if 
			break; 
		}//alpha 
		case "alnumhyphen":
		{
			var charpos = objValue.value.search("[^A-Za-z0-9\-_\.]"); 
			if(objValue.value.length > 0 &&  charpos >= 0) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name+": characters allowed are A-Z,a-z,0-9,- and _"; 
				}//if 
				
				return strError+"\n";
			}//if 
			break;
		}
		case "timeValidate":
		{
			var charpos = objValue.value.search("[^0-9{2}\:\0-9{2}$]"); 
			if(objValue.value.length > 0 &&  charpos >= 0) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name+": characters allowed are A-Z,a-z,0-9,- and _"; 
				}//if 
				
				return strError+"\n";
			}//if 
			break;
		}
		
		case "alnumhyphenONLY":
		{
			var charpos = objValue.value.search("[^A-Za-z0-9\-]"); 
			if(objValue.value.length > 0 &&  charpos >= 0) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name+": characters allowed are A-Z,a-z,0-9 and -"; 
				}//if 
				
				return strError+"\n";
			}//if 
			break;
		}
		/*case "alnumhyphenCAPSONLY":
		{
			//var charpos = objValue.value.search("/^(A-Z){3}\-(0-9){3}$/"); 
			var val	=	
			var ri	=	"/^(A-Z){3}\-(0-9){3}$/";
			if(ri.test(objValue.value))
			{alert('ok');}
			else
			{
				alert('not ok');	
			}
			if(objValue.value.length > 0 &&  charpos >= 0) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name+": characters allowed are A-Z,0-9 and -"; 
				}//if 
				
				return strError+"\n";
			}//if 
			break;
		}*/
		
		case "alnumhyphenCAPSONLY":
		{
			var charpos = objValue.value.match("^[A-Z]{3}\-[0-9]{3}$"); 
			if(objValue.value.length > 0 &&  charpos >= 0) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name+": not a valid input"; 
				}//if 
				
				return strError+"\n";
			}//if 
			break;
		}
		
		case "valid_name":
		{
			if(objValue.value!='')
			{
				var stripped = objValue.value.replace(/[\ ]/g, '');
				var charpos = stripped.search("[^A-Za-z\-\'\.]"); 
				//strip out acceptable non-numeric characters
				if(objValue.value.length > 0 &&  charpos >= 0) 
				{ 
					if(!strError || strError.length ==0) 
					{ 
						strError = objValue.name+": characters allowed are A-Z,a-z,- and '"; 
					}//if 
					
					return strError+"\n";
				}//if 
				break;               
			}
			break;			
			
		}
		
		case "user_name":
		{
			if(objValue.value!='')
			{
				var stripped = objValue.value.replace(/[\ ]/g, '');

				//var stripped = objValue.value;
				var charpos = stripped.search("[^A-Za-z0-9\-\.\_]"); 
				if(objValue.value.length > 0 &&  charpos >= 0) 
				{ 
					if(!strError || strError.length ==0) 
					{ 
						strError = objValue.name+": characters allowed are A-Z,a-z,0-9,- and '"; 
					}//if 
					
					return strError+"\n";
				}//if 
				break;               
			}
			break;			
			
		}
				
		case "valid_subdomain":
		{
			if(objValue.value!='')
			{
				var stripped = objValue.value;
				var charpos = stripped.search("[^A-Za-z0-9\-]"); 
				//strip out acceptable non-numeric characters
				if(objValue.value.length > 0 &&  charpos >= 0) 
				{ 
					if(!strError || strError.length ==0) 
					{ 
						strError = objValue.name+": characters allowed are A-Z,a-z,0-9,- and '"; 
					}//if 
					
					return strError+"\n";
				}//if 
				break;               
			}
			break;			
			
		}
		case "valid_custom_phone":
		{
			if(objValue.value!='')
			{
				//var stripped = objValue.value;
				var stripped = objValue.value.replace(/[\ ]/g, '');
				var charpos = stripped.search("[^0-9\-\+\(\)]"); 
				//strip out acceptable non-numeric characters
				if(objValue.value.length > 0 &&  charpos >= 0) 
				{ 
					if(!strError || strError.length ==0) 
					{ 
						strError = objValue.name+": characters allowed are A-Z,a-z,0-9,- and '"; 
					}//if 
					
					return strError+"\n";
				}//if 
				break;               
			}
			break;			
			
		}
		case "space":
		{	
			var vlen	 = objValue.value.length;
			var stripped = objValue.value.replace(/[\ ]/g, '');	
			if(vlen!= stripped.length) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name+": characters allowed are A-Z,a-z,0-9,- and '"; 
				}//if 
				
				return strError+"\n";
			}//if 
			break;			
		}
		case "valid_date":
		{				
			if(objValue.value!='mm/dd/yyyy' )
			{				
				var charpos = objValue.value.search("[^0-9\/]"); 
				if((objValue.value.length > 0 &&  charpos >= 0) || (objValue.value.length > 0 && objValue.value.length != 10)) 
				{ 
					if(!strError || strError.length ==0) 
					{ 
						strError = objValue.name+": characters allowed are 0-9 and /"; 
					}//if    
					
					return strError+"\n";
				}//if 
				break;
			}
			break;
		}
		case "alphahyphen":
		{
			var charpos = objValue.value.search("[^A-Za-z\-_]"); 
			if(objValue.value.length > 0 &&  charpos >= 0) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name+": characters allowed are A-Z,a-z,0-9,- and _"; 
				}//if    
				
				return strError+"\n";
			}//if 
			break;
		}		
		case "email": 
		{ 
			if(!validateEmailv2(objValue.value)) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name+": Enter a valid Email address "; 
				}//if       
				
				return strError+"\n";
			}//if
			break; 
		}//case email 
		case "lt": 
		case "lessthan": 
		{ 
			if(isNaN(objValue.value)) 
			{ 
				if(!strError || strError.length ==0) 
				{ 				
					strError= objValue.name+": Should be a number ";					
				}
				
				return strError+"\n";				
			}//if 
			else if(eval(objValue.value) >=  eval(cmdvalue)) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name + " : value should be less than "+ cmdvalue; 
				}//if               				
				return strError+"\n";
			}//if 
			break; 
		}//case lessthan 
		case "gt": 
		case "greaterthan": 
		{ 
			if(isNaN(objValue.value)) 
			{ 
				if(!strError || strError.length ==0) 
				{ 				
					strError= objValue.name+": Should be a number ";					
				}
				
				return strError+"\n";				
			}//if 
			else if(eval(objValue.value) <=  eval(cmdvalue)) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name + " : value should be greater than "+ cmdvalue; 
				}//if               				

				return strError+"\n";
			}//if
			break; 
		}//case greaterthan 
		case "regexp": 
		{ 
			if(objValue.value.length > 0)
			{
				if(!objValue.value.match(cmdvalue)) 
				{ 
					if(!strError || strError.length ==0) 
					{ 
						strError = objValue.name+": Invalid characters found "; 
					}//if                                                               
					
					return strError+"\n";
				}//if 
			}		
			break; 
		}//case regexp 
		case "dontselect": 
		{ 
			if(objValue.selectedIndex == null) 
			{ 
				/*alert("BUG: dontselect command for non-select Item"); 
				return false;*/ 
				return "BUG: dontselect command for non-select Item";
			} 
			if(objValue.selectedIndex == eval(cmdvalue)) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name+": Please Select one option "; 
				}//if   
				
				return strError+"\n";
			} 
				break; 
		}//case dontselect 
		case "match": 
		{ 
			if(objValue.value != document.getElementById(cmdvalue).value) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name+": Must be same"; 
				}//if 
				
				return strError+"\n";
			} 
				break; 
		}//case match 
		case "today_dt_chk": 
		{ 
			var myDate = new Date;
			var today  = new Date;
			tMonth = today.getMonth()+1;
			tYear  = today.getFullYear();
			
			myDate.setMonth(document.getElementById(cmdvalue).value);
			myDate.setFullYear(objValue.value);
			
			eMonth = myDate.getMonth();
			eYear  = myDate.getFullYear();
			if(((tMonth>eMonth) && (tYear==eYear)) || (tYear>eYear))
			{
				strError = "Please select valid expiration date.";
				return strError+"\n";
			}
			
			break; 
		}//case match 
		
		/*case "today_dt_chk": 
		{ 
			var myDate = new Date;
			var today  = new Date;
			tMonth = today.getMonth();
			tYear  = today.getFullYear();
			
			myDate.setMonth(document.getElementById(cmdvalue).value);
			myDate.setFullYear(objValue.value);
			
			eMonth = myDate.getMonth();
			eYear  = myDate.getFullYear();
			if(myDate<today)
			{
				strError = "Please select valid expiration date.";
				return strError+"\n";
			}
			
			break; 
		}//case match */
		
		case "notmatch": 
		{ 
			valueOne	=	objValue.value.toUpperCase();;
			valueTwo	=	document.getElementById(cmdvalue).value.toUpperCase();;
			//valueOne	=	valueOne.toUpperCase();
			//valueTwo	=	valueTwo.toUpperCase();
			if(valueOne == valueTwo) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = objValue.name+": Must be same"; 
				}//if 
				
				return strError+"\n";
			} 
				break; 
		}//case match 	
		case "validTime": 
		{
			var timeT = objValue.value; 
			var status = checkTime(timeT)
			if(!status)
			{
				if(!strError || strError.length ==0) 
				{ 
					strError ='Please enter valid Accessibility Details';
				}//if 
				
				return strError+"\n";
			}//if 
			break;
		}		
		case "compairValue": 
		{ 
			if(objValue.value <= document.getElementById(cmdvalue).value) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = "From time should be less than to time "; 
				}//if 
				
				return strError+"\n";
			} 
				break; 
		}//case match 	
		
		case "compareDate": 
		{ 
			str_fromdate = objValue.value
			str_todate = document.getElementById(cmdvalue).value;
			strError = CompareDates(str_fromdate, str_todate);	
			
			if(strError.length != 0) 
			{
				return strError+"\n";
			}
			break; 
		}//case compareDate 	
		///################## for not more than 12 months gap ############
		case "compareDate12": 
		{ 
			str_fromdate = objValue.value
			str_todate = document.getElementById(cmdvalue).value;
			strError = CompareDates12(str_fromdate, str_todate);	
			if(strError.length != 0) 
			{
				return strError+"\n";
			}
			break; 
		}//case compareDate 	
		///#################
		case "valid_url": 
		{ 
			if(!/^(http:\/\/)(?:[\w-]+\.)+[a-z]{2,6}$/.test(objValue.value)) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = "Invalid Url"; 
				}//if 
				
				return strError+"\n";
			} 
				break; 
		}//case valid_url_without_http 
		
		case "valid_url_without_http": 
		{ 
			if(!/^(?:[\w-]+\.)+[a-z]{2,6}$/.test(objValue.value)) 
			{ 
				if(!strError || strError.length ==0) 
				{ 
					strError = "Invalid Url"; 
				}//if 
				
				return strError+"\n";
			} 
				break; 
		}//case valid_url_without_http 	
		
		case "optional_name":
		{
			if(eval(objValue.value.trim().length)!=0)
			{
				return eval(objValue.value.trim().length);
			}
			else return 0;
			break;             
		}//switch 
		
		default :
				break;
		
	}
	return ''; 
}

function CheckUncheckAll(fmobj,tabid1,tabid2){
	var TotalBoxes = 0;
	var TotalOn = 0;
	//alert(tabid1);
	for (var i=0;i<fmobj.elements.length;i++) {
		var e = fmobj.elements[i];
		if ((e.name != 'checkall') && (e.type=='checkbox')) {
		  TotalBoxes++;
		  if (e.checked) {
		   TotalOn++;
		  }
		}
	}
	
	if(TotalBoxes>TotalOn)
	{
		for (var i=0;i<fmobj.elements.length;i++) {
			var e = fmobj.elements[i];
			if ( (e.name != 'checkall') && (e.type=='checkbox') && (!e.disabled) ) {
			  e.checked = true;
			}
		}
		//document.getElementById(tabid1).value="Uncheck All";
		//if(tabid2!='')
			//document.getElementById(tabid2).value="Uncheck All";
	}
	else
	{
		for (var i=0;i<fmobj.elements.length;i++) {
			var e = fmobj.elements[i];
			if ( (e.name != 'checkall') && (e.type=='checkbox') && (!e.disabled) ) {
			  e.checked = false;
			}
		}	
		//document.getElementById(tabid1).value="Check All";
		//if(tabid2!='')
			//document.getElementById(tabid2).value="Check All";
		
	}		
}

function CheckUncheckAllc(fmobj){
	var TotalBoxes = 0;
	var TotalOn = 0;
	//alert(tabid1);
	for (var i=0;i<fmobj.elements.length;i++) {
		var e = fmobj.elements[i];
		if ((e.name != 'checkall') && (e.type=='checkbox')) {
		  TotalBoxes++;
		  if (e.checked) {
		   TotalOn++;
		  }
		}
	}
	
	if(TotalBoxes>TotalOn+1)
	{
		for (var i=0;i<fmobj.elements.length;i++) {
			var e = fmobj.elements[i];
			if ( (e.name != 'checkall') && (e.type=='checkbox') && (!e.disabled) ) {
			  e.checked = true;
			}
		}
	}
	else
	{
		for (var i=0;i<fmobj.elements.length;i++) {
			var e = fmobj.elements[i];
			if ( (e.name != 'checkall') && (e.type=='checkbox') && (!e.disabled) ) {
			  e.checked = false;
			}
		}	
		
	}		
}

function CheckUncheckAllcheckbox(fmobj,checkboxname,topcheckbox){
	var TotalBoxes = 0;
	var TotalOn = 0;
	//alert(tabid1);
	for (var i=0;i<fmobj.elements.length;i++) {
		var e = fmobj.elements[i];
		if ((e.name == checkboxname) && (e.type=='checkbox')) {
		  TotalBoxes++;
		  if (e.checked) {
		   TotalOn++;
		  }
		}
	}

	if(TotalBoxes>TotalOn)
	{
		for (var i=0;i<fmobj.elements.length;i++) {
			var e = fmobj.elements[i];
			if ( (e.name == checkboxname) && (e.type=='checkbox') && (!e.disabled) ) {
			  e.checked = true;
			}
		}
	}
	else
	{
		for (var i=0;i<fmobj.elements.length;i++) {
			var e = fmobj.elements[i];
			if ( (e.name == checkboxname || e.name == topcheckbox) && (e.type=='checkbox') && (!e.disabled) ) {
			  e.checked = false;
			}
		}	
		
	}		
}

function CheckUncheckAllcheckbox(theForm,checkbox,checkbox_all)
{
   var set    = document.getElementsByName(checkbox_all);
   checkboxes = document.getElementsByName(checkbox);
	for (var i = 0 ; i<checkboxes.length ; i++ )
	{
		if(checkboxes[i].disabled==false)
			checkboxes[i].checked = set[0].checked;
	}
}

//	Added by Faisal

function SetAllCheckBoxes(frm,CheckValue)
{	
	for(i=0;i<document.frm.elements.length;i++)
	{ 
		if((document.frm.elements[i].type=="checkbox"))
		{
			document.frm.elements[i].checked = CheckValue;
		}
	}
}

function focused(elementId)
{
	re = /fieldbg/gi;
	elementId.className += ' fieldbg';
}

function nonfocused(elementId)
{
	re = /fieldbg/gi;
	elementId.className = elementId.className.replace(re, '');
}

function delete_single(strval)
{
	if(confirm("Are you sure you want to delete selected record?"))
	{
		window.location=strval;
	}
	else
	{
		return false;	
	}
}

function checkTime(s){
  if(s == null) return false;
  if(s.indexOf(":") == -1) return false;
  var spl = s.split(":");
  if(parseInt(spl[0], 10) == 24 && parseInt(spl[1], 10) == 00)
  {
  	return true;
  }
  else
  {
  	return parseInt(spl[0], 10) < 24 && parseInt(spl[1], 10) < 60;
  }
}

function CompareDates(str_fromdate, str_todate)
{
   var str = "";
   var fromDate = (str_fromdate).split("/");
   var toDate = (str_todate).split("/");

   var date1 = new Date(fromDate[2], fromDate[0], fromDate[1]);
   var date2 = new Date(toDate[2], toDate[0], toDate[1]);

   if((Date.parse(date2)-Date.parse(date1)) > 0 )
   {
       str = "To date cannot be greater than from date";
   }
   return str;
}
function CompareDates12(str_fromdate, str_todate)
{
	var str = "";
	var fromDate = (str_fromdate).split("/");
	var toDate = (str_todate).split("/");
	
	var date1 = new Date(fromDate[2], fromDate[0], fromDate[1]);
	var date2 = new Date(toDate[2], toDate[0], toDate[1]);
	var diff = (Date.parse(date1)-Date.parse(date2));
	diff	=	Math.floor(diff/1000/60/60/24/30);
	//if((Date.parse(date1)-Date.parse(date2)) > 79747200000 )
	if(diff>12)
	{
		str = "Date range should not be greater than to 12 months";
	}
	else if((fromDate[0]==toDate[0]) && (fromDate[2] != toDate[2]) )
	{
		str = "Date range should not be greater than to 12 months";
	}
	return str;
}

function checkImageType(imagePath){

   var pathLength = imagePath.length;
   var lastDot = imagePath.lastIndexOf(".");
   var fileType = imagePath.substring(lastDot,pathLength);

   //if((fileType == ".gif") || (fileType == ".jpg") || (fileType == ".png") || (fileType == ".GIF") || (fileType == ".JPG") || (fileType == ".PNG")) {
   if((fileType == ".gif") || (fileType == ".jpg") || (fileType == ".GIF") || (fileType == ".JPG")) {
	   return false;
   } else {
	   return true;
   }
}

function datediff(sStartDate, sEndDate) { 
	//alert("called");
	//alert(sStartDate)
	//alert(sEndDate)
	var arrTmpED = sStartDate.split("-");
	var arrTmpEXD = sEndDate.split("-");		
	
	
	sStartDate = arrTmpED[0]+"/"+arrTmpED[1]+"/"+arrTmpED[2];
	sEndDate = arrTmpEXD[0]+"/"+arrTmpEXD[1]+"/"+arrTmpEXD[2];
	//alert("start dt = " + sStartDate);
	//alert("end date = " + sEndDate);	
	
	
	
	dtStartDate = new Date(sStartDate); 
	dtEndDate = new Date(sEndDate); 
	var bReturn = true; 
	//alert("start dt = " + dtStartDate);
	//alert("end date = " + dtEndDate);
	//return dtEndDate - dtStartDate;
	if (dtStartDate >= dtEndDate) { 
		bReturn = false;
	} 
	else { 
		bReturn = true; 
	}
	//alert(bReturn);
	return bReturn; 
}


}