// import {twMerge} from "tailwind-merge"
// import {clsx} from "clsx"
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

type TRef = HTMLButtonElement;
type TVariant = "solid" | "ghost" | "outline";
type TButtonOptions = {
    variant?: TVariant;
}

type TButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & TButtonOptions;

const Button = forwardRef<TRef, TButton>(({className, variant = "solid", children, ...rest}, ref) =>{

    const getVariant = (variant : TVariant) =>{
        switch (variant) {
            case "outline":
                return "btn-outline";
            case "ghost":
                return "btn-ghost";
            default:
                return "btn-solid";
        }
    }

    return (
        <div >
            <button {...rest} ref={ref} className={cn(getVariant(variant), className)}>{children}</button>
        </div>
    )
})

export default Button;