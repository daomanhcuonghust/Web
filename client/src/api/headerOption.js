export const optionGet = () => {
    return {
        method: 'get'
    }
}

export const optionPost = (bodyData) => {
    return {
        method: 'post',
        body: JSON.stringify(bodyData),
        headers: { 'Content-Type': 'application/json'}
    }
}