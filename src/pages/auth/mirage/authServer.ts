import {createServer} from "miragejs"

createServer({
    routes() {
        this.post("/api/signIn", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            console.log(attrs);
            const user = attrs.email + attrs.password
            const userReg = 'qqq@qqq.qq1234567'
            attrs.loginData = {
                id: Date.now(),
                accessToken: '123456789qwerty',
            }
            attrs.errors = {error: 'No login'}
            return user == userReg ? attrs.loginData : attrs.errors
        })

        this.post("/api/signUp", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            attrs.errors = {error: "You have successfully registered!"}
            return attrs.errors;
        })

        this.post("/api/restorePassword", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            attrs.errors = {error: "To reset your password, follow the link in the email"}
            return attrs.errors;
        })
    },
})


