import { Profile } from "./Profile";
import userData from '../jsonData/userData.json'

export default function App() {
  console.log(userData);
  return (
    <>
      <Profile userData={userData}/>
    </>
  );
}
