import React, { Component } from 'react';
import { getList, getProfile } from '../actions/ClickMediaAction';
import { connect } from 'react-redux';
import HomePage from './HomePage';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Divider, Typography, List } from '@material-ui/core';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    componentDidMount() {
        this.props.getList();
    }
    render() {
        return (
            <>
                {
                    this.props.listItem.length !== 0 ?
                        <div>
                            {
                                this.state.show !== true ?
                                    <div style={{ margin: "100px auto", border: "1px solid white", borderRadius: "15px", maxWidth: 720 }} className="container">
                                        <Typography style={{ textAlign: "center", color: "grey", fontSize: "25px", padding: "40px", backgroundColor: "#F4F6F7 ", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}>
                                            Select an account</Typography>
                                        <List style={{
                                            position: 'relative',
                                            overflow: 'auto',
                                            maxHeight: 400,
                                        }}>
                                            {
                                                this.props.listItem.map((item =>
                                                    <div>
                                                        <ListItem button onClick={() => { this.props.getProfile(this.props.listItem, item.id); this.setState({ show: true }); }}>
                                                            <ListItemAvatar>
                                                                <Avatar style={{ backgroundColor: "white" }}>
                                                                    {/* <PersonIcon /> */}
                                                                    <img src={item.profilepicture}
                                                                        alt="image1"
                                                                        style={{ borderRadius: "100%", height: "40px", width: "40px", marginRight: "10px" }}
                                                                    />
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                            <ListItemText primary={item.name} />
                                                        </ListItem>
                                                        <Divider />
                                                    </div>
                                                )

                                                )}
                                        </List>

                                    </div> :
                                    <HomePage />
                            }
                        </div>
                        :
                        <div className="text-center">
                            <div className="spinner-border text-info" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                }
            </>


        )
    }
}
const mapStateToProps = (state) => ({
    listItem: state.clickMediaItem.list
});

export default connect(mapStateToProps, { getList, getProfile })(LandingPage);
