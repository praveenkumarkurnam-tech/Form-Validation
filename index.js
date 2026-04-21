const validateForm =(event) =>
{
        event.preventDefault()
    let username= event.target.username.value
    let password= event.target.password.value
     
    let msg = document.getElementById("message")
    // console.log(event)
    if(username ==="" && password ==="")
    {
        msg.innerText ="enter details"
        msg.style.color="red"
    }
    else if(username ==="")
    {
        msg.innerText ="enter username"
        msg.style.color="red"
    }
    else if(password ==="")
    {
        msg.innerText = "enter password"
        message.style.color ="red"
    }
    else{
        window.location.href="welcome.html"
    }

}