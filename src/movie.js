/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Review from './review';
import Cast from './cast'
// eslint-disable-next-line no-unused-vars
class Movie extends Component {
  render() {
    const movieCast = this.props.movie.cast
        // const actors = castDetails.map(actor => <Cast actor={actor} />)
        const actorCast = movieCast.map((actor)=> {
          return  <Cast actor = {actor} />;
        });
    return (
      <div>
         <h2>{'Title: '+this.props.movie.title}</h2>
      {/* <h2>The Lord of the Rings: the fellowship of the ring</h2> */}
      {/* <img src="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg
https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg
" />  */}
  <img src={this.props.movie.poster} /> 
      <div>Rating:  <strong> {this.props.movie.rating} </strong></div>
      <h2>{'Director: ' +this.props.movie.director}</h2>
      <p>
{'Description: '  +this.props.movie.description}
      </p>
      <Review />
     <h3> Movie's Cast:</h3> <p>{actorCast}</p>
                    
              
            
      </div>
    );
  }
}

export default Movie;
