import { ExclamationCircleOutlined } from '@ant-design/icons';
import './Task.css';
import Question from '../../components/question/Question';

const data = [
    {
        id: 0, 
        question: 'JavaScript поддерживает...', 
        answers: ['Объектно-ориентированный стиль', 'Функциональный стиль', 'Императивный стиль', 'Все перечисленные'], 
        correct: 3,
        descr: 'JavaScript -  мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.'
    },
    {
        id: 1, 
        question: 'На JavaScript можно писать', 
        answers: ['И Frontend, и Backend', 'Только Frontend', 'Только Backend'], 
        correct: 0,
        descr: 'JS - супер язык! На нем можно писать как Frontend, так и Backend (Node.js)'
    },
    {
        id: 2, 
        question: 'JS нельзя использовать в  создании мобильных приложений', 
        answers: ['Чистейшая правда, он предназначен только для сайтов', 'Наглая ложь, это очень универсальный язык'], 
        correct: 1,
        descr: 'JS активно задействуется во Frontend- и Backend-разработке, мобильной разработке и даже в создании десктопных приложений!'
    },
    {
        id: 3, 
        question: 'JavaScript невозможно выучить, это самый трудный язык из всех', 
        answers: ['Конечно, раз он такой универсальный, то и овладеть им очень сложно', 'Наоборот, это довольно простой в изучении язык'], 
        correct: 1,
        descr: 'JS обладает понятным синтаксисом, который не требует углубленного изучения. Решить элементарную задачу при помощи JS удается за несколько минут.'
    },
    {
        id: 4, 
        question: 'Неужели это такой идеальный язык, что у него совсем нет недостатков?', 
        answers: ['У всего есть недостатки', 'У него нет недостатков, на него нужно равняться'], 
        correct: 0,
        descr: 'Как и у всего, у данного языка есть недостатки, но это не мешает ему быть в топе и постоянно развиваться!'
    },
]

const Task = () => {
    return (
        <div className='task'>
            <section className="info">
                <h3 className="title">JavaScript</h3>
                <div className="task__text">Не все понимают всю силу этого языка программирования, поэтому я предлагаю тебе ответить на вопросы ниже.</div>
                <div className="task__warning">
                    <div className="warning__sign"><ExclamationCircleOutlined/></div>
                    Отвечай так, как считаешь правильным. Эти вопросы созданы для того, чтобы показать достоинства языка, а не для проверки знаний.
                </div>
            </section>

            <section className="test">
                <h3 className="test__title title">Небольшая викторина</h3>
                <div className="test__container">
                    {data.map(item => 
                        <Question key={item.id} data={item}/>
                    )}
                </div>
            </section>

        </div>
    );
};

export default Task;