import { OutdoorProvider } from "../contexts/OutdoorContext"

function MyApp({ Component, pageProps }) {
  return (
    <OutdoorProvider>
      <Component {...pageProps} />
    </OutdoorProvider>
  )
}

export default MyApp
