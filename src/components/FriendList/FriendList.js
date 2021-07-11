import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem/FriendListItem";

import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.friend_list_item} key={id}>
          <FriendListItem isOnline={isOnline} name={name} avatar={avatar} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
export default FriendList;
