import {  useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import categories from "../categories";

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const schema = z.object({
  description: z.string().min(3),
  amount: z.number(),
  category: z.enum(categories,{
    errorMap:()=>({message:'category is required'})
  }),
});

export type ExpenseFormData = z.infer<typeof schema>;


export default function Form({onSubmit}:props) {
  const {
    register,
    handleSubmit,
    formState: { errors },reset
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <form onSubmit={handleSubmit(data =>onSubmit(data))}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select className="form-select" id="category" {...register("category")}>
          <option value=""></option>
          {categories.map(category => <option value={category}>{category}</option>)}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}
