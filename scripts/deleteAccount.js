document.querySelector('.deleteBtn').addEventListener('click', confirmDeleteAccount);
document.querySelector('.deleteAccount').addEventListener('click', deleteAccount);
document.querySelector('.closeBoxBtn').addEventListener('click', closeBox);

function deleteAccount(){
    let user = auth.currentUser
    
    docRef.delete();
    user.delete().then(() => {
        window.location.replace("https://vinicius-je.github.io/todo-list-firebase/");
    }).catch(err => console.log(err))
}

function confirmDeleteAccount(){ document.querySelector('.deleteBox').style.display="block"; }
function closeBox(){ document.querySelector('.deleteBox').style.display="none"; }