import NextAuth, { NextAuthOptions } from "next-auth";
import DuendeIdentityServer6 from "next-auth/providers/duende-identity-server6";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    DuendeIdentityServer6({
      id: "id-server",
      clientId: "nextApp",
      clientSecret: "secret",
      issuer: "http://localhost:5000",
      authorization: { params: { scope: "openid profile kayakTracker" } },
      idToken: true,
    }),
  ],
  callbacks: {
    async jwt({ token, profile, account, user }) {
      //console.log(token, profile, account, user);

      if (profile) {
        console.log(token.username);
        token.username = profile.username;
      }
      if (account) {
        token.access_token = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      //console.log(JSON.stringify(token));
      if (token) {
        session.user.username = token.username;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
