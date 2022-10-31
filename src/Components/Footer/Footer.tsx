import {Link} from "react-router-dom";

export const Footer = () => {

    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__logo">
                        <Link to='/'>React</Link>
                    </div>
                    <div className="footer__info">
                        <div>
                            <div className="footer__info-title">Присоединяйтесь к нам</div>
                            <div>
                                <a target="_blank" href="#" className="social-icon social-icon__fb"/>
                                <a target="_blank" href="#" className="social-icon social-icon__vk"/>
                                <a target="_blank" href="#" className="social-icon social-icon__ins"/>
                            </div>
                        </div>
                        <div>
                            <div className="footer__info-title">Устанавливайте приложение</div>
                            <div>
                                <a target="_blank" href="#" className="app-icon app-icon__google"/>
                                <a target="_blank" href="#" className="app-icon app-icon__apple"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__sub">
                    <span>© Sionic</span>
                    <span>Правовая информация</span>
                    <span>Политика конфиденциальности</span>
                </div>
            </div>
        </footer>
    )
}
