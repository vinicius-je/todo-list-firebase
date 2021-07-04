
function logout(){
    auth.signOut().then(() => {
        console.log("Você foi desconectado")
    })
    .catch(err => console.log(err))
}