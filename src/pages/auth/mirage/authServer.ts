// @ts-ignore

import {createServer} from "miragejs"

createServer({
    routes() {
        // @ts-ignore
        this.post("/api/login", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            const user = attrs.email + attrs.password
            const userReg = 'qqq@qqq.qq1234567'
            attrs.loginData = {
                id: Date.now(),
                accessToken: '123456789qwerty',
            }
            attrs.errors = {error: 'No login'}
            return user == userReg ? attrs.loginData : attrs.errors
        })


        this.post("/api/registration", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            attrs.errors = {errors: "You have successfully registered!"}
            return attrs.errors;
        })
    },
})
