import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { browserHistory } from 'react-router';

class PostsIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };

        //Using javascript bind function to avoid 'this' incoherence
        this.onNewPostClick = this.onNewPostClick.bind(this);
    }

    // Only called when it will be rendered for the first time
    componentWillMount() {
        this.props.fetchPosts();
    }

    onNewPostClick(event) {
        browserHistory.push('/posts/new');
        // this.props.history.push('/some/path');
    }

    render() {
        return (
            <div>
                <div className='text-xs-right'>
                    <button 
                        onClick={this.onNewPostClick}
                        type="button" 
                        className="btn btn-default">Add post</button>
                </div> 
                <div>
                List of blog posts
                </div>
            </div>
        );
    }
}

// Whatever is returned will show up in props in the container
function mapStateToProps({ history }) {
    return { history };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts }, dispatch)
// }

// export default connect(null, {mapDispatchToProps})(PostsIndex);

//Another more concrete way of doing the above
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
