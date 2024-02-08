import { Profile } from "./Profile/Profile";
import userData from "../jsonData/userData.json";
import friends from "../jsonData/friends.json";
import transactions from "../jsonData/transactions.json";
import { FriendList } from "./FriendList/FriendList";
import { TransactionsHistory } from "./Transactions/TransactionHistory";
export default function App() {
  return (
    <>
      <Profile userData={userData} />
      <FriendList friends={friends} />
      <TransactionsHistory transactions={transactions} />
    </>
  );
}
