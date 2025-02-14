interface props{
    onSelectCategory:(category:string)=>void
}
export default function ExpenseFilter({onSelectCategory}:props) {
  return (
    <select className="form-select" onChange={(event)=>onSelectCategory(event.target.value)}>
        <option value="">All  Categories</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
        <option value="Groceries">Groceries</option>
    </select>
  )
}
