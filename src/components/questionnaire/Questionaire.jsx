import {useEffect, useState} from "react";
import { Modal, Row, Radio } from 'antd';
import '../../style/scss/questionnaire.scss';
import { Steps } from 'antd';
//import {getQuestions} from '../../api/Questionnaire';
import data from '../data.json';


const Questionairre = ({visible, handleCancel, handleOk}) => {
    const [questions, setQuestions] = useState([]);
    const { Step } = Steps;

    const [current, setCurrent] = useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
      }
    

    useEffect(()=>{
        setQuestions(data);
    },[]);

    return (
        <Modal
            title="Questionnaire"
            visible={visible}
            onOk={next}
            okText="Next"
            cancelText="Previous"
            onCancel={prev}
        >
            <Steps current={current}>
                {!!questions && questions.questions && questions.questions.length && questions.questions.map((item, index) => (
                    <Step key={item.question} title={`Questions ${index+1}`} />
                ))}
            </Steps>
            <div className="steps-content" style={{marginTop: '10px', marginBottom: '10px'}}>{questions && questions.questions ? questions.questions[current].question : ''}</div>
            <Row>
                <Radio.Group style={{ width: '100%' }} onChange={onChange}>
                    <div style={{height: '60vh', overflowY: 'scroll'}}>
                        {questions && questions.questions && questions.questions[current].options.map((item, index) => (
                            <Row key={index}>
                                <Radio value={item.value}>
                                    <div>
                                        {item.value}
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: item.display }} />
                                </Radio>
                            </Row>
                        ))}
                    </div>
                </Radio.Group>
            </Row>
        </Modal>
    )
}
export default Questionairre;