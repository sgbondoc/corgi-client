class PostModel {
    static all = async () => {
        const response = await fetch('/posts', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }
        })
        return await response.json()
    }

    static create = async (title, caption, url) => {
        const response = await fetch('/createpost', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            },
            body: JSON.stringify({
                title,
                caption,
                url
            })    
        })
        return await response.json()
    }

    static delete = async (postId) => {
        const response = await fetch(`/deletepost/${postId}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }    
        })
        return await response.json()
    }

    static show = async (text, postId) => {
        const response = await fetch('/comment', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            },
            body: JSON.stringify({
                text,
                postId
            })
        })        
        return await response.json()
    }

    static showMyPosts = async () => {      
        const response = await fetch('/myposts', {
            headers: { 
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }    
        })
        return await response.json()
    }
}    

export default PostModel