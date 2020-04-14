import React, { useState } from 'react';
import { Container, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const Stack = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Container className="themed-container" fluid={true}>
            <h1 className="display-1 text-center">Tools and Tech Stack</h1>
            <Nav tabs >
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Android
                        </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Web
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <h4>Web Contents</h4>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col className="shadow" sm="2">
                            <img className="card-lift--hover" src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png" alt="React" />
                        </Col>
                        <Col sm="2">
                            <img className="card-lift--hover" src="https://cdn-wp.weshareapps.com/wp-content/uploads/2018/12/24133230/1532688925410-angularprogressivewebappguide-icon-192x192-256x256.png.webp" alt="Angular" />
                        </Col>
                        <Col sm="2">
                            <img className="card-lift--hover" src="https://a.storyblok.com/f/79165/256x256/a13b5c8358/vue.png" alt="Vue" />
                        </Col>
                        <Col sm="2">
                            <img className="card-lift--hover" src="https://ps.w.org/scss-library/assets/icon-256x256.png?rev=2148114" alt="Sass" />
                        </Col>
                        <Col sm="2">
                            <img className="card-lift--hover" src="https://i.ya-webdesign.com/images/bootstrap-svg-13.png" alt="Bootstrap" />
                        </Col>
                        <Col sm="2">
                            <img className="card-lift--hover" src="https://cdn.iconscout.com/icon/free/png-256/php-27-226042.png" alt="php" />
                        </Col>
                    </Row>
                    <Row>
                    <Col sm="3" className="text-center">
                            <img className="card-lift--hover" src="https://vectorified.com/images/python-icon-2.png" alt="lahidas" />
                        </Col>
                        <Col sm="3">
                            <img className="card-lift--hover" src="https://lh3.googleusercontent.com/proxy/tYY3YcvwU-1SN4Bs1nOjl27EdpHLs0vFcIa6nRbf6_zXkzjYGXZ9L8BZZzArMVEiFQVMHmJfBZv0lXwPhN_OchhPqabmOe2t-_omd7YkH6aQyA" alt="lahidas" />
                        </Col>
                        <Col sm="3">
                            <img className="card-lift--hover" src="https://www.iihglobal.com/wp-content/uploads/2019/07/laravel-web-development-256x256.jpg" alt="laravel" />
                        </Col>
                        <Col sm="3">
                            <img className="card-lift--hover" src="https://www.shareicon.net/data/256x256/2015/10/06/112698_development_512x512.png" alt="lahidas" />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </Container>
    )
}

export default Stack;