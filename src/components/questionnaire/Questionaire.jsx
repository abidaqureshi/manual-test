import {v4 as uuidv4} from 'uuid';
import {useEffect, useRef, useState} from "react";
import {Button, Row, Radio, Steps, message} from 'antd';
import '../../style/scss/questionnaire.scss';
import data from '../../api/data.json';
import {ACCEPTANCE_MESSAGE,REJECTION_MESSAGE} from '../../constants/global';


const Questionairre = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [finalMessage, setFinalMessage] = useState('');
    const questionTracker = useRef(0);
    const {Step} = Steps;

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const ansArray = [0]
        setQuestions(data);
        setAnswers(ansArray);
    }, []);



    const next = () => {

        if (!answers[questionTracker.current]) {
            message.error('Please pick an option to proceed!');
            return
        }

        questionTracker.current += 1;
        setCurrent(current + 1);
        if ( questionTracker.current === questions.questions.length) {

            const rejectionList = answers.filter((item)=>item.option.isRejection === true);

            if (rejectionList.length) {
                setFinalMessage(REJECTION_MESSAGE);
            }else {
                setFinalMessage(ACCEPTANCE_MESSAGE);
            }
        }
    };

    const prev = () => {
        questionTracker.current -= 1;
        setCurrent(current - 1);
    };

    const onFinish = () => {

        message.success('Processing complete!')
    }

    const onChange = (evt) => {

        const currentAnswers = answers;
        const question = questions.questions[questionTracker.current];

        const option = question.options[evt.target.value];
        currentAnswers[questionTracker.current] = {
            answer: evt.target.value,
            option: {
                ...option
            }
        }
        setAnswers([...currentAnswers]);


    }

    const RenderOptions = () => {
        return (<div className="render-options">
            {questions.questions && questions.questions[current] && questions.questions[current].options.map((item, index) => (
                <Row key={uuidv4()}>
                    <Radio value={index}>
                        <div>
                            {item.value}
                        </div>
                        <div dangerouslySetInnerHTML={{__html: item.display}}/>
                    </Radio>
                </Row>
            ))}
        </div>)
    }



    return (
        <>
            <Steps current={current}>
                {!!questions && questions.questions && questions.questions.length &&
                questions.questions.map((item, index) => (
                    <Step key={uuidv4()} title={`Questions ${index + 1}`}/>
                ))
                }
                <Step key={uuidv4()} title={`Finish`}/>
            </Steps>
            <div className="steps-content">
                {questions.questions && questions.questions[current] ? questions.questions[current].question : finalMessage}
            </div>
            <Row>
                <Radio.Group
                    className="radio-group"
                    onChange={onChange}
                    value={typeof answers[questionTracker.current] !== 'undefined' ? answers[questionTracker.current].answer : -1}
                >
                    <RenderOptions/>
                </Radio.Group>
            </Row>
            <div className="steps-action">
                {current > 0 && (
                    <Button style={{margin: '0 8px'}} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
                {questions.questions && current < questions.questions.length && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {questions.questions && current === questions.questions.length && (
                    <Button type="primary" onClick={() => onFinish()}>
                        Done
                    </Button>
                )}

            </div>
        </>
    )
}
export default Questionairre;