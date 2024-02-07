import { Profile } from "./Profile";
import userData from "../jsonData/userData.json";
import friends from "../jsonData/friends.json";
import { FriendList } from "./FriendList";
export default function App() {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
    </>
  );
}
