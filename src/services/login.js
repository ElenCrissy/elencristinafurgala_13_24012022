const fetchDataLogin = async () => {
    const url = `http://localhost:3001/api-docs/#/User%20Module/post_user_login`
    const resp = await fetch(url)
    const data = await resp.json()
    const perfTest = data.data.sessions
    setActivity(perfTest)
}