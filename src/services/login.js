const init = async () => {
    const url = `http://localhost:3001/api/v1/user`
    const response = await fetch(url)
    console.log("response", response)
    const data = await response.json()
    console.log(JSON.stringify(data))
}

export default init