import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Parlene Sports",
      credentials: {
        username: {
          label: `Username (Demo): JohnDoe123`,
          placeholder: "Username",
          type: "string",
        },
        password: {
          label: `Passowrd (Demo): Password123`,
          placeholder: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { username, password } = credentials;
        const user = username === "JohnDoe123" && password === "Password123";
        if (user) {
          return {
            name: "John Doe",
            email: "johndoe123@gmail.com",
          };
          // Any object returned will be saved in `user` property of the JWT
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  secret: "Tiudwdinwqdiwqndiwqndiwqdnqiwdniqwndiqwnd",
};
export default NextAuth(authOptions);
