import React from 'react';
import {MovieItem} from '../movies/movie_item';

class WatchList extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchWatchList(this.props.currentUser);
  }

  render() {
    const watchList = this.props.state.watchList;
    const movieList = [];
    for (let [key, value] of Object.entries(watchList)) {
      movieList.push(
        
          <MovieItem
            key={value.id}
            movie={value}
            that={this}
            state={this.state}
          />
        
      )
    }  
    return (
      <div className='watchList'>
        <div className='watch-movies'>
          <ul className='movie-ul'>
            <div className='movie-lis'>
              {movieList}
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default WatchList;