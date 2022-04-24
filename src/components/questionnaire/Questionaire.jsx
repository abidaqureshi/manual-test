import {useEffect, useState} from "react";
import { Modal } from 'antd';
import '../../style/scss/questionnaire.scss';
import {getQuestions} from '../../api/Questionnaire';


const Questionairre = ({visible, handleCancel, handleOk}) => {

    useEffect(()=>{
        const questions = getQuestions();
        console.log(questions);
    },[visible]);

    return (
        <Modal
            title="Questionnaire"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <p>questionairre</p>
        </Modal>
    )
}
export default Questionairre;