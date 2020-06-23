import React from 'react';
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';


const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) => (
    // React actually gives every Html markup elements another property called style
    // Style takes an object that has pop values equals to css values u wanna apply to 
    // this elements
    <div className={`${size} menu-item`} 
    onClick={()=>history.push(`${match.url}${linkUrl}`)}
    >
        <div className='background-image'    
            style={{
            backgroundImage: `url(${imageUrl})`
        }} 
        />
    
    
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtititle'>SHOP NOW</span>
                </div>
            </div>
)
export default withRouter(MenuItem)
