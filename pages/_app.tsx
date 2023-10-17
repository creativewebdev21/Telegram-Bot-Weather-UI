import "../styles/globals.css"
import React from "react"
import type { AppProps } from "next/app"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { UserProvider } from "../providers/UserProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <GoogleOAuthProvider
        clientId={
          process.env.NEXT_PUBLIE_GOOGLE_CLIENT_ID ||
          "551764290924-trda8mpkcpr4445cf7t06g06saeu5lcp.apps.googleusercontent.com"
        }
      >
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </UserProvider>
  )
}
export default MyApp
