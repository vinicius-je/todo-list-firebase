function signOut(){
    auth.signOut().then(() => {
        window.location.href = "http://127.0.0.1:5500/todo.html";
    })
    .catch(err => console.log(err))
}

document.querySelector('.signOutBtn').addEventListener('click', signOut)