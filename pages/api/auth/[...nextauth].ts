import NextAuth from 'next-auth/next'
import CredentialsProvider from "next-auth/providers/credentials";
import { CredentialsConfig } from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            type: "credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials: any, req: any) => {
                // 在這裡驗證使用者的帳號密碼
                if (credentials?.username === 'guest@mail.com' && credentials?.password === 'guestpassword') {
                    // 如果驗證成功，回傳使用者資訊
                    return { id: 1, name: 'guest@mail.com' }
                } else {
                    // 如果驗證失敗，回傳 null
                    return null
                }
            },

        } as CredentialsConfig),
    ],
    secret: process.env.JWT_SECRET
})