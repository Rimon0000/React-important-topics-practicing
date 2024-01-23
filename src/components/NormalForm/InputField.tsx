import { useFormContext } from "react-hook-form";

const InputField = () =>{
    const {register, watch} = useFormContext()

    console.log(watch("something"));
    
    return (
        <div>
            <label className="block" htmlFor="email">Something</label>
            <input type="text" id="email" {...register("something")} />
        </div>
    )
}

export default InputField;