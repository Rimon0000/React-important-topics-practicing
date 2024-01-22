import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import { MouseEvent, useRef } from "react";

const Modal = ({isOpen, onClose, children}) =>{
    const containerRef = useRef<HTMLDivElement>(null)

    const handleOutsideClose = (e : MouseEvent) =>{
        // console.log(e.target);
        if(!containerRef.current?.contains(e.target as Node)){
            onClose();
        }
    }

    return createPortal(
        <div onClick={handleOutsideClose} className={cn("fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]", {
            "visible": isOpen,
        })}>
            <div ref={containerRef} className="bg-white w-full max-w-sm rounded-md">{children}</div>
        </div>,
        document.getElementById('portal') as Element
    )
}

export default Modal;

const CloseButton = () =>{
    return <button onClick={}>Close Button</button>
}

Modal.CloseButton = CloseButton;