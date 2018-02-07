import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ADD_ITEM } from '../store/actions';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }

    render() {
        return (
            <div className="row">
                <div style={ {float: 'right'} } className="medium-12 md-text-field with-floating-label columns">
                    <div className="row">
                        <form onSubmit={
                            (e) => {
                                e.preventDefault();
                                this.props.addNewItem(this.props.userId, this.state.input);
                                this.setState({input: ''});
                            }}
                        >
                            <div className="small-12 medium-10 columns">
                                <input
                                    id="addItemInput"
                                    type="text"
                                    onInput={(e) => {
                                        this.setState({input: e.target.value});
                                    }}
                                    value={this.state.input}
                                    required
                                />
                                <label htmlFor="addItemInput">Add Item</label>
                            </div>

                            <div className="small-12 medium-2 columns">
                                <button className="expand">Add Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewItem(id, item) {
            dispatch( {type: ADD_ITEM, payload: {id: id, title: item}} )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);