import {createServer} from "miragejs"

createServer({
    routes() {
        // @ts-ignore
        this.post("/api/login", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            const user = attrs.email + attrs.password
            const userReg = 'qqq@qqq.qq1234567'
            //userReg =
            attrs.data = {accesssToken: '123456789qwerty', id: Date.now()}
            attrs.message = 'No login'
            console.log(attrs.message)

            console.log(user)
            return user == userReg ? {attrs} : attrs.message

        })
    },
})