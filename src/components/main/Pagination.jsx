import React from 'react'
import './main.css'
const Pagination = ({countryLength,postPerPage,pagination}) => {
    let pageNumbers=[]
    for(let i=1;i<= Math.ceil(countryLength/postPerPage);i++){
        pageNumbers.push(i)
    }
  return (
    <div className='pagination'>
        {
            pageNumbers.map((num)=>{
                return(
                    <button onClick={()=>pagination(num)}>{num}</button>
                )
            })
        }
    </div>
  )
}

export default Pagination