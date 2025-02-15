import { useState ,useEffect} from "react";
import ExpensesList from "./components/ExpensesList";
import Form from "./components/Form";
import ExpenseFilter from "./components/ExpenseFilter";

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const onSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const [expenses, setExpenses] = useState<Expense[]>(()=>{
    const savedExpenses = localStorage.getItem("expenses")
    return savedExpenses ? JSON.parse(savedExpenses) : []
  });

  useEffect(()=>{
    localStorage.setItem("expenses",JSON.stringify(expenses))
  },[expenses])

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <Form
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <div className="mb-3">
        <ExpenseFilter onSelectCategory={onSelectCategory} />
      </div>

      <ExpensesList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}
