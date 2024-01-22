import { useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";

const NormalForm = () =>{

    const {register, handleSubmit} = useForm()

    const onSubmit = (data) =>{
        console.log(data);
    }

    const double = true;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={cn("border border-gray-300 rounded-lg shadow-sm p-5 mx-auto",{
            "max-w-5xl" : double,
            "max-w-md" : !double,
        }
        )}>
            <div className={cn("grid grid-cols-1 justify-items-center gap-5", {
                    "md:grid-cols-2" : double,
                })}>
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="name">Name</label>
                    <input type="text" id="name" {...register("name")} />
                </div>
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="email">Email</label>
                    <input type="text" id="email" {...register("email")} />
                </div>
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="password">Password</label>
                    <input type="text" id="password" {...register("password")} />
                </div>
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="select">Select</label>
                    <select>
                        <option value="">One</option>
                        <option value="">Two</option>
                        <option value="">Three</option>
                        <option value="">Four</option>
                    </select>
                </div>
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="select">Message</label>
                    <textarea name="" id=""></textarea>
                </div>
                <div className="w-full max-w-md">
                    <label className="block" htmlFor="select">CheckBox</label>
                    <input className="" type="checkbox" name="" id="" />
                </div>
            </div>

            <div className={cn("grid grid-cols-1 justify-items-center gap-5 my-8", {
                    "md:grid-cols-2" : double,
                })}>
                <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
                    <Button className="w-full md:w-fit" type="submit">Submit</Button>
                </div>
            </div>
        </form>
    )
}

export default NormalForm;

