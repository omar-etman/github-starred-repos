import React from 'react'
import '../styles/Repo.css'

function Repo(props) {

    const {title, owner, avatar, description, timestamp, issues, stars, repoLink, ownerLink } = props

    return (
        <div className = "repo" href={repoLink}>
           <div className="repo__avatar" href={ownerLink}>
                <img
                    src={avatar}
                    alt={`Avatar of ${owner}`}
                    className = 'avatar'
                />
           </div>
           <div className="repo__info">
               <div className="info__title">
                   {title}
               </div>
               <div className="info__description">
                    {description}
               </div>
               <div className="info__stats">
                   <div className="info__stats__numbers">
                        <div className="stats__numbers__stars">
                           {stars}
                        </div>
                        <div className="stats__numbers__issues">
                           {issues}
                        </div>
                   </div>
                   <div className="info__stats__timestamp">
                       {`submitted ${timestamp} ago by ${owner}`}
                   </div>
               </div>
           </div>

        </div>
    )
}

export default Repo
