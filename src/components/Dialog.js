import React, { Component } from 'react'
import { connect } from 'react-redux';
import DialogModal from './DialogModal';
class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selectedValue: this.props.profileListItem.map((item) => item.email)
        }
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    handleClose = (value) => {
        this.setState({ open: false });
        this.setState({ selectedValue: value });
    };
    render() {
        return (
            <div>
                {
                    this.props.profileListItem.map((item) => (
                        <div>
                            <br />
                            <span onClick={this.handleClickOpen}>
                                <img src={item.profilepicture}
                                    alt="image1"
                                    style={{ borderRadius: "100%", height: "40px", width: "40px", marginRight: "10px" }}
                                />&nbsp;{item.name}</span>
                            <DialogModal selectedValue={this.state.selectedValue} open={this.state.open} onClose={this.handleClose} profileListItem={this.props.profileListItem} />
                        </div>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profileListItem: state.clickMediaItem.profileList,
})
export default connect(mapStateToProps)(Dialog)