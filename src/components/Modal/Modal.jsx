import React from 'react';
import './Modal.css'

const Modal = ({modalData,setModal}) => {
  const {flag,name,capital,region,population}=modalData
  return (
    <div className='modal-card'>
        <div className="country-image"><img src={flag} alt="country-flag" /></div>
        <div className="country-details">
            <h3>Name:<span className='value-name'>{name}</span></h3>
            <h3>Capital:<span className='value-name'>{capital}</span></h3>
            <h3>Region:<span className='value-name'>{region}</span></h3>
            <h3>Population:<span className='value-name'>{population}</span></h3>
            <button onClick={()=>{setModal(false)}}>Close</button>
        </div>
        
    </div>
  )
}

export default Modal