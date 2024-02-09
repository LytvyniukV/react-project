import css from "./Profile.module.css";

export const Profile = ({name, tag, location, image, stats}) => {
  return (
    <div className={css.profileWrap}>
      <div className={css.profileMainInfoWrap}>
        <img className={css.profileImg} src={image} alt="User avatar" width={150} height={150}/>
        <p className={css.profileTitle}>{name}</p>
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
