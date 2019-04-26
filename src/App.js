import React, { Component } from 'react';

class App extends Component {
  state = {
    newData: []
  }
  componentDidMount() {
    fetch(`http://localhost:5500/api/v1/lrtlive`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ newData: data.tvprog.items })
      console.log(this.state.newData)
    })
    .catch(console.log)
  }
  render() {

    return (
       <div className="container">
        <div className="col-xs-12">
        <h1>LRT LIVE:</h1>
        {this.state.newData.map((newData) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{newData.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              {`Starts: ${newData.time_start}/Ends: ${newData.time_end}`}
              </h6>
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}
export default App;
