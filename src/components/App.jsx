import { Profile } from "./Profile/Profile";
import userData from "../jsonData/userData.json";
import friends from "../jsonData/friends.json";
import transactions from "../jsonData/transactions.json";
import { FriendList } from "./FriendList/FriendList";
import { TransactionsHistory } from "./Transactions/TransactionHistory";
export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </>
  );
}
