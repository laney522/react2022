import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Footer from '../src/component/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp

/**
 * 페이지 전환시 레이아웃을 유지할 수 있습니다.
 */