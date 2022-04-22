import '../style/css/header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="intro">
                <p className="heading">
                    Be good
                    to yourself
                </p>
                <div className="header-intro-details">
                    <p>
                        We're working around the clock to bring
                        you a holistic approach to your wellness.
                        From top to bottom, inside and out.
                    </p>
                </div>
                <button className="header-button">
                    Take the quiz
                </button>
            </div>
        </div>
    )
}
export default Header;