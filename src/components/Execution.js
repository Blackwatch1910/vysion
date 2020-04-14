import React from 'react';
import { Container, Table, Button, UncontrolledTooltip } from 'reactstrap';

class Execution extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center display-3">Our Execution Process</h1>
                <Container>
                    <Table striped hover rounded>
                        <tbody>
                            <tr className="text-center">
                                <td>
                                    <Button
                                        className="btn-white"
                                        color="default"
                                        data-placement="left"
                                        id="tooltip297043631"
                                        size="sm"
                                        type="button"
                                    >
                                        Step 1
                                    </Button>
                                    <UncontrolledTooltip
                                        delay={0}
                                        placement="left"
                                        target="tooltip297043631"
                                    >
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </UncontrolledTooltip></td>
                            </tr>
                            <tr className="text-center">
                                <td>
                                    <Button
                                        className="btn-white"
                                        color="default"
                                        data-placement="right"
                                        id="tooltip159654437"
                                        size="sm"
                                        type="button"
                                    >
                                        Step 2
                                    </Button>
                                    <UncontrolledTooltip
                                        delay={0}
                                        placement="right"
                                        target="tooltip159654437"
                                    >
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </UncontrolledTooltip>
                                </td>
                            </tr>
                            <tr className="text-center">
                                <td>
                                    <Button
                                        className="btn-white"
                                        color="default"
                                        data-placement="left"
                                        id="tooltip297043631"
                                        size="sm"
                                        type="button"
                                    >
                                        Step 3
                                    </Button>
                                    <UncontrolledTooltip
                                        delay={0}
                                        placement="left"
                                        target="tooltip297043631"
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </UncontrolledTooltip></td>
                            </tr>
                            <tr className="text-center">
                                <td>
                                    <Button
                                        className="btn-white"
                                        color="default"
                                        data-placement="right"
                                        id="tooltip159654437"
                                        size="sm"
                                        type="button"
                                    >
                                        Step 4
                                    </Button>
                                    <UncontrolledTooltip
                                        delay={0}
                                        placement="right"
                                        target="tooltip159654437"
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </UncontrolledTooltip>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>

            </div>
        )
    }
}

export default Execution;