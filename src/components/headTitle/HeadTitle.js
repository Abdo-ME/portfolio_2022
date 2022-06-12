import React from 'react'
import './headTitle.css'
const HeadTitle = ({ title1, title2, bodyTxt, btnTxt, assets }) => {
    return (
        <>
            <div className="i-name">
                <span>{title1} </span>
                <span>{title2} </span>
                <span>{bodyTxt} </span>
            </div>
            {assets
                ? (
                    <a href={assets} download className='button i-button' target='_blank' rel="noopener noreferrer">{btnTxt} </a>
                )
                : (
                    <button className='button i-button' >{btnTxt} </button>
                )}

        </>

    )
}

export default HeadTitle