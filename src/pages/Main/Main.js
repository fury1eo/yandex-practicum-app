import './Main.css';
import LastSelfie from '../../images/last-selfie.jpg';
import UpperSchoolPhoto from '../../images/upper-school-photo.jpg';
import CirclePhoto from '../../images/circle-photo.jpg';
import CssVideo from '../../videos/css_bonus.mp4';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();

    const go = () => {
        window.scrollTo({ top: 0, left: 0});
        navigate('/task');
    }

    return (
        <div className='main'>
            <section className="promo">
                <h1>Привет!</h1>
                <h2>Это тестовое задание для Яндекс Практикума</h2>
            </section>
            <section className="photos">
                <h3 className="photos__title title">Немного обо мне</h3>
                <div className="photos__text">
                <p>Меня зовут Матвей)</p><br/>
                <p>Сейчас я обучаюсь на 4 курсе Российского технологического университета - МИРЭА. Занимаюсь Frontend-разработкой не первый год и за это время успел сделать много проектов (как маленьких, так и больших).</p><br/>
                <p>Я мечтаю стать востребованным Fullstack-разработчиком, вести проекты, руководить командой разработчиков и даже создать что-то свое, уникальное. Но все это еще впереди!</p>
                </div>
                <div className="photos__container">
                <div className="photos__block"><div className="photos__block__img">
                    <img src={UpperSchoolPhoto} alt="Upper school"/>
                    </div>
                    <div className="photos__block__text">Это фото было сделано в 11 классе. Тут я на дне рождения своей сестренки)</div>
                    
                </div>
                <div className="photos__block"><div className="photos__block__img">
                    <img src={LastSelfie} alt="Last selfie"/>
                    </div>
                    <div className="photos__block__text">А это селфи было сделано относительно недавно, здесь я участвовал в очень крутом проекте)</div>
                    
                </div>
                </div>
            </section>

            <section className="story">
                <h3 className="story__title title">Почему я полюбил программирование?</h3>
                <div className="story__block">
                <div className="story__photo">
                    <img src={CirclePhoto} alt="Circle"/>
                </div>
                <div className="story__text">
                    <p>Как и все, я часто любил играть в компьютер в детстве. Параллельно я увлекался творчеством в любом его виде, будь то рисование, создание музыки или проектирование чего-либо. В один момент я решил попробовать себя в программировании и сел изучать эту сферу.</p><br/>
                    <p>Несмотря на все трудности, которые появились практически сразу, меня это очень затянуло, так как я увидел в этом долю творчества, ведь я мог создавать то, что я хочу и мне не нужно было ничего, кроме компьютера, поэтому программирование я полюбил с первого взгляда. Сейчас я занимаюсь Frontend-разработкой и кайфую от этого!</p>
                </div>
                </div>
            </section>

            <section className="repository">
                <h3 className="repository__title title">Репозиторий с этим приложением</h3>
                <div className="repository__text">Все исходники этого приложения можно найти в репозитории ниже. Переходи скорее!</div>
                <div className="repository__link"><a href="https://github.com/fury1eo/yandex-practicum-app">https://github.com/fury1eo/yandex-practicum-app</a></div>
            </section>

            <section className="video">
                <h3 className="video__title title">Небольшая фишка из CSS</h3>
                <div className="video__block">
                <video controls width='100%' height='100%' src={CssVideo} type='video/mp4'></video>
                </div>
            </section>

            <section className="to_task">
                <h3 className="to_task__title title">Узнай больше о JavaScript!</h3>
                <button onClick={() => go()} className="to_task__btn">Перейти к заданию со звездочкой</button>
            </section>
        </div>
    );
};

export default Main;