import PropTypes from "prop-types";
import css from './friendListItem.module.css'
import clsx from 'clsx';
export const FriendListItem = ({avatar, name, isOnline}) => {
    return(
        <li className={css.item}>
            <span className={clsx(css.status, isOnline && css.isOnline)}></span>
            <img src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
 )
 };

 FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  };