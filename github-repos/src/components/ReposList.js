import {useState, useEffect, Fragment} from 'react'
import Repo from './Repo'
import fetchRepos from '../utils/api'
import InfiniteScroll from "react-infinite-scroll-component";

function ReposList() {

    let [pageNum, setPageNum] = useState(1)
    const [repos, setRepos] =  useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await fetchRepos(pageNum);
            console.log(request)
            setRepos(request.data.items);
            setPageNum(pageNum+1)
        }
        fetchData();
    }, [])

    const fetchMoreRepos = async function () {
        console.log('fetching...')
        const request = await fetchRepos(pageNum);
        setRepos(repos.concat(request.data.items));
        setPageNum(pageNum+1)
    }
 
    return (
        <Fragment>
            <ul
                id="reposList" 
                style={{ height: "300", overflow: "auto" }}
                className='repos-list'
            >
                <InfiniteScroll
                dataLength={repos.length}
                next={fetchMoreRepos}
                hasMore={pageNum < 11}
                loader={<h4>Loading...</h4>}
                scrollableTarget="reposList"
                >
                    {repos && repos.map(repo => (
                        <li>
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
                            repoLink={repo.git_url}
                            ownerLink={repo.owner.url}
                            />
                        </li>
                    ))}
                </InfiniteScroll>
                <li><Repo/></li>
            </ul>
        </Fragment>
    )
}

export default ReposList
