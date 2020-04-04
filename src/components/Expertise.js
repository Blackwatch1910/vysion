import React from 'react';
import {
    Container, Row, Col,
    Toast, ToastBody, ToastHeader
} from 'reactstrap';

class Expertise extends React.Component {
    constructor() {
        super()
        this.state = {
            mouse: 0,
        }
    }

    handleMouseEnter = (e) => {
        this.setState({
            mouse: e.target - 10,
        });
    }

    render() {
        return (
            <div className="Container">
                <br />
                <h1 className="text-center"><u>Our</u> <b>Expertise</b></h1>

                <Container>
                    <Row>
                        <Col onMouseEnter={this.handleMouseEnter} className="bg-docs-transparent-grid rounded p-3 my-2" xs="4">
                            <Toast>
                                <ToastHeader>
                                    Application development
                                </ToastHeader>
                                <ToastBody>
                                    This is App development description!
                                </ToastBody>
                            </Toast>
                        </Col>
                        <Col className="bg-docs-transparent-grid rounded p-3 my-2" xs="4">
                            <Toast>
                                <ToastHeader>
                                    Application development
                                </ToastHeader>
                                <ToastBody>
                                    This is App development description!
                                </ToastBody>
                            </Toast>
                        </Col>
                        <Col className="bg-docs-transparent-grid rounded p-3 my-2" xs="4">
                            <Toast>
                                <ToastHeader>
                                    Application development
                                </ToastHeader>
                                <ToastBody>
                                    This is App development description!
                                </ToastBody>
                            </Toast>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="bg-docs-transparent-grid rounded p-3 my-2" xs="4">
                            <Toast>
                                <ToastHeader>
                                    Web development
                                </ToastHeader>
                                <ToastBody>
                                    This is Web development description!
                                </ToastBody>
                            </Toast>
                        </Col>
                        <Col className="bg-docs-transparent-grid rounded p-3 my-2" xs="4">
                            <Toast>
                                <ToastHeader>
                                    Web development
                                </ToastHeader>
                                <ToastBody>
                                    This is Web development description!
                                </ToastBody>
                            </Toast>
                        </Col>
                        <Col className="bg-docs-transparent-grid rounded p-3 my-2" xs="4">
                            <Toast>
                                <ToastHeader>
                                    Web development
                                </ToastHeader>
                                <ToastBody>
                                    This is Web development description!
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