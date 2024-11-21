




let btn = document.getElementById("btn")
let message = document.getElementById("message")
let error = document.getElementById("error")
console.log(message)

btn.addEventListener('click',function myFunction(e) {
    e.preventDefault()
    let email = document.getElementById("email").value
    console.log(email)
    let password = document.getElementById("password").value
    console.log(password)

if (email=="soufiane@gmail.com" && password == "1234") {
    console.log("true") 
    message.innerText = "New text content!";
    
}else 
console.log("false")
error.innerText = "email and password incontent!";
})


