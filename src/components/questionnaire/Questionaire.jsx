import { v4 as uuidv4 } from 'uuid';
import {useEffect, useRef, useState} from "react";
import { Button, Row, Radio, Steps, message } from 'antd';
import '../../style/scss/questionnaire.scss';
//import {getQuestions} from '../../api/Questionnaire';
import data from '../../api/data.json';


const Questionairre = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [currentAnswer, setCurrentAnswer] = useState(0);
    const questionTracker = useRef(0);
    const { Step } = Steps;

    const [current, setCurrent] = useState(0);

    const next = () => {
        questionTracker.current += 1;
        setCurrent(current + 1);
    };
  
    const prev = () => {
        questionTracker.current -= 1;
        setCurrent(current - 1);
    };

    const onFinish = () => {
        console.log(answers);
        message.success('Processing complete!')
    }

    const onChange = (evt) => {

        const currentAnswers = answers;
        const question = questions.questions[questionTracker.current];

        const option =question.options[evt.target.value];
        currentAnswers[questionTracker.current] = {
            answer:evt.target.value,
            option:{
                ...option
            }
        }
        setAnswers(currentAnswers);
        setCurrentAnswer(evt.target.value);

    }

    useEffect(()=>{
        const ansArray = [0]
        setQuestions(data);
        setAnswers(ansArray);
    },[]);

    useEffect(()=>{
        setQuestions(data);
    },[answers])

    return (
        <>
            <Steps current={current}>
                {!!questions && questions.questions && questions.questions.length &&
                    questions.questions.map((item, index) => (
                        <Step key={item.question} title={`Questions ${index+1}`} />
                    ))
                }
            </Steps>
            <div className="steps-content" style={{marginTop: '10px', marginBottom: '10px'}}>
                {questions && questions.questions ? questions.questions[current].question : ''}
            </div>
            <Row>
                <Radio.Group style={{ width: '100%' }}
                     onChange={onChange}
                    value={typeof answers[questionTracker.current] !== 'undefined' ? answers[questionTracker.current].answer: currentAnswer }
                >
                    <div style={{height: '60vh', overflowY: 'scroll'}}>
                        {questions && questions.questions && questions.questions[current].options.map((item, index) => (
                            <Row key={uuidv4()}>
                                <Radio value={index} >
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
            <div className="steps-action">
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
                {questions.questions && current <  questions.questions.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {questions.questions && current === questions.questions.length- 1 && (
                    <Button type="primary" onClick={() => onFinish()}>
                        Done
                    </Button>
                )}

            </div>
        </>
    )
}
export default Questionairre;