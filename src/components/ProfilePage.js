import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import SimpleMap from './SimpleMap';
import Dialog from './Dialog';
import ChatWindow from './ChatWindow';
class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleProfile = () => {
        this.setState({ show: true })
    }


    render() {
        console.log(this.props.profileListItem);
        return (
            <div style={{ maxWidth: "100%", height: "auto", margin: "20px" }}>

                {
                    this.props.profileListItem.map((item) =>
                        <div>
                            <div style={{ marginTop: "50px" }}>
                                <span style={{ fontSize: "20px", fontWeight: "bold" }}>Profile</span>
                                <span >
                                    <span style={{ float: "right", marginTop: "-20px" }}>
                                        <Dialog profile={item.profilepicture} name={item.name} />
                                    </span>
                                </span>
                            </div>
                            <Row style={{ marginTop: "30px", paddingTop: "50px", borderTop: "1px solid grey", display: "flex", flexWrap: "wrap" }}>
                                <Col md={4} style={{ borderRight: "1px solid black" }}>
                                    <div style={{ textAlign: "center" }}>
                                        <img src={item.profilepicture}
                                            alt="image1"
                                            style={{ borderRadius: "100%", height: "150px", width: "150px" }}
                                        />
                                        <h3>{item.name}</h3>
                                    </div>
                                    <Row style={{ display: "flex", flexWrap: "nowrap" }}>
                                        <Col md={4} align="justify" style={{ color: "grey", fontSize: "15px" }}>
                                            <label>User Name</label><br />
                                            <label>E-mail</label><br />
                                            <label>Phone</label><br />
                                            <label>Website</label><br />
                                        </Col>
                                        <Col md={8} align="justify">
                                            <label>{item.username}</label><br />
                                            <label>{item.email}</label><br />
                                            <label>{item.phone}</label><br />
                                            <label>{item.website}</label><br />
                                        </Col>
                                    </Row>
                                    <hr />
                                    <p style={{ textAlign: "center", fontSize: "25px", fontWeight: "bold" }}>Company</p>
                                    <Row style={{ display: "flex", flexWrap: "nowrap" }}>
                                        <Col md={4} align="justify" style={{ color: "grey", fontSize: "15px" }}>
                                            <label>Name</label><br />
                                            <label>CatchPhrase</label><br />
                                            <label>Bs</label>
                                        </Col>
                                        <Col md={8} align="justify">
                                            <label>{item.company.name}</label><br />
                                            <label>{item.company.catchPhrase}</label><br />
                                            <label>{item.company.bs}</label>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={8} style={{ marginTop: "20px" }}>
                                    <p style={{ color: "grey", fontSize: "20px" }}>Address</p>
                                    <Row style={{ display: "flex", flexWrap: "nowrap" }}>
                                        <Col md={4} align="justify" style={{ color: "grey", fontSize: "15px" }}>
                                            <label>Street</label><br />
                                            <label>Suite</label><br />
                                            <label>City</label><br />
                                            <label>ZipCode</label>

                                        </Col>
                                        <Col md={8} align="justify">
                                            <label>{item.address.street}</label><br />
                                            <label>{item.address.suite}</label><br />
                                            <label>{item.address.city}</label><br />
                                            <label>{item.address.zipcode}</label>

                                        </Col>
                                    </Row>
                                    <div>
                                        <SimpleMap lat={item.address.geo.lat} lng={item.address.geo.lng} />
                                    </div>

                                    <div>
                                        <ChatWindow />
                                    </div>

                                </Col>
                            </Row>
                        </div>
                    )
                }

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    profileListItem: state.clickMediaItem.profileList
})
export default connect(mapStateToProps)(ProfilePage)
