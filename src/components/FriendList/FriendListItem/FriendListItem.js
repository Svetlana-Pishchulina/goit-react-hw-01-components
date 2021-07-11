import PropTypes from "prop-types";
import defaultImage from "../../default.jpg";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <span className={styles[isOnline ? "status_online" : "status_offline"]}>
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
};
export default FriendListItem;
