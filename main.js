function verifypass()


{
    let userName=document.getElementById("mmm").value;
    let email=document.getElementById("mp").value;
    let password=document.getElementById("mt").value;
    let x=password.length;


    if(userName == "")
    {
        alert("Enter your username");
        return false;
    }
    else if(email=="")
    {
        alert("Fill email address");
        return false;
    }
    else if(password=="")
    {
        alert("Fill password");
        return false;
    }
    else if(x<6)
    {
        alert("Password should be atleast 6 characters");
        return false;
    }
    else 
    {
        return true;
    }

    
}