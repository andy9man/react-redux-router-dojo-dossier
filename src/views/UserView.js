import React from 'react';
import { connect } from 'react-redux';
import {
    Route
} from 'react-router-dom';
import UserNav from '../components/UserNav';
import DisplayUserItems from '../components/DisplayUserItems';
import AddUser from '../components/AddUser';
import {DisplayMessage} from '../components/helpers';

const UserView = props => {
    console.log('Showing UserView...');
    const thereAreUsers = props.users.length > 0;
    return (
        <div>
            <AddUser/>
            {thereAreUsers &&
                <div style={ {width: '100%'} } className="bg-black padding-medium">
                    <UserNav {...props} />
                </div>
            }
            <div>
                {
                    thereAreUsers ?
                        <Route path={`${props.match.path}/:id`} component={DisplayUserItems} />
                    :
                        <DisplayMessage message="Currently there are no users." />
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        users: state.users,
        items: state.items
    }
}

export default connect(mapStateToProps)(UserView);