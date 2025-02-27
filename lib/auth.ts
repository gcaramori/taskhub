import Credentials from 'next-auth/providers/credentials'
import type { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Email and Password',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await fetch(`${process.env.API_URL}/auth/signin`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        }).then((res) => res.json())

        if (user.message) {
          return null
        }

        return user
      },
    }),
  ],
  jwt: {
    // maxAge: 60 * 60 * 24 * 30,
    secret: process.env.JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
}
