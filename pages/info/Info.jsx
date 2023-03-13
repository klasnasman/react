import React from 'react'
import FooterInfo from '../components/FooterInfo'
import Header from '../components/Header'
import Transitions from '../Transitions'

const Info = () => {
    return (
        <Transitions>
            <Header />
            <div className='info__grid'>
                <section className='info__section'><img src='/img/info.png' />
                    <p>Fotografering för mig är att bevara minnen.<br />Ett sätt att minnas människor vi mött och platser vi besökt.
                        <br />
                        Foton hjälper oss att göra precis det - <br />
                        återskapa stundens detaljer och nyanser.
                        <br />
                        <br />Jag hjälper gärna till med att föreviga erat bröllop.<br />Bosatt i Stockholm men reser gärna.<br />För priser
                        och andra frågor kontakta mig på klasnasman@gmail.com
                    </p>
                </section>
            </div>
            <FooterInfo />
        </Transitions>
    )
}

export default Info
