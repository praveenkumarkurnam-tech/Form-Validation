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
    }
    else if(username ==="")
    {
        msg.innerText ="enter username"
    }
    else 
    {
        msg.innerText = "enter password"
    }

}