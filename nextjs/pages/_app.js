import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

/**
 * 페이지 전환시 레이아웃을 유지할 수 있습니다.
 */