import {useState, useEffect, Fragment} from 'react'
import Repo from './Repo'
import '../styles/ReposList.css'
import fetchRepos from '../utils/api'
import InfiniteScroll from "react-infinite-scroll-component";

function ReposList() {

    let [pageNum, setPageNum] = useState(1)
    const [repos, setRepos] =  useState([])

    const fetchMoreRepos = async function () {
        console.log('fetching...')
        const request = await fetchRepos(pageNum);
        setRepos(repos.concat(request.data.items));
        setPageNum(pageNum+1)
    }

    useEffect(() => {
        async function fetchData() {
            const request = await fetchRepos(pageNum);
            console.log(request)
            setRepos(request.data.items);
            setPageNum(pageNum+1)
        }
        fetchData();
    }, [])
 
    return (
        <Fragment>
            <div
                id="reposList" 
                style={{ height: "300", overflow: "auto" }}
                className='repos-list'
            >
                <InfiniteScroll
                dataLength={repos.length}
                next={fetchMoreRepos}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                scrollableTarget="reposList"
                >
                    {repos && repos.map(repo => (
                        <Repo 
                        id={repo.id}
                        key={repo.id}
                        title={repo.name}
                        author={repo.owner.login}
                        avatar={repo.owner.avatar_url}
                        description={repo.description}
                        timestamp={repo.created_at}
                        issues={repo.open_issues_count}
                        stars={repo.stargazers_count}
                        repoLink={repo.html_url}
                        ownerLink={repo.owner.html_url}
                        />
                    ))}
                </InfiniteScroll>
            </div>
        </Fragment>
    )
}

export default ReposList
