import React from 'react'

import style from './VideoComponent.module.css'


export default function VideoComponent({url, watched}) {
    return (
        <div className={style.videoContainer}>
            <iframe 
            src={url} 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen={true} />
            <span>Watched</span>
            <details>
                <summary>Watched</summary>
                <p>hello</p>
            </details>
        </div>
    )
}