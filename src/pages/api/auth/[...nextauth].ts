import NextAuth, { AuthOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '../../../libs/prismadb';

export const authOptions: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account?.provider) {
        const exUser = await prisma.user.findFirst({
          where: {
            provider: account.provider,
            name: token.name!,
            email: token.email!,
          },
        });

        // 등록된 유저가 아니라면 회원가입
        if (!exUser) {
          await prisma.user.create({
            data: {
              name: token.name!,
              email: token.email!,
              image: token.picture!,
              provider: account.provider,
            },
          });
        }

        token.provider = account.provider;
      }

      return token;
    },
    // 세션에 로그인한 유저 데이터 입력
    async session({ session, token }) {
      const exUser = await prisma.user.findFirst({
        where: {
          name: session.user?.name!,
          email: session.user?.email!,
          provider: token.provider!,
        },
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
          provider: true,
        },
      });

      session.user = exUser!;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
