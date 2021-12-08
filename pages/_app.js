import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({Component, pageProps}) {
    return (
        <div>
            <Header />

            <div className="main-content-global">
                <Component {...pageProps} />
            </div>
            <Footer />
        </div>
    )
}

export default MyApp
