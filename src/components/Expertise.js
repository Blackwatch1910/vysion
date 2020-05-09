import React from 'react';
import {
    Container, Row, Col,
    Toast, ToastBody, ToastHeader
} from 'reactstrap';

class Expertise extends React.Component {
    constructor() {
        super();
        this.state = {hovered: false};
    }

    render() {
        return (
            <div className="Container">
                <br />
                <h1 className="text-center"><u>Our</u> <b>Expertise</b></h1>

                <Container>
                    <Row>
                        <Col className="bg-docs-transparent-grid rounded p-3 my-2 shadow--hover" xs="4">
                            <Toast>
                                <ToastHeader>
                                    Mobile Application development
                                </ToastHeader>
                                <ToastBody>
                                    <img width='100%' height='100%' src="https://images.assetsdelivery.com/compings_v2/vectorgalaxy/vectorgalaxy1808/vectorgalaxy180810621.jpg" alt="Embedded Systems" />
                                </ToastBody>
                            </Toast>
                        </Col>
                        <Col className="bg-docs-transparent-grid rounded p-3 my-2 shadow--hover" xs="4">
                            <Toast>
                                <ToastHeader>
                                    Embedded System Devices
                                </ToastHeader>
                                <ToastBody>
                                    <img width='100%' height='100%' src="https://us.123rf.com/450wm/antonshaparenko/antonshaparenko1810/antonshaparenko181000030/109075337-stock-vector-embedded-system-icon-simple-style-design-from-industry-4-0-collection-ux-and-ui-pixel-perfect-premiu.jpg?ver=6" alt="Embedded Systems" />
                                </ToastBody>
                            </Toast>
                        </Col>
                        <Col className="bg-docs-transparent-grid rounded p-3 my-2 shadow--hover" xs="4">
                            <Toast>
                                <ToastHeader>
                                    Arificial Intelligence/Machine learning
                                </ToastHeader>
                                <ToastBody>
                                    <img width='100%' height='100%' src="https://images.assetsdelivery.com/compings_v2/nexusby/nexusby1806/nexusby180600221.jpg" alt="Embedded Systems" />
                                </ToastBody>
                            </Toast>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="bg-docs-transparent-grid rounded p-3 my-2 shadow--hover" xs="4">
                            <Toast>
                                <ToastHeader>
                                    Data Science
                                </ToastHeader>
                                <ToastBody>
                                    <img width='100%' height='100%' src="https://images.assetsdelivery.com/compings_v2/grgroup/grgroup1709/grgroup170900870.jpg" alt="Embedded Systems" />
                                </ToastBody>
                            </Toast>
                        </Col>
                        <Col className="bg-docs-transparent-grid rounded p-3 my-2 shadow--hover" xs="4">
                            <Toast>
                                <ToastHeader>
                                    Desktop Application development
                                </ToastHeader>
                                <ToastBody>
                                    <img width='100%' height='100%' src="https://images.assetsdelivery.com/compings_v2/ahasoft2000/ahasoft20001603/ahasoft2000160303412.jpg" alt="Embedded Systems" />
                                </ToastBody>
                            </Toast>
                        </Col>
                        <Col className="bg-docs-transparent-grid rounded p-3 my-2 shadow--hover" xs="4">
                            <Toast>
                                <ToastHeader>
                                    Web Application development
                                </ToastHeader>
                                <ToastBody>
                                    <img width='100%' height='100%' src="https://images.assetsdelivery.com/compings_v2/coolvectorstock/coolvectorstock1811/coolvectorstock181106837.jpg" alt="Embedded Systems" />
                                </ToastBody>
                            </Toast>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Expertise;