import React from 'react';
import {
    Link,
    Route
} from 'react-router-dom';

export const FreakingAwesomeNavLink = ( {label, to, activeOnlyWhenExact, generalClassName} ) => {
    return (
      <Route path={to} exact={activeOnlyWhenExact} children={ ({match}) => {
        console.log(match)
        return (
        <li className={`${generalClassName}${match ? ' active' : ''}`}>
          <Link to={to} style={ {fontWeight: 'normal'} }>{label}</Link>
        </li>
        )}
      } />
    );
}

export const DisplayMessage = props => {

  return (
      <div className="padding-vert-large padding-horiz-medium">
          <h3><em>{props.message}</em></h3>
      </div>
  );
}

export const GetUserName = (userId, users) => {
  return users.find( user => user.id === userId ).name;
}