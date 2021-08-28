import React from 'react'
import Repo from './Repo'

function ReposList() {

    return (
        <div className="repo">
            <p>ReposList</p>
            <ul>
                <li><Repo/></li>
                <li><Repo/></li>
                <li><Repo/></li>
                <li><Repo/></li>
            </ul>
        </div>
    )
}

export default ReposList
