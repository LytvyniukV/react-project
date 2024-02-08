import css from "../styles/FriendListItem.module.css";
export const FriendListItem = ({ avatar, name, isOnline } ) => {
  return (
    <>
      <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={isOnline ? css.friendOnline : css.friendOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
};
