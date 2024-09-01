// app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Diğer sağlayıcılar buraya eklenebilir
  ],
  // Ekstra ayarlar buraya eklenebilir
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
