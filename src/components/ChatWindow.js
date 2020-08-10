import React from 'react';
import { connect } from 'react-redux';
import { Accordion, AccordionSummary, Typography, ListItem, List, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import { chatLayout } from '../actions/ClickMediaAction';
import { Modal } from 'react-bootstrap';
import ChatLayoutPage from './ChatLayoutPage';
class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    handleChat = (e) => {
        this.props.chatLayout(this.props.listItem, e);
        console.log(e.target.id);
        this.setState({ show: true });

    }
    handleClose = () => {
        this.setState({ show: false })
    }
    render() {
        return (
            <>
                <div style={{ width: 300, float: "right", margin: "400px 20px 5px 0" }}>
                    <Accordion style={{position:"absolute",bottom:"1px"}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{ color: "white", fontSize: "30px" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{ backgroundColor: "blue", color: "white" }}
                        >
                            <Avatar style={{ backgroundColor: "blue" }}>
                                <ModeCommentOutlinedIcon style={{ color: "white", fontSize: "30px" }} />
                            </Avatar>
                            <Typography style={{ fontSize: 20 }}>
                                Chat
                        </Typography>
                        </AccordionSummary>
                        <List style={{
                            position: 'relative',
                            overflowY: 'auto',
                            maxHeight: 300,
                        }}>
                            {this.props.listItem.map((item, index) => (
                                index === 0 || index === 2 || index === 3 || index === 7 || index === 8 || index === 10 ?
                                    <ListItem button onClick={() => { this.props.chatLayout(this.props.listItem, item.id); this.setState({ show: true }) }}>
                                        <ListItemAvatar>
                                            <Avatar style={{ backgroundColor: "blue[100]" }}>
                                                <img src={item.profilepicture}
                                                    alt="image1"
                                                    style={{ borderRadius: "100%", height: "40px", width: "40px", marginRight: "10px" }}
                                                />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={item.name} />
                                        <ListItemAvatar>
                                            <Avatar style={{ backgroundColor: "white" }}>
                                                <FiberManualRecordRoundedIcon style={{ color: "#2ECC71", fontSize: "20px" }} />
                                            </Avatar>
                                        </ListItemAvatar>
                                    </ListItem>
                                    :
                                    <ListItem button onClick={() => { this.props.chatLayout(this.props.listItem, item.id); this.setState({ show: true }) }}>
                                        <ListItemAvatar>
                                            <Avatar style={{ backgroundColor: "blue[100]" }}>
                                                <img src={item.profilepicture}
                                                    alt="image1"
                                                    style={{ borderRadius: "100%", height: "40px", width: "40px", marginRight: "10px" }}
                                                />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={item.name} />
                                        <ListItemAvatar>
                                            <Avatar style={{ backgroundColor: "white" }}>
                                                <FiberManualRecordRoundedIcon style={{ color: "grey", fontSize: "20px" }} />
                                            </Avatar>
                                        </ListItemAvatar>
                                    </ListItem>
                            ))}
                        </List>
                    </Accordion>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose} style={{top:"370px",display:"block",position:"sticky"}} size="sm" >
                    {
                        this.props.chatListItem.map((item) => (
                            <div>
                                <Modal.Header closeButton style={{ backgroundColor: "blue", color: "white", textAlign: "center" }}>
                                    <img src={item.profilepicture}
                                        alt="image1"
                                        style={{ borderRadius: "100%", height: "40px", width: "40px", marginRight: "10px" }}

                                    />
                                    <Modal.Title>{item.name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><ChatLayoutPage /></Modal.Body>
                            </div>
                        ))
                    }

                </Modal>
            </>
        );
    }
}
const mapStateToProps = (state) => ({
    listItem: state.clickMediaItem.list,
    chatListItem: state.clickMediaItem.chatListItem
})
export default connect(mapStateToProps, { chatLayout })(ChatWindow)