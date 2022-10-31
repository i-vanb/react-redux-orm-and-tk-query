import Header from './Components/Header/HeaderContainer'
import {Sidebar} from './Components/Sidebar/Sidebar'
import {Footer} from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";


export const App = () => {
    return (
        <div className="app__container">
            <main className="app__main">
                <section className="app__main-section">
                    <Header />
                    <div className="app__main-content">
                        <div className="container">
                            <div className="app__main-content__wrapper">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="app__main-sidebar">
                    <Sidebar />
                </aside>
            </main>
            <Footer />
        </div>
    )
}
