import React from 'react';

let main = {
    name: '',
    profilepic: '',
    bio: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    resumeDownload: ''
};

const About = ({ data }) => {

    if (data) {
        main = {
            name: data.name,
            profilepic: "images/" + data.image,
            bio: data.bio,
            street: data.address.street,
            city: data.address.city,
            state: data.address.state,
            zip: data.address.zip,
            phone: data.phone,
            email: data.email,
            resumeDownload: data.resumeDownload
        }
    }
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={main.profilepic} alt="Juan José Profile Pic" />
                </div>
                <div className="nine columns main-col">

                    <h2 style={{textAlign: 'center'}}>About Me</h2>

                    <p className='address'>{main.bio}</p>

                    <div className="columns download">
                            <p>
                                <a href="data/Juan_Jose_Martinez.pdf" className="button" target="_blank"><i className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>

                    <div className="row">
                        <div className="columns contact-details" style={{textAlign: 'left'}}>
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{main.name}</span><br />
                                <span>{main.street}<br />
                                    {main.city} {main.state}, {main.zip}
                                </span><br />
                                <span>{main.phone}</span><br />
                                <span>{main.email}</span>
                            </p>
                        </div>
                       
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About;
