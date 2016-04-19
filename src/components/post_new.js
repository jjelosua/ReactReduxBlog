import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPost } from '../actions/index';
import { browserHistory } from 'react-router';

class PostNew extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', categories:'', content:''};

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onCategoriesChange = this.onCategoriesChange.bind(this);
        this.onContentChange = this.onContentChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    onCategoriesChange(event) {
        this.setState({ categories: event.target.value });
    }

    onContentChange(event) {
        this.setState({ content: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.createPost(this.state);
        browserHistory.push('/');
        console.log('create new post');
    }

    onFormCancel(event) {
        event.preventDefault();
        browserHistory.push('/');
        console.log('creation cancelled, return to index')
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input 
                    placeholder='Title'
                    className='form-control'
                    value={this.state.title}
                    // Before using fat arrow syntax to avoid 'this' incoherence
                    //onChange={event => this.onInputChange(event)}/>
                    onChange={this.onTitleChange}/>
                <input 
                    placeholder='Categories, separated by commas'
                    className='form-control'
                    value={this.state.categories}
                    // Before using fat arrow syntax to avoid 'this' incoherence
                    //onChange={event => this.onInputChange(event)}/>
                    onChange={this.onCategoriesChange}/>
                <input 
                    placeholder='Content'
                    className='form-control'
                    value={this.state.content}
                    // Before using fat arrow syntax to avoid 'this' incoherence
                    //onChange={event => this.onInputChange(event)}/>
                    onChange={this.onContentChange}/>
                <button type='submit' className='btn btn-primary'>Save</button>
                <button onClick={this.onFormCancel} type='button' className='btn btn-primary'>Cancel</button>
            </form>
        );
    }
}

export default connect(null, { createPost })(PostNew);