import React, { Suspense } from 'react';
import FilmStrip from "../components/filmStrip";
import "../styles/Team.scss";
const LazyLoadedTeamGrid = React.lazy(() => import('../components/teamGrid'));

class Team extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render () {
    return (
      <div className="team-page">
        <FilmStrip />
        <Suspense fallback={<div>Loading...</div>}>
          <LazyLoadedTeamGrid />
        </Suspense>
      </div>
    )
  }
}

export default Team;