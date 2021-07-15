document.querySelector('.deleteBtn').addEventListener('click', confirmDeleteAccount);
document.querySelector('.deleteAccount').addEventListener('click', deleteAccount);
document.querySelector('.closeBoxBtn').addEventListener('click', closeBox);

function deleteAccount(){
    let user = auth.currentUser
    
    docRef.delete();
    user.delete().then(() => {
        window.location.href = "http://127.0.0.1:5500/todo.html";
    }).catch(err => console.log(err))
}

function confirmDeleteAccount(){ document.querySelector('.deleteBox').style.display="block"; }
function closeBox(){ document.querySelector('.deleteBox').style.display="none"; }