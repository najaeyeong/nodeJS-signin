"use strict"
const UserStorage = require("./UserStorage")
class User {
    constructor(body){
        this.body = body
        this.user = new UserStorage(body)

    }
    login(){
        const body = this.body
        const {id,psword} = UserStorage.getUserInfo(this.body.id);
        if(id){
            if(id === body.id && psword === body.psword){
                return {success: true}
            }
            return {success: false , message: 'Login failed : password error'};
        }
        return {success: false,message: 'Login failed : id error'};
    
    }

}
module.exports = User