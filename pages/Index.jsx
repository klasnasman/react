import React from 'react'
import LazyLoad from 'react-lazy-load';
import Transitions from './Transitions';
import Hero from './components/Hero';
import Header from './components/Header';
import Footer from './components/Footer';

const Index = () => {
    return (
        <Transitions>
            <Hero />
            <Header />
            <div className="grid__index">
                <section className="a1">
                    <a href="/people.html">
                        <figure className="section__figure">
                            <LazyLoad>
                                <img src="/img/index/gudmar2.1280.jpg" />
                            </LazyLoad>
                        </figure>
                        <h2 className="section__pagination">
                            <div>Portrait</div>
                            <div>Gudmar</div>
                        </h2>
                    </a>
                </section>

                <section className="a2">
                    <a href="/people.html">
                        <figure className="section__figure">
                            <LazyLoad>
                                <img src="/img/wedding/emmajonas3.jpg" />
                            </LazyLoad>
                        </figure>
                        <h2 className="section__pagination">
                            <div>Wedding</div>
                            <div>Emma + Jonas</div>
                        </h2>
                    </a>
                </section>

                <section className="b1">
                    <a href="/people.html">
                        <figure className="section__figure">
                            <LazyLoad>
                                <img src="/img/index/gudmar.1280.jpg" />
                            </LazyLoad>
                        </figure>
                        <h2 className="section__pagination">
                            <div>Personal</div>
                            <div>Gudmar</div>
                        </h2>
                    </a>
                </section>

                <section className="b2">
                    <a href="/people.html">
                        <figure className="section__figure">
                            <LazyLoad>
                                <img src="/img/index/lofoten.png" />
                            </LazyLoad>
                        </figure>
                        <h2 className="section__pagination">
                            <div>Personal</div>
                            <div>Lofoten</div>
                        </h2>
                    </a>
                </section>

                <section className="c1" id="change-bg-color">
                    <a href="/people.html">
                        <figure className="section__figure">
                            <LazyLoad>
                                <img src="/img/wedding/lisaalex.jpg" />
                            </LazyLoad>
                        </figure>
                        <h2 className="section__pagination">
                            <div>Wedding</div>
                            <div>Lisa + Alex</div>
                        </h2>
                    </a>
                </section>

                <section className="c2">
                    <a href="/people.html">
                        <figure className="section__figure">
                            <LazyLoad>
                                <img src="/img/wedding/annamathias.jpg" />
                            </LazyLoad>
                        </figure>
                        <h2 className="section__pagination">
                            <div>Wedding</div>
                            <div>Anna + Mathias</div>
                        </h2>
                    </a>
                </section>

                <section className="d1">
                    <a href="/people.html">
                        <figure className="section__figure">
                            <LazyLoad>
                                <img src="/img/wedding/agnespeter.jpg" />
                            </LazyLoad>
                        </figure>
                        <h2 className="section__pagination">
                            <div>Wedding</div>
                            <div>Agnes + Peter</div>
                        </h2>
                    </a>
                </section>

                <section className="e1">
                    <a href="/people.html">
                        <figure className="section__figure">
                            <LazyLoad>
                                <img src="/img/index/anders.1280.jpg" />
                            </LazyLoad>
                        </figure>
                        <h2 className="section__pagination">
                            <div>Portrait</div>
                            <div>Anders</div>
                        </h2>
                    </a>
                </section>

                <section className="e2">
                    <LazyLoad>
                        <h2>Road to the Winter Classic</h2>
                    </LazyLoad>
                </section>
            </div>
            <Footer />
        </Transitions>
    )
}

export default Index
