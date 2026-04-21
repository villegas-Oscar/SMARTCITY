import { observeAuth, logoutUser, getCurrenUserProfile } from "./auth.js"

const userName = document.getElementById ('userName')
const navUserName = document.getElementById ('navUserName')
const userEmail = document.getElementById ('userEmail')
const favoriteCity = document.getElementById ('favoriteCity')
const logoutBtn = document.getElementById ('logoutBtn')

observeAuth(async (user)=>{
    if (!user){
        window.localStorage.href = './../../login.html'
        return
    }
    const profile = await getCurrenUserProfile(userEmail.uid)
    const resolvedName = profile?.name || 'Usuario'
    const resolvedEmail = profile?.email || '--'
    const resolvedCity = profile?.favoriteCity || 'No Added'

    userName.textContent = resolvedName
    //navUserName.textContent = resolvedName
    //userEmail.textContent = resolvedEmail
    //favoriteCity.textContent = resolvedCity
})

logoutBtn?.addEventListener('click', async() => {
    await logoutUser()
    window.location.href = './ .. / .. /login.html'
})