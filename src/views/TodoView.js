import React from 'react';
import { connect } from 'react-redux';
import {
    Link
} from 'react-router-dom';
import {DisplayMessage, GetUserName} from '../components/helpers';

const TodoView = props => {
    console.log('In Todo View...');
    console.log(props.items);
    return (
        <div>
            <h2>Todos</h2>
            <div>
                {
                    props.items.length > 0 ?
                        <ul>
                            {
                                props.items.map(item => {
                                    const userName = GetUserName(item.userId, props.users);
                                    return (
                                        <li key={item.id}>{`${item.title} - Owned by: `}<Link to={`/users/${item.userId}`} >{userName}</Link></li>
                                    );
                                })
                            }
                        </ul>
                        :
                        <DisplayMessage message="Currently there are no items." />
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        items: state.items,
        users: state.users
    }
}

export default connect(mapStateToProps)(TodoView);