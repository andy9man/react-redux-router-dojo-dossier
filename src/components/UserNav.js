import React from 'react';
import { connect } from 'react-redux';
import {FreakingAwesomeNavLink as CustomNav} from './helpers';

const UserNav = props => {
    console.log(props);
    return (
        <div style={ {width: '100%'} } className="bg-black padding-medium">
            <ul className="tabs ghost">
                {
                    props.users.length > 0 && props.users.map( (user, index) => {
                        //console.log(tab);
                        return (
                            <CustomNav key={user.id} to={`/users/${user.id}`} label={user.name} generalClassName="tab-title" activeOnlyWhenExact={true} />
                        )
                    })
                }
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserNav);