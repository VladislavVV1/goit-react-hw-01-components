import { Profile } from "./Profile/profile";
import user from "../json/user.json"
import { Statistics } from "./Statistics/statistics";
import data from "../json/data.json"
import {FriendList} from "./FriendList/friendList"
import friends from "../json/friends.json"
import {TransactionHistory} from "./TransactionHistory/transactionHistory"
import transactions from "../json/transactions.json"


export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column',
        color: '#010101',
        padding:'50px',
        backgroundColor: 'grey'
      }}
    >
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />

      <Statistics title='Upload stats' stats={data}/>
      <Statistics stats={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};
