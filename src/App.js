import React, { Component } from 'react';
import SearchBar from './components/searchbar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';
import axios from 'axios';

class App extends Component {
    state = {
        searchTerm: '',
        data: '',
        videoId: '',
        title: '',
        description: '',
    }
    handleChange = ({ target: {value:searchTerm}}) => this.setState({...this.state, searchTerm});

    handleSelect = (videoId, title, description) => this.setState({...this.state, videoId, title, description});
        
    componentDidUpdate(prevProps, prevState) {
        const getYoutubeVideos = () => {
            const baseurl = 'https://www.googleapis.com/youtube/v3/search';
            const key = process.env.REACT_APP_API_KEY;
            const type = 'videp'
            const part = 'snippet'
            const q = this.state.searchTerm;
    
            const url = `${baseurl}?key=${key}&type=${type}&part=${part}&q=${encodeURIComponent(q)}`;

            axios.get(url)
                .then(response => this.setState({...this.state, data: response.data }))
                .catch(error=> console.log(error));
        }
        if (prevState.searchTerm !== this.state.searchTerm) getYoutubeVideos();
    }
    
    render(){
        const items = this.state.data.items || [];
        return (
            <div className='container'>
                <div style={{ margin: '25px',textAlign: 'center' }}>
                    <input onChange={this.handleChange} style={{ width: '75%' }}/>
                    <button style={{ marginLeft: '8px',borderRadius: '4px',background: '#007bff' }}>Search</button>
                </div>

                <div className='row'>
                    <VideoDetail 
                        videoId={this.state.videoId} 
                        title={this.state.title} 
                        description={this.state.description}
                    />
                    <div className='col-md-4'>
                        <VideoList 
                            items={items}
                            handleSelect={this.handleSelect}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
