import React, { Component } from 'react';
import { Card, CardTitle } from 'react-mdl';
import image1 from '../images/img1.jpg';
import image2 from '../images/img2.jpg';
import image3 from '../images/img3.png';
import image4 from '../images/img4.jpg';
import image5 from '../images/img5.jpg';
import image6 from '../images/img6.jpg';
import image7 from '../images/img7.jpg';
import image8 from '../images/img8.jpg';
import image9 from '../images/img9.jpg';
export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [image1, image2, image3, image4, image5, image6, image7, image8, image9]
        }
    }
    render() {
        return (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    this.state.images.map((item) => {
                        return (

                            <Card style={{ border: "2px solid black", borderRadius: "10px", margin: 'auto', marginTop: "30px" }}>
                                <CardTitle style={{
                                    color: 'black', height: '250px', background:
                                        `url(${item}) center/cover`
                                }}>
                                </CardTitle>
                            </Card>


                        )
                    })
                }
            </div>
        );
    }
}

