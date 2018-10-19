import React, { Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDGLOqfG5Vxf6wu5v7Yww-PDDxR5iIB1bI';

//Create a new component. This component should product some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [], selectedVideo: null };

        this.videoSearch('lebron');
    }

    videoSearch(searchTerm){
        YTSearch({ key: API_KEY, term: searchTerm }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) } , 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    };
}

//Take this component's generated HTML and put in on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));


