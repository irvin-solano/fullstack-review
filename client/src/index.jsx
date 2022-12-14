import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    //send a call to the server for data to be added to db
    // axios.post('/', {user:term})
    //   .then(() => console.log('axios - back from express =)'))
    //   .catch(() => console.log('axios - express hates you'))
    $.ajax({
       method: 'POST',
       url: '/repos',
       data:JSON.stringify({user: term}),
       contentType:'application/JSON',
       success: (data) => console.log('axios - back from express =)', data),
       error: (err) => console.log('axios - express hates you', err)
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));