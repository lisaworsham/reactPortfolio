import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

class AboutMe extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Hello, I'm Lisa!</h1>
                        <p className="lead">a software developer.</p>
                        <hr className="my-2" />
                        <p> I am a full-stack web developer based out of Houston, Texas. I specialize in HTML, CSS, and JavaScript. With previous experience in marketing, so I understand what is needed for a website and can communicate that effectively. A few little things about me: I enjoy reading and writing when I can. If I'm not doing that, I'm usually playing video games. My ultimate goal is to make my own video game. So becoming a web developer and learning to code is my first step in that journey. Thank you for being here and I hope you like what you see.</p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}


export default AboutMe;