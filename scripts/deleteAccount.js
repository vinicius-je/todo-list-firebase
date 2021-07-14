document.querySelector('.deleteAccount').addEventListener('click', deleteAccount);

function deleteAccount(){
    let user = auth.currentUser

    user.delete().then(() => {
        window.location.href = "http://127.0.0.1:5500/todo.html";
    }).catch(err => console.log(err))

    docRef.delete();
}