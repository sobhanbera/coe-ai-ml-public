import header from './components/header/header.module.css'
import footer from './components/footer/footer.module.css'

import button from './components/button/button.module.css'

const componentStyles = {
    headerStyles: header,
    footerStyles: footer,
    buttonStyles: button,
}

import home from './pages/home/home.module.css'
import error404 from './pages/404/404.module.css'

const pageStyles = {
    error404: error404,
    homeStyles: home,
}

export {componentStyles, pageStyles}
