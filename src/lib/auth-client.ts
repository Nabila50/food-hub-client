import { env } from "@/env";
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  baseURL:`${env.NEXT_PUBLIC_API_URL}/api/auth`,
  fetchOptions: {
    credentials: "include",
  },

    plugins:[
        {
            id:"next-cookies-request",
            fetchPlugins:[
                {
                    id: "next-cookies-request-plugin",
                    name: "next-cookies-request-plugin",
                    hooks:{
                        async onRequest(ctx){
                            if(typeof window === "undefined"){
                                const {cookies} = await import("next/headers");
                                const headers = await cookies();
                                ctx.headers.set("cookie", headers.toString());
                            }
                        }
                    }
                }
            ]
        }
    ]
    
});

export const signInWithGoogle = async ()=>{
    return await authClient.signIn.social({
        provider: "google",
        callbackURL: "http://localhost:3000"
    })
}