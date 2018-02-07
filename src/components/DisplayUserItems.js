import React from 'react';
import { connect } from 'react-redux';
import AddItem from './AddItem.js';
import { Redirect } from 'react-router-dom';

const DisplayUserItems = props => {
    const {id} = props.match.params;
    const isValidUserId = (props.users.filter( user => ( user.id === id ))).length > 0;
    const userItems = props.items.filter( item => item.userId === id );
    console.log(userItems);
    return (
        <div style={ {width: '100%'} } className="bg-off-white padding-vert-medium padding-horiz-medium">
            {
                isValidUserId ?
                <div>
                    <ul style={ {marginBottom: "35px"} }>
                    {
                        userItems.map( (item, index) => {
                            return ( <li key={index}>{item.title}</li> )
                        })
                    }
                    </ul>
                    <AddItem userId={id} />
                </div> :
                <Redirect to="/users" />
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        users: state.users,
        items: state.items
    }
}

export default connect(mapStateToProps)(DisplayUserItems);