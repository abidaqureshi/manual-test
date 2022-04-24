import '../style/css/header.css'
import { Modal, Button } from 'antd';
import { useState } from 'react';

const Header = ({onClickQuiz}) => {

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
                <Button className="header-button" type="primary" size="large" onClick={onClickQuiz}>
                    Take the quiz
                </Button>
            </div>
        </div>
    )
}
export default Header;