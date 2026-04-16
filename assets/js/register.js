document.getElementById ('reregisterForm')?.addEventListener('submit', (e)=>{
    e.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confrimPassword').value

    if( !name || !email || !password || !confirmPassword){
        showAlert('registerAlert', 'Todos los datos son obligatorios')
        return
    }
    if(password != confirmPassword){
        showAlert('register','Las contraseñas no son iguales')
        return
    }

    //Simulacion de registro
    localStorage.setItem ('userName', name)

    showAlert('registerAlert')
})