const url = process.env.REACT_APP_API_URL || 'http://localhost:5000'

export default class UserModel {
    static async create(data) {
        const response = await fetch('/register', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        return await response.json()
    }

    static async login(credentials) {
        const response = await fetch(`${url}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(credentials)
         })
         return await response.json()
     }

     static async logout() {
       const response = await fetch(`${url}/auth/logout`, {
             method: "DELETE",
             credentials: "include",
         })
         return await response.json()
      }
}