import React, {  useEffect, useState } from 'react'
import RepoList from './components/RepoList'
import { IRepo } from './types/types'
import axios from 'axios'
// import Search from './components/Search'
import Pagination from './components/Pagination'
import './style/App.scss' 

const App = () => {
  const [repos, setRepos] = useState<IRepo[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [repoPerPage] = useState<number>(10)


  // Fetch Repos
  useEffect(() => {
    fetchRepos()
  }, [])

  async function fetchRepos() {
    try {
      const response = await axios.get<IRepo[]>(`https://api.github.com/repositories`)
      setRepos(response.data)
    } catch (e) {
      console.log(e);
    }
  }


  // Pagination
  const lastRepoIndex = currentPage * repoPerPage
  const firstRepoIndex = lastRepoIndex - repoPerPage
  const currentRepo = repos.slice(firstRepoIndex, lastRepoIndex)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className='container'>
      {/* <Search repos={repos} /> */}
      <RepoList repos={currentRepo} />
      <Pagination repoPerPage={repoPerPage} totalRepos={repos.length} paginate={paginate} />
    </div>
  )
}

export default App
