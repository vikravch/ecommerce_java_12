import React from 'react';

const Categories = () => {
    return (
        <div style={{margin: '60px'}}>

            <p className={'arrival'}>Categories</p>

            <div className={'container-fluid'}>


                <div className={'row'}>
                    <div className={'col'}>
                        <img style={{borderRadius: '10px'}} alt={'Men Category'} src={require('../assets/CategoryImages/imageCat1.png')}/>
                    </div>


                <div className={'col'}>
                    <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div>
                        <img style={{borderRadius: '10px'}} alt={'Men Category'} src={require('../assets/CategoryImages/imagecat2.png')}/>
                    </div>
                    <div>
                        <img style={{borderRadius: '10px'}} alt={'Men Category'} src={require('../assets/CategoryImages/imagecat3.png')}/>
                    </div>
                    </div>
                    </div>
                    <div className={'col'}>
                        <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div>
                        <img style={{borderRadius: '10px'}} alt={'Men Category'} src={require('../assets/CategoryImages/imagecat4.png')}/>
                    </div>
                    <div>
                        <img style={{borderRadius: '10px'}} alt={'Men Category'} src={require('../assets/CategoryImages/imagecat5.png')}/>
                    </div>
                        </div>
                        </div>


                </div>


                </div>

        </div>
    );
};

export default Categories;