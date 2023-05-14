import * as React from 'react'
// @ts-expect-error
import style from './VideoContainer.module.scss'
import Collapsible from 'react-collapsible';

function Chip({ label }) {
    return (
      <span className={style.chip}>
         {label}
      </span>
   );
}

function Summary({video}) {
   return (
      <div className={style.videoContainer}>
         <iframe
         src={video.url} 
         title="YouTube video player"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowFullScreen={true} />
         <div className={style.chipContainer}>
            {video.watched && <Chip label="Watched" />}
            {video.tags.map((tag) => <Chip label={tag} />)}
         </div>
      </div>
   )
}

export default function VideoComponent({video}) {
  return (
    <Collapsible trigger={<Summary video={video} />} transitionTime={200} easing='ease' triggerDisabled={!video.summary}>
      {video.summary}
    </Collapsible>
  )
}