import { useEffect, useState } from "react"

function Projects() {
  let [repos, setRepos] = useState([]) as any[]

  useEffect(() => {
    function fetchProjects() {
      fetch("https://api.github.com/users/m-ezzy/repos")
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setRepos(data)
        })
    }
    fetchProjects()
  }, [])

  let reposItems = repos.map((repo: any) => (
    <div className="projects-item">
      <a href={repo.html_url}>{repo.name}</a>
      <div className="description">{repo.description}</div>
      <div className="date">last updated on: {new Date(repo.updated_at).toLocaleDateString()}</div>
    </div>
  ))

  return (
    <div className="teleport page projects">
      <div className="color31 content">
        <code>{"<Projects>"}</code>
        <div className="projects-list">
          {reposItems}
        </div>
        <code>{"</Projects>"}</code>
      </div>
    	<div className="color32"></div>
      <div className="color33"></div>
      <div className="color34"></div>
      <div className="color35"></div>
    </div>
  )
}

export default Projects
