import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import DiscordProvider from 'next-auth/providers/discord';

export default NextAuth({
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
  },
});
