function signOut(){
    auth.signOut().then(() => {
        window.location.href = "https://vinicius-je.github.io/todo-list-firebase/";
    })
    .catch(err => console.log(err))
}

document.querySelector('.signOutBtn').addEventListener('click', signOut)