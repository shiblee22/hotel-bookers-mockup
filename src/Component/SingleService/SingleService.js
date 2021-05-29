import React from 'react';
import './SingleService.css'
import { connect } from 'react-redux';

const SingleService = (props) => {
    const { name, description, price, img } = props.service;
    const { userInfo } = props;

    const confirmBook = () => {
        if (userInfo.email) {
            alert(`Congrats! Your booking is confirmed.
                    Name : ${userInfo.name}
                    Email: ${userInfo.email}
                    Hotel Name: ${name}
                    Charge: ${price}
        `)
        }  else {
            alert('Please, Login first to confirm your booking');
        }
    }
    return (
        <div>
            <div class="part">
                <div class="card mb-3" style={{ maxWidth: '500px', padding: '10px' }}>
                    <div class="row no-gutters">
                        <div class="col-md-8">
                            <img style={{
                                border: '3px solid black',
                                borderRadius: '5px',
                            }} src={img} class="card-img" alt="..." />
                            <p class="card-text">{description}</p>
                        </div>
                        <div class="col-md-4">
                            <div class="card-body">
                                <h5 class="card-title">{name}</h5>
                                <br />
                                <br />
                                <br />
                                <div style={{ float: 'inline-start' }}>
                                    <h2>${price}</h2>
                                    <button class="btn btn-success" onClick={confirmBook}>Book Now</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isSignin: state.isSignin,
        userInfo: state.userInfo
    }
}

export default connect(mapStateToProps)(SingleService);