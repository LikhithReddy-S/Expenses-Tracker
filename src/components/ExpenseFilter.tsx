import categories from "../categories"

interface props{
    onSelectCategory:(category:string)=>void,
}
export default function ExpenseFilter({onSelectCategory}:props) {
  return (
    <select className="form-select" onChange={(event)=>onSelectCategory(event.target.value)}>
        <option value="">All  Categories</option>
        {categories.map(category => <option value={category}>{category}</option>)}
    </select>
  )
}
