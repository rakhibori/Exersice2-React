import React, { Component } from 'react';
import axios from 'axios';
import '../styles/movies.scss';

const gen = []
class Movies extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            movies:[],
            search:'',
            searchResult:[],
            genre:[],
            showMode:'normal',
        }
    }


    componentDidMount(){
        this.requestData();
    }


    requestData = () => {
        axios.get('movies.json')
        .then((response) => this.setState({ movies: response.data}))

    }


    searchInputHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            showMode:'search'
        },() => {
            const films = []
            this.state.movies.map((movie) => (
                movie.Title.toLowerCase().includes(this.state.search.toLowerCase()) | movie.Title.toLowerCase() === this.state.search.toLowerCase() && 
                films.push(movie)
                )
            )       
            this.setState({
                searchResult:films
            })
        }
        
        )
    }

    
    
    genreMovieHandler = (event) => {
        
        this.setState({  
            showMode:'genre'
        })
        this.state.movies.forEach((movie) => {
            const genres = movie.Genre.split(",")
            for(let i=0; i<genres.length; i++) {
                if(genres[i].trim() === event.target.name && !(gen.includes(movie))) {
                    gen.push(movie)
                }
            }
        }) 
        this.setState({
            genre:gen
        })
    }


    render() { 
        const{search, showMode} = this.state;
        return (

            <div className='mainBoxes'>
                <div className='movieBox'>
                    {
                        showMode === 'normal' && 
                        this.state.movies.map((movie) =>(
                            <div key={movie.id} className='moveBox'>
                                <img src={movie.Poster} alt={movie.title}></img>
                                <h4>{movie.Title}</h4>
                                <h5>{movie.Director}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{movie.Year}</h5>
                                <h5>{movie.Genre}</h5>
                            </div>   
                        ))    
                    }     
                        
                        
                    {
                        showMode === 'search' && 
                        this.state.searchResult.map((movie) =>(
                            <div key={movie.id} className='moveBox'>
                                <img src={movie.Poster} alt={movie.title}></img>
                                <h4>{movie.Title}</h4>
                                <h5>{movie.Director}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{movie.Year}</h5>
                                <h5>{movie.Genre}</h5>
                            </div> 
                        ))
                    }    
                            
                        
                    {
                        showMode === 'genre' &&
                           this.state.genre.map((movie) =>(
                                <div key={movie.id} className='moveBox'>
                                    <img src={movie.Poster} alt={movie.title}></img>
                                    <h4>{movie.Title}</h4>
                                    <h5>{movie.Director}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{movie.Year}</h5>
                                    <h5>{movie.Genre}</h5>
                                </div> 
                            ))            
                    }

                </div>

    
                <div className='searchBox'>
                    <input type='text' name='search' value={search} onChange={this.searchInputHandler} placeholder='Search by movie title... '/>
                    <button onClick={this.genreMovieHandler} name='Documentary'>Documentary</button> 
                    <button onClick={this.genreMovieHandler} name='History'>History</button> 
                    <button onClick={this.genreMovieHandler} name='War'>War</button> 
                    <button onClick={this.genreMovieHandler} name='Action'>Action</button> 
                    <button onClick={this.genreMovieHandler} name='Crime'>Crime</button> 
                    <button onClick={this.genreMovieHandler} name='Drama'>Drama</button> 
                    <button onClick={this.genreMovieHandler} name='Comedy'>Comedy</button> 
                    <button onClick={this.genreMovieHandler} name='Biography'>Biography</button> 
                    <button onClick={this.genreMovieHandler} name='Family'>Family</button> 
                    <button onClick={this.genreMovieHandler} name='Romance'>Romance</button> 
                    <button onClick={this.genreMovieHandler} name='Thriller'>Thriller</button> 
                    <button onClick={this.genreMovieHandler} name='Mystery'>Mystery</button> 
                </div>
            </div>
        );
    }
}
 
export default Movies;