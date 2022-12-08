import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

const Orders = () => {

    const stylesWhite = {
        theme:
            {
                backgroundColor: 'white',
                color: 'black'
            },
        onhover: 'hover_white',
        search: {backgroundColor: 'white', border: '1px solid gray', color: 'black'},
            svg_color: 'black'
    }

    return (
        <div>
            <Header changetheme={stylesWhite}/>
        <div style={{margin:'50px'}}>
            <p className={'menu_profile'} style={{color: 'black'}}><span className={'menu_profile'}>Main</span> / Profile</p>
            <div className={'row'}>
                <div className={'col'}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly',padding: '1vw', borderRadius: '10px', border: '1px solid black'}}>
                        <div style={{display: 'flex'}}>
                            <div className={'db'} style={{ display: 'flex', width:'60px', height: '60px', borderRadius:'50%',
                                backgroundColor: '#F1F4FA', color: 'blue',alignItems: 'center', justifyContent: 'space-around'}}>DB</div>
                            <div style={{display: "flex", flexDirection: 'column', justifyContent:'space-evenly', marginLeft: '10px'}}>
                                <p className={'client_name'}>Debbie Baker</p>
                                <p className={'grayfont'} style={{margin: '0'}}>Logout</p>
                            </div>
                        </div>
                        <hr style={{color: 'grey'}}/>
                        <div style={{display: 'flex' , justifyContent: "space-between"}}>
                            <p className={'grayfont'}>Email</p>
                            <a style={{color: '#2D74FF'}}>Edit</a>
                        </div>
                        <p> debbie-backer@gmail.com</p>
                        <p className={'grayfont'}>Phone</p><p>(603)555-0123</p>
                        <p className={'grayfont'}>Adress</p>
                        <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
                        <p className={'grayfont'}>Card</p><p>************2154</p>
                    </div>
                </div>

                <div className={'col'} style={{paddingLeft: '5vw', justifyContent: 'space-between'}}>

                        <div style={{width: '60vw', display:'flex', justifyContent: 'space-between',alignItems: 'center'}}>
                <p className={'orders'}>Orders</p>
                            <div>
                    <select style={{border: '1px solid rgba(0, 0, 0, 0.1)',
                        borderRadius: '10px', padding: '5px'}}>
                        <option>
                            All
                        </option>
                        <option>
                            T-shirts
                        </option>
                        <option>
                            Jackets
                        </option>
                    </select>
                            </div>
                    </div>

                <div style={{padding: '1vw', borderRadius: '10px', border: '1px solid black', marginBottom: '2vh'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex'}}>
                            <div>
                                <p>&#8470;3 - June 02, 2021</p>
                                <p className={'grayfont'}>Delivery: June 10, 2021</p>
                            </div>
                            <div>
                                <p className={'delivery_status'} style={{borderRadius: '20px', backgroundColor:'#F1F4FA', padding: '2px 10px'}}>On the way</p>
                            </div>
                        </div>
                        <div>
                            <p className={'coast'}>$150</p>
                            <p className={'grayfont'}>Pay by card</p>
                        </div>
                    </div>
                        <hr style={{color: 'grey'}}/>
                        <div style={{display: "flex", justifyContent: 'flex-start'}}>
                        <div style={{display: 'flex'}}>
                            <div>
                            <img alt={'purple t-shirt'} src={require('../assets/Order Examples/ImagePurple t-shirt.png')}/>
                            </div>
                            <ul className={'orderspec'}>
                                <li>#7114</li>
                                <li className={'productname'}>Basic t-shirt</li>
                                <li>Color: <span>Purple</span></li>
                                <li>Size: <span>L/14 US</span></li>
                                <li>Quantity: <span>1</span></li>
                            </ul>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div>
                            <img alt={'purple t-shirt'} src={require('../assets/Order Examples/ImageBlack t-shirt.png')}/>
                            </div>
                            <ul className={'orderspec'}>
                                <li>#7142</li>
                                <li className={'productname'}>Basic t-shirt</li>
                                <li>Color: <span>Black with print</span></li>
                                <li>Size: <span>L/14 US</span></li>
                                <li>Quantity: <span>1</span></li>
                            </ul>
                        </div>
                        </div>
                    </div>

                    <div style={{padding: '1vw', borderRadius: '10px', border: '1px solid black', marginBottom: '2vh'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{display: 'flex'}}>
                                <div>
                                    <p>&#8470;2 - June 02, 2021</p>
                                    <p className={'grayfont'}>Delivery: June 10, 2021</p>
                                </div>
                                <div>
                                    <p className={'delivery_status'} style={{borderRadius: '20px', background: 'rgba(144, 218, 26, 0.1)', color: '#90DA1A', padding: '2px 10px'}}>Done</p>
                                </div>
                            </div>
                            <div>
                                <p className={'coast'}>$35</p>
                                <p className={'grayfont'}>Pay by card</p>
                            </div>
                        </div>
                        <hr style={{color: 'grey'}}/>
                        <div style={{display: "flex", justifyContent: 'flex-start'}}>
                            <div style={{display: 'flex'}}>
                                <div>
                                    <img alt={'purple t-shirt'} src={require('../assets/Order Examples/ImageBrown Sweater.png')}/>
                                </div>
                                <ul className={'orderspec'}>
                                    <li>#7114</li>
                                    <li className={'productname'}>Sweater</li>
                                    <li>Color: <span>Brown</span></li>
                                    <li>Size: <span>L / 14 US</span></li>
                                    <li>Quantity: <span>1</span></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div style={{padding: '1vw', borderRadius: '10px', border: '1px solid black', marginBottom: '2vh'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{display: 'flex'}}>
                                <div>
                                    <p>&#8470;1 - June 02, 2021</p>
                                    <p className={'grayfont'}>Delivery: June 10, 2021</p>
                                </div>
                                <div>
                                    <p className={'delivery_status'} style={{borderRadius: '20px', background: 'rgba(255, 78, 78, 0.1)', color: '#FF4E4E', backgroundColor:'#F1F4FA', padding: '2px 10px'}}>Canceled</p>
                                </div>
                            </div>
                            <div>
                                <p className={'coast'}>$78</p>
                                <p className={'grayfont'}>Pay by card</p>
                            </div>
                        </div>
                        <hr style={{color: 'grey'}}/>
                        <div style={{display: "flex", justifyContent: 'flex-start'}}>
                            <div style={{display: 'flex'}}>
                                <div>
                                    <img alt={'purple t-shirt'} src={require('../assets/Order Examples/ImageYellow Jacket.png')}/>
                                </div>
                                <ul className={'orderspec'}>
                                    <li>#7114</li>
                                    <li className={'productname'}>Jacket</li>
                                    <li>Color: <span>Yellow</span></li>
                                    <li>Size: <span>L / 14 US</span></li>
                                    <li>Quantity: <span>1</span></li>
                                </ul>
                            </div>
                            <div style={{display: 'flex'}}>
                                <div>
                                    <img alt={'purple t-shirt'} src={require('../assets/Order Examples/ImageBlack Jacket.png')}/>
                                </div>
                                <ul className={'orderspec'}>
                                    <li>#7142</li>
                                    <li className={'productname'}>Jacket</li>
                                    <li>Color: <span>Black with print</span></li>
                                    <li>Size: <span>L / 14 US</span></li>
                                    <li>Quantity: <span>1</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
            <Footer/>
        </div>
    );
};

export default Orders;