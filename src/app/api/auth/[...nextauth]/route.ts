import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from '@utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
               // @ts-ignore
      clientId: process.env.GOOGLE_ID,
               // @ts-ignore
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
               // @ts-ignore
      const sessionUser = await User.findOne({ email: session.user.email });
               // @ts-ignore
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user already exists
                 // @ts-ignore
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile?.email,
                     // @ts-ignore
            username: profile?.name.replace(" ", "").toLowerCase(),
                     // @ts-ignore
            image: profile?.picture,
          });
        }

        return true
      } catch (error) {
         // @ts-ignore
        console.log("Error checking if user exists: ", error?.message);
        return false
      }
    },
  }
})

export { handler as GET, handler as POST }
