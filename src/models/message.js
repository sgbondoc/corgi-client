class MessageModel {
    static all = async () => {
        const response = await fetch('/messages', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }
        })
        return await response.json()
    }

    static create = async (subject, body) => {
        const response = await fetch('/createmessage', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            },
            body: JSON.stringify({
                subject,
                body
            })    
        })
        return await response.json()
    }

    static delete = async (messageId) => {
        const response = await fetch(`/deletemessage/${messageId}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            }    
        })
        return await response.json()
    }

    static show = async (text, messageId) => {
        const response = await fetch('/reply', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            },
            body: JSON.stringify({
                text,
                messageId
            })
        })        
        return await response.json()
    }

}

export default MessageModel