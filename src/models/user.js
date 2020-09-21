export default class UserModel {
    static async create(data) {
        const response = await fetch('/register', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        return await response.json()
    }

    static async login(email, password) {
        const response = await fetch('/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password
            })    
         })
         return await response.json()
    }

    // static async logout() {
    //     const response = await fetch('/logout', {
    //             method: "DELETE",
    //             credentials: "include",
    //     })
    //     return await response.json()
    // }
   
}