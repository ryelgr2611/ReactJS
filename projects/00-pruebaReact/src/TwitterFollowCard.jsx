/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"

export function TwitterFollowCard ({children, userName}) {
    const [isFollowing,setIsFollowing]=useState(false)



    const text= isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName= isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button' 

    const handleClick=()=>
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/twitter/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button" onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}