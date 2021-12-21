import React from 'react';

let main = {
    name: '',
    city: '',
    description: '',
    occupation: ''
};

const Header = ({ data }) => {

    if (data) {
        main = {
            name: data.name,
            occupation: data.occupation,
            city: data.city,
            description: data.description,
            networks: data.networks
        }
    }


    // const { name, occupation, description, city, networks } = data;
    // const { data } = props.data;

    // 
    // console.log('name', name);

    // if (!(data)) return null;

    return (
        <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                    <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I'm {main.name}.</h1>
                    <h3>I'm a {main.city} based <span>{main.occupation}</span>. {main.description}.</h3>
                    <hr />
                    {/* <ul className="social">
                                {networks}
                            </ul> */}
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

        </header>
    )

};

export default Header;