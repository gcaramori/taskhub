import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    authorized({ token }) {
      if (token) return true
      else return false
    },
  },
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|auth|register).*)'],
}
