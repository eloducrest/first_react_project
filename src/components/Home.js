import Mycarousel from './Mycarousel';

const Home = () => {
    return (
        <section>
            <Mycarousel></Mycarousel>

            <div className="container marketing">

                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="title-app">L'équipe</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 salarie">
                        <div className="user-img">
                            <img src="https://randomuser.me/api/portraits/women/72.jpg" alt=""/>
                        </div>
                        <h3>Julie</h3>
                        <p>Some representative placeholder content for the three columns of text below the carousel.</p>
                        <p><a className="btn-main" href="#">View details »</a></p>
                    </div>

                    <div className="col-lg-4 salarie">
                        <div className="user-img">
                            <img src="https://randomuser.me/api/portraits/women/50.jpg" alt=""/>
                        </div>

                        <h3>Sophie</h3>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the.</p>
                        <p><a className="btn-main" href="#">View details »</a></p>
                    </div>

                    <div className="col-lg-4 salarie">
                        <div className="user-img">
                            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt=""/>
                        </div>

                        <h3>Nathaloche</h3>
                        <p>And lastly this, the third column of representative placeholder content.</p>
                        <p><a className="btn-main" href="#">View details »</a></p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home;