import { Text } from 'react-native';

import ExpensesOutput from './ExpensesOutput/ExpensesOutput';

const RecentExpenses = () => {
  return <ExpensesOutput expensesPeriod="Last 7 Days"/>;
};

export default RecentExpenses;
