import React, { Component } from 'react';
import Card from '../components/Card/Card';

//retreive the data. 
class List extends Component {
    constructor(){
    super()
    this.state={
        data:[],
        loading:true,
    };
} 
//fetch the data after the List component is mounted. replace empty array(from constructor) with the movie info
async componentDidMount(){
    const movies = await frtch('../..assets/data.json');
    const moviesJSON = await movies.json();
    if (moviesJSON){
        this.setState({
            data: moviesJSON,
            loading:false,
        });
    }
}
//pass the state to the Card component
        render() {
    const {data, loading} = this.state;
    if(loading){
        return <div>Loading...</div>
    }
    return data.map(movie => <Card key={movie.id} movie={movie} />);
}
};

export default List;