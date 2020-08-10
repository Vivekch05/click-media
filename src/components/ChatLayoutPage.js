import React, { Component } from 'react'
import { connect } from 'react-redux';
import SendIcon from '@material-ui/icons/Send';
import { Avatar, Divider } from '@material-ui/core';
class ChatLayoutPage extends Component {
    render() {
        console.log(this.props.chatListItem);
        return (
            <>
            <div style={{
                width:"100%",
                overflow:"auto",
                backgroundColor:"white",
                height:"200px",
                padding:"5px",
                marginRight:"0px"
            }}>
                <div style={{width:"100%"}}>
                    <p style={{ backgroundColor: "#ECF0F1", padding: "10px",margin:"5px 120px 5px 0", color: "grey" }}> Hii Vivek ! </p>
                    <p style={{ backgroundColor: "#ECF0F1", padding: "10px",margin:"5px 120px 5px 0", color: "grey" }}>How are You? </p>
                </div>
                <div style={{width:"100%"}}>
                    <p style={{ backgroundColor: "#ECF0F1",margin:"5px 0 5px 120px", padding: "10px", color: "grey" }}> Hello Sam ! </p>
                    <p style={{ backgroundColor: "#ECF0F1",margin:"5px 0 5px 120px", padding: "10px", color: "grey" }}>I am fine ;) </p>
                    <p style={{ backgroundColor: "#ECF0F1",margin:"5px 0 5px 120px", padding: "10px", color: "grey"}}>What about You? </p>
                </div>
                </div>
                <div>
                    <Divider />
                    <Avatar style={{ backgroundColor: "white",float:"right", color: "blue", fontSize: 30 }}>
                        <SendIcon />
                    </Avatar>
                </div>
                </>
        )
    }
}
const mapStateToProps = (state) => ({
    chatListItem: state.clickMediaItem.chatListItem
})
export default connect(mapStateToProps)(ChatLayoutPage)
