import '../style/css/layout.css';
import Header from '../containers/header';
import Home from './home';
import Footer from '../containers/footer';

import Questionairre from '../components/questionnaire/Questionaire';
import {useModal} from '../hooks/useModal';

function Layout() {
    const {showModal, visible, handleCancel, handleOk} = useModal();

    return (
        <div className="container">
            <Header onClickQuiz={showModal}/>
            <div className="container-contents">
                <main>
                    <div className="main">
                        <Home/>
                    </div>
                </main>
            </div>
            <Footer/>
           <Questionairre visible={visible} handleCancel={handleCancel} handleOk={handleOk} />
        </div>);
};
export default Layout;