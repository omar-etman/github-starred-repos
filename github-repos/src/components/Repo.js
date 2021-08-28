import React from 'react'
import '../styles/Repo.css'
import TimeAgo from 'timeago-react';
import { ReactComponent as Star } from '../star.svg' 
function Repo(props) {

    const {title, author, avatar, description, timestamp, issues, stars, repoLink, ownerLink } = props

    return (
        <div className = "repo">
           <div className="repo__avatar">
               <a href={ownerLink}>
                    <img
                        src={avatar}
                        alt={`Avatar of ${author}`}
                        className = 'avatar'
                    />
               </a>
           </div>
           <div className="repo__info">
               <a
                href={repoLink} 
                className="info__title">
                   {title}
               </a>
               <div className="info__description">
                    {description}
               </div>
               <div className="info__stats">
                   <div className="info__stats__numbers">
                        <div className="stats__numbers__stars">
                           {stars} 
                        <Star className="stars__icon"/>
                        </div>
                        <div className="stats__numbers__issues">
                           {issues} issues
                        </div>
                   </div>
                   <div className="info__stats__timestamp">
                       submitted <TimeAgo datetime={timestamp}/> by <a href={ownerLink}>{author}</a>
                   </div>
               </div>
           </div>

        </div>
    )
}

export default Repo
