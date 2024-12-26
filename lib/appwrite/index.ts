"use server";

// 这部分代码操作的是auth，通过auth获取相关的account，database，storage等操作
import {Account, Avatars, Client, Databases, Storage} from "node-appwrite";
import {appwriteConfig} from "@/lib/appwrite/config";
import {cookies} from "next/headers";

export const createSessionClient = async () => {
    const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl) // Your API Endpoint
    .setProject(appwriteConfig.projectId); // Your project ID

    const session = (await cookies()).get("appwrite-session");
    if (!session || !session.value) throw new Error("No session");
    client.setSession(session.value);

    return {
        get account() {
            return new Account(client);
        },
        get databases() {
            return new Databases(client);
        }
    }
}

export const createAdminClient = async () => {
    const client = new Client()
        .setEndpoint(appwriteConfig.endpointUrl) // Your API Endpoint
        .setProject(appwriteConfig.projectId) // Your project ID
        .setKey(appwriteConfig.secretKey);

    return {
        get account() {
            return new Account(client);
        },
        get databases() {
            return new Databases(client);
        },
        get storage() {
            return new Storage(client);
        },
        get avatars(){
            return new Avatars(client);
        }
    }
}