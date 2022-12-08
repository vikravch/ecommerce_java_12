import React from 'react';

const Subscribe = () => {
    return (
        <div className={'sub'}>
            <div style={{backgroundColor: '#2D74FF', width: '50vw', padding: '10vh', color: 'white'}}>
                <p className={'letter'}>Newsletter</p>
                <p className={'subtittle'}>Subscribe and get info about new releases first</p>
                <div style={{display:'flex'}}>
                <input className={'inputMail'}/>
                <button className={'btn btn-dark'}>Subscribe</button>
            </div>
            </div>
            <div style={{width: '50vw'}}>
                <img alt={'whiteshoes'} src={require('../assets/subshoes.png')}/>
            </div>
        </div>
    );
};

export default Subscribe;