var password;
password=document.pass.value;
	if(password.length==0)
	{
		alert("password should not be null");
		return false;
	}
	if(password.length<8)
	{
		alert("password length should not be less than 8");
		return false;
	}
	if(password.indexOf("@")==-1)
	{
		alert("invalid password");
		return false;
	}
	if(password.indexOf("#")==-1)
	{
		alert("invalid password");
		return false;
	}	
	if(password.indexOf("$")==-1)
	{
		alert("invalid password");
		return false;
	}
	return true;
	}
	 
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		+
		
		
	}
	