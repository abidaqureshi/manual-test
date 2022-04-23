import '../style/css/layout.css';
import Header from '../containers/header';
import Home from './home';
import Footer from '../containers/footer';
function Layout() {
    return (
        <div className="container">
            <Header/>
            <div className="container-contents">
                <main>
                    <div className="main">
                        <Home/>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>);
};
export default Layout;