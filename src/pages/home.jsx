import '../style/scss/home.scss'
import firstPhoto from '../style/img/first_photo.png';
import secondPhoto from '../style/img/second_photo.png';
import Header from "../containers/header";
import Footer from "../containers/footer";

const Home = () => {

    return (
        <div className="container">
            <Header/>
            <div className="container-contents">
                <main>
                    <div className="main">
            <p className="page-heading">
                What we can help with
            </p>
            <div className="section-content">
                <div className="section-photo-container">
                    <img alt="something" src={firstPhoto}/>
                </div>
                <div className="section-details">
                    <div className="ss">
                        01
                        <div className="details">
                            <div className="section-heading">
                                Hair loss
                            </div>
                            <div className="section-sb-heading">
                                Hair loss needn’t be irreversible.
                                We can help!
                            </div>
                            <div className="section-sb-details">
                                We’re working around the clock to bring you a holistic approach to your wellness. From
                                top to bottom, inside and out.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-content">
                <div className="section-details-2">
                    <div className="ss">
                        02
                        <div className="details-2">
                            <div className="section-heading">
                                Erecetile dysfunction
                            </div>
                            <div className="section-sb-heading">
                                Erections can be a tricky thing. But no need to feel down!
                            </div>
                            <div className="section-sb-details">
                                We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.
                            </div>
                        </div>
                    </div>

                </div>
                <div className="section-photo-container">
                    <img alt="something" src={secondPhoto}/>
                </div>

            </div>
                    </div>
                </main>
            </div>
            <Footer/>

        </div>
    );
}

export default Home;