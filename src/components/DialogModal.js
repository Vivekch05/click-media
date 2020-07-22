import React from 'react';
import { connect } from 'react-redux';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, DialogTitle, Dialog } from '@material-ui/core';
import { getProfile } from '../actions/ClickMediaAction';
import { Button } from 'react-bootstrap';
import { Divider } from '@material-ui/core';

class DialogModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    handleClick = () => {
        // this.props.history.push('/LandingPage');
    }
    render() {
        const { selectedValue, open, onClose, listItem, profileListItem } = this.props;
        const handleClose = () => {
            onClose(selectedValue);
        };
        const handleListItemClick = (value) => {
            onClose(value);
        };
        return (
            <div>
                <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} style={{ position: "relative", float: "right", margin: "80px 5px 0 0 " }}>
                    {
                        profileListItem.map((item) => (
                            <DialogTitle id="simple-dialog-title">
                                <img src={item.profilepicture}
                                    alt="image1"
                                    style={{ borderRadius: "100%", height: "100px", width: "100px", marginLeft: "40px" }}
                                />
                                <div style={{ textAlign: "center" }}>{item.name}</div>
                            </DialogTitle>
                        ))
                    }
                    <List>
                        {listItem.map((item, index) => (
                            index === 0 || index === 1 || index === 2 ?
                                <>
                                    <ListItem button onClick={() => { this.props.getProfile(this.props.listItem, item.id); handleListItemClick(item.email) }}>
                                        <ListItemAvatar>
                                            <Avatar style={{ backgroundColor: "blue[100]" }}>
                                                {/* <PersonIcon /> */}
                                                <img src={item.profilepicture}
                                                    alt="image1"
                                                    style={{ borderRadius: "100%", height: "40px", width: "40px", marginRight: "10px" }}
                                                />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary={item.email} />
                                    </ListItem>
                                    <Divider />
                                </>
                                : ""
                        ),
                        )}
                        <ListItem style={{ justifyContent: "center" }}>
                            <Button variant="danger" style={{ borderRadius: "30px", fontSize: "15px" }} onClick={this.handleClick}>Sign Out</Button>
                        </ListItem>
                    </List>
                </Dialog>
            </div >
        );
    }
}
const mapStateToProps = (state) => ({
    listItem: state.clickMediaItem.list
})
export default connect(mapStateToProps, { getProfile })(DialogModal)

