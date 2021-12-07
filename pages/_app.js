import Image from 'next/image'
import {useRouter} from 'next/router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({Component, pageProps}) {
    const pathname = useRouter().pathname

    return (
        <div>
            <Header />

            {pathname === '/' && (
                <div className={'header-image'}>
                    <div className="header-content">
                        <img src="/img/ghrce.png" alt="ghrce logo" />
                    </div>
                </div>
            )}

            <div className="main-content">
                <Component {...pageProps} />
            </div>
            <Footer />
        </div>
    )
}

export default MyApp
