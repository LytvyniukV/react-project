import css from "./Transactions.module.css";

export const TransactionsHistory = ({ transactions }) => {
  return (
    <table className={css.transactionTable}>
      <thead className={css.transactionTableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transactionTableBody}>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={css.amount}>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
