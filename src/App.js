import React from 'react';
import logo from './logo.svg';
import './App.css';


  function userCard(props){

    let info =(
      <div>
        <span>{props.user.name.first}</span> 
        {''}
        <span>{props.user.name.last}</span>
      </div>
    )

    return (
      <div style={{marginBottom:'40px'}}>
        <img   src={props.user.picture.large}></img>
        <div>
          {props.hide===false ? info : null}
        </div>  
        <button onClick={props.onClick}>Hide Details</button>
      </div>
    );
  }

  class App extends Component{
    constructor(props) {
      super(props);
      this.state = {
        result:[],
        isHidden:true
      };
    }
    componentDidMount() {
      fetch('https://randomuser.me/api?results=25')
        .then((res)=>{
            return res.json()
        })
        .then((json)=> {
          this.setState({
            results:json.results
          })
        })
    }

    onClick=(event) => {
      this.setState({
        isHidden:false
      });
    }

    render() {
      return (
        <div className="App">
          {this.state.results.map((users, index) =>
          <userCard
            key ={index} 
            users={user}
            onClick={this.onClick}
            hide={this.state.isHidden}
          />
      )}
        </div>
    );
  }
}

export default App;
