import HomeImg6 from "../assets/img/hero-bg1.webp";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <section>
                <div className="home">
                    <div className="row">
                        <div className="col-12">
                            <div className="homeImg">
                                <img src={HomeImg6} alt="Home page img" className='home-img-src' />
                                <div className="content-sec">
                                    <h1>Dhanjit Kumar</h1>
                                    <p>I'm a professional Full-Stack Web App Developer from India.</p>
                                    <Link to="/about" className='abt-btn'>About Me</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Home;