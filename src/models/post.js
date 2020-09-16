const url = process.env.REACT_APP_API_URL || 'http://localhost:5000'

class PostModel {
    static all = async () => {
        const response = await fetch('/posts')
        return await response.json()
    }

    static show = async (postId) => {
        const response = await fetch(`${url}/posts/${postId}`)
        return await response.json()
    }
    
    static create = async (postData) => {
        const response = await fetch(`${url}/createpost`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })
        return await response.json()
    }

    static delete = async (postId) => {
        const response = await fetch(`${url}/posts/${postId}`)
        return await response.json()
    }

    static update = async (postId, post) => {
        const response = await fetch(`${url}/posts/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
        return await response.json()
    }
}

export default PostModel