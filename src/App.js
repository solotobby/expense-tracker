import './App.css';
import { Header } from './component/Header';
import { Balance } from './component/Balance';
import { IncomeExpenses } from './component/IncomeExpenses';
import { TransactionList } from './component/TransactionList';
import { AddTrasaction } from './component/AddTrasaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider> 
    <Header />
    <div className="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTrasaction />
    </div>
    </GlobalProvider>
  );
}

export default App;
