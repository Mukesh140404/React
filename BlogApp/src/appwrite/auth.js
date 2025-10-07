import conf from '../conf/conf.js'
import { ID,Client,Account } from "appwrite";

export class AuthServices{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try{
            const user = await this.account.create({userId:ID.unique,email,password,name});
            if(user){
                //method call
            }else{
                return user
            }
        }catch(error){
            throw error
        }
    }
    async login({email,password}){
        try{
            return await createEmailPasswordSession({email,password})
        }catch(error){
            throw error
        }
    }
    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null;
    }
}

const authService = new AuthServices()

export default authService;