import "../styles/globals.css"
import React, { useEffect } from "react"
import type { AppProps } from "next/app"
import { GoogleOAuthProvider } from "@react-oauth/google"
import AOS from "aos"
import { UserProvider } from "../providers/UserProvider"
import { ThemeProvider } from "../providers/ThemeProvider"
import "aos/dist/aos.css"
import { AdminProvider } from "../providers/AdminProvider"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
    <ThemeProvider>
      <UserProvider>
        <AdminProvider>
          <GoogleOAuthProvider
            clientId={
              process.env.NEXT_PUBLIE_GOOGLE_CLIENT_ID ||
              "551764290924-trda8mpkcpr4445cf7t06g06saeu5lcp.apps.googleusercontent.com"
            }
          >
            <Component {...pageProps} />
          </GoogleOAuthProvider>
        </AdminProvider>
      </UserProvider>
    </ThemeProvider>
  )
}
export default MyApp
