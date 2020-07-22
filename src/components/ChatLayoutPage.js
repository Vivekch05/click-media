import React, { Component } from 'react'
import { connect } from 'react-redux';
import SendIcon from '@material-ui/icons/Send';
import { Avatar, Divider } from '@material-ui/core';
class ChatLayoutPage extends Component {
    render() {
        console.log(this.props.chatListItem);
        return (
            <div style={{
                maxHeight: 280,
                overflow:"auto",
                position:"relative",
            }}>
                <div style={{ float: "left" }}>
                    <p style={{ backgroundColor: "#ECF0F1", textAlign: "center", padding: "10px", color: "grey" }}> Hii Vivek ! </p>
                    <p style={{ backgroundColor: "#ECF0F1", textAlign: "center", padding: "10px", color: "grey" }}>How are You? </p>
                </div>
                <div style={{ float: "right", marginTop: "80px" }}>
                    <p style={{ backgroundColor: "#ECF0F1", textAlign: "center", padding: "10px", color: "grey" }}> Hello Sam ! </p>
                    <p style={{ backgroundColor: "#ECF0F1", textAlign: "center", padding: "10px", color: "grey" }}>I am fine ;) </p>
                    <p style={{ backgroundColor: "#ECF0F1", textAlign: "center", padding: "10px", color: "grey", marginBottom: "50px" }}>What about You? </p>
                </div>
                <div style={{ marginTop: "250px", position: "absolute" }}>
                    <Divider />
                    <Avatar style={{ backgroundColor: "white", marginLeft: "420px", color: "blue", fontSize: 30 }}>
                        <SendIcon />
                    </Avatar>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    chatListItem: state.clickMediaItem.chatListItem
})
export default connect(mapStateToProps)(ChatLayoutPage)
