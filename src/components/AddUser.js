import React, {Component} from 'react';
import { connect } from 'react-redux';
import { ADD_USER } from '../state/actions';

class AddUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }

    render() {

        return (
            <div className="row">
                <div style={ {float: 'right'} } className="medium-6 md-text-field with-floating-label columns">
                    <div className="row">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            this.props.addNewTab(this.state.input);
                            this.setState({ input: '' });
                        }}
                        >
                            <div className="small-12 medium-8 columns">
                                <input id="addUserInput" value={this.state.input} type="text" onInput={(e) => this.setState( {input: e.target.value} )} required/>
                                <label htmlFor="addUserInput" value={this.state.input} required>Add User</label>
                            </div>

                            <div className="small-12 medium-4 columns">
                                <button className="expand">Add User</button>
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
        tabs: state.tabs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewTab(newTab) {
            dispatch( {type: ADD_USER, payload: newTab} )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);