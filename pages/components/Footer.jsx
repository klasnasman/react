import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="f-logo">
                <a href="#top">Back to top</a>
            </div>
            <div className="f-menu">
                <ul>
                    <li><a href="/portrait/">Portrait</a></li>
                    <li><a href="/personal/">Personal</a></li>
                    <li><a href="/wedding/">Wedding</a></li>
                </ul>
            </div>
            <div className="f-contact">
                <ul>
                    <p>+46 70 549 64 74</p>
                    <p>hello@klasnasman.se</p>
                    <p>Stockholm, Sweden</p>
                </ul>
            </div>
            <div className="f-follow">
                <ul>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">LinkedIn</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer