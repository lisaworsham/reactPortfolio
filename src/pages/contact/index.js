import React from "react";
import {
    Card, Button, CardHeader, CardBody,
    CardTitle, Row, Col, NavLink
} from 'reactstrap';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import emailIcon from "../../pictures/email-logo.png";
import githubIcon from "../../pictures/github-logo.png";
import linkedInIcon from "../../pictures/linkedin-logo.png";
import resume from "../../pictures/resume.pdf";
import profileImg from "../../pictures/lisa_worsham.JPG";
import "./style.css";

const Contact = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });

    const isTabletOrPhone = useMediaQuery({
        query: '(max-device-width: 1023px)'
    });

    return (
        <div>
            {isDesktopOrLaptop && <>
                <h3 className="m-5 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card className="w-50 mt-3">
                        <CardHeader tag="h3" >
                            <Row>
                                <Col className="ml-4">
                                    Lisa Worsham
                                </Col>
                                <Button color="secondary" className="mr-5 btn-yellow" href={resume} target="_blank">Resume</Button>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="5"><img className="profileImg shadow bg-white rounded mt-3" src={profileImg} alt="profileImg" /></Col>
                                <Col className="text-Left m-3">
                                    <CardTitle className="lead text-center font-weight-bold">Software Engineer</CardTitle>
                                    <hr className="m-3" />
                                    <NavLink href="mailto:lisa.r.hyndman@gmail.com" target="_blank"><img className="logo" src={emailIcon} alt="Logo" /> : Lisa Worsham</NavLink>
                                    <NavLink href="https://www.linkedin.com/in/lisa-worsham-39750145/" target="_blank"><img className="logo" src={linkedInIcon} alt="Logo" /> : Lisa Worsham</NavLink>
                                    <NavLink href="https://github.com/lisaworsham" target="_blank"><img className="logo" src={githubIcon} alt="Logo" /> : lisaworsham</NavLink>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </>}
            {isTabletOrPhone && <>
                <h3 className="m-3 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card className="m-3">
                        <CardHeader tag="h3" >
                            <Row className="justify-content-center">
                                Lisa Worsham
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row className="justify-content-center"><img className="profileImg shadow bg-white rounded mt-3" src={profileImg} alt="profileImg" /></Row>
                            <Row className="justify-content-center mt-3">
                                <CardTitle className="lead font-weight-bold">Software Engineer</CardTitle>
                            </Row>
                            <hr />
                            <Row>
                                <Col className="text-center">
                                    <Button color="secondary" className="mb-3" href={resume} target="_blank">Resume</Button>
                                    <NavLink href="mailto:lisa.r.hyndman@gmail.com" target="_blank"><img className="logo" src={emailIcon} alt="Logo" /> : Lisa Worsham</NavLink>
                                    <NavLink href="https://www.linkedin.com/in/lisa-worsham-39750145/" target="_blank"><img className="logo" src={linkedInIcon} alt="Logo" /> : Lisa Worsham</NavLink>
                                    <NavLink href="https://github.com/lisaworsham" target="_blank"><img className="logo" src={githubIcon} alt="Logo" /> : lisaworsham</NavLink>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </>}
        </div>
    )
}

export default Contact;