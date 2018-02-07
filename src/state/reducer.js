import {TAB_SELECTED, ADD_ITEM, ADD_USER, ITEM_INPUT} from './actions.js';

class User {
    constructor(name) {
        this.id = `user-${Date.now()}`;
        this.name = name;
    }
}

class Item {
    constructor(userId, title) {
        this.id = `item-${Date.now()}`;
        this.userId = userId;
        this.title = title;
    }
}

const initialState = {
    currentUser: undefined,
    newItem: '',
    users: [],
    items: []
//     users: [
//         new User('Rachel'),
//         new User('Monica'),
//         new User('Phoebe'),
//         new User('Joey'),
//         new User('Chandler'),
//         new User('Ross')
//     ]
}

export const reducer = ( state={...initialState, currentTab: 0}, action ) => {
    switch( action.type ) {
        case TAB_SELECTED:
            return { ...state, currentTab: action.payload};

        case ADD_ITEM:
            console.log(`${action.payload.id} - ${action.payload.title}`);
            const newItemArray = state.items.concat( [new Item(action.payload.id, action.payload.title)] )
            return { ...state, items: newItemArray};

        case ADD_USER:
            const newUserArray = state.users.concat( [new User(action.payload)] );
            return {...state, users: newUserArray}

        case ITEM_INPUT:
            return {...state, newItem: action.payload}

        default:
            return state;
    }
}