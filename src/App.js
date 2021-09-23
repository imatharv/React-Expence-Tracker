import React from 'react';
import HeaderComponent from './components/HeaderComponent';
import BalanceComponent from './components/BalanceComponent';
import IncomeExpensesComponent from './components/IncomeExpensesComponent';
import TransactionListComponent from './components/TransactionListComponent';
import AddTransactionComponent from './components/AddTransactionComponent';

import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <HeaderComponent />
      <div className="container">
        <BalanceComponent />
        <IncomeExpensesComponent />
        <TransactionListComponent />
        <AddTransactionComponent />
      </div>
    </GlobalProvider>
  );
}

export default App;
