import React from 'react'
import '../styles/Repo.css'

function Repo() {
    return (
        <div className = "repo">
           <div className="repo__avatar">
               img
           </div>
           <div className="repo__info">
               <div className="info__title">
                   title
               </div>
               <div className="info__description">
                   description
               </div>
               <div className="info__stats">
                   <div className="info__stats__numbers">
                       <div>stars</div>
                       <div>issues</div>
                   </div>
                   <div className="info__stats__timestamp">
                       timestamp
                   </div>
               </div>
           </div>

        </div>
    )
}

export default Repo
