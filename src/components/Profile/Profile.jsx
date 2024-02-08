import css from "./Profile.module.css";

export const Profile = ({
  userData: { username, tag, location, avatar, stats },
}) => {
  return (
    <div className={css.profileWrap}>
      <div className={css.profileMainInfoWrap}>
        <img className={css.profileImg} src={avatar} alt="User avatar" width={150} height={150}/>
        <p className={css.profileTitle}>{username}</p>
        <p className={css.profileText}>@{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>
      <ul className={css.profileInfoList}>
        <li className={css.profileItem}>
          <span className={css.profileStatsText}>Followers</span>
          <span className={css.profileNumbers}>{stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileStatsText}>Views</span>
          <span className={css.profileNumbers}>{stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileStatsText}>Likes</span>
          <span className={css.profileNumbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
