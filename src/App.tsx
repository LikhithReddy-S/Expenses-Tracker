import { useState } from "react";
import ExpensesList from "./components/ExpensesList";
import Form from "./components/Form";
import ExpenseFilter from "./components/ExpenseFilter";
interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}
export default function App() {
  
  const [selectedCategory,setSelectedCategory] = useState('');
  const onSelectCategory = (category:string)=>{
    setSelectedCategory(category)
  }
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Groceries",
      amount: 1500,
      category: "Groceries",
    },
    {
      id: 2,
      description: "Electricity Bill",
      amount: 1800,
      category: "Utilities",
    },
    {
      id: 3,
      description: "Netflix Subscription",
      amount: 499,
      category: "Entertainment",
    },
    {
      id: 4,
      description: "Internet Bill",
      amount: 999,
      category: "Utilities",
    },
    {
      id: 5,
      description: "Phone Recharge",
      amount: 599,
      category: "Utilities",
    },
    {
      id: 6,
      description: "Concert Ticket",
      amount: 3000,
      category: "Entertainment",
    },
    {
      id: 7,
      description: "Movie Ticket",
      amount: 750,
      category: "Entertainment",
    },
    {
      id: 8,
      description: "Water Bill",
      amount: 850,
      category: "Utilities",
    },
    {
      id: 9,
      description: "Cable TV Subscription",
      amount: 600,
      category: "Entertainment",
    },
    {
      id: 10,
      description: "Supermarket Shopping",
      amount: 2000,
      category: "Groceries",
    },
  ]);
  const visibleExpenses = selectedCategory ? expenses.filter(e=>e.category === selectedCategory) : expenses
  const onDelete = (ids: number) => {
    setExpenses(expenses.filter((expense) => expense.id != ids));
  };
  

  return (
    <div>
      <Form />
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={onSelectCategory}/>
      </div>
      <ExpensesList expenses={visibleExpenses} onDelete={onDelete} />
    </div>
  );
}
