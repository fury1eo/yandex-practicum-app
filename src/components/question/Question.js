import { useState } from 'react';
import './Question.css';

const Question = ({ data }) => {
    const [ans, setAns] = useState('')
    const [currentAns, setCurrentAns] = useState();

    const onAns = (id) => {
        if (!ans) {
            if (id === data.correct) {
                setAns('correct')
            } else {
                setAns('wrong')
            }
            setCurrentAns(id);
        }
    }

    return (
        <div className="test__block">
            <div className="test__block__question">{data.question}</div>
            <hr />
            <div className="test__block__answers">
                {data.answers.map(answer => 
                    <div 
                        style={ans === 'wrong' && data.answers.indexOf(answer) === currentAns
                            ? {color: '#bb1c00', borderColor: '#bb1c00', backgroundColor: 'rgba(187, 28, 0, .3)'}
                            : ans === 'wrong' && data.answers.indexOf(answer) === data.correct
                                ? {color: '#007618', borderColor: '#007618', backgroundColor: 'rgba(0, 118, 24, .3)'}
                                : ans === 'correct' && data.answers.indexOf(answer) === data.correct
                                    ? {color: '#007618', borderColor: '#007618', backgroundColor: 'rgba(0, 118, 24, .3)'}
                                    : null
                        } 
                        onClick={() => onAns(data.answers.indexOf(answer))} 
                        className="answer">
                            {answer}
                    </div>
                )}
            </div>
            {!ans
                ? null
                :
                    <div className={'test__descr ' + ans}>
                        {data.descr}
                    </div>
            }
        </div>
    );
};

export default Question;