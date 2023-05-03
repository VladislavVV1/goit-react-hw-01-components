import PropTypes from "prop-types";
import css from "./friendList.module.css"
import {FriendListItem} from './FriendListItem/friendListItem'

export const FriendList = ({friends}) => {
    return(
        <ul className={css.friendList}>
        
        {friends.map(friend => (
            <FriendListItem 
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            />
            ))}
        </ul>
 )
 };

 FriendList.propTypes = {
    title: PropTypes.string,
    friends: PropTypes.arrayOf(PropTypes.shape()),
  };