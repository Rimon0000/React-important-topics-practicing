import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import { MouseEvent, ReactNode, createContext, useContext, useRef } from "react";

type TModal = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}
type TModalContext = {
    onClose: () => void;
}
type TCloseButton = {
    children?: ReactNode;
}
type THeader = TCloseButton;

const ModalContext = createContext<TModalContext | null>(null)

const Modal = ({isOpen, onClose, children} : TModal) =>{
    const containerRef = useRef<HTMLDivElement>(null)

    const handleOutsideClose = (e : MouseEvent) =>{
        // console.log(e.target);
        if(!containerRef.current?.contains(e.target as Node)){
            onClose();
        }
    }

    return createPortal(
        <ModalContext.Provider value={{onClose}}>
        <div onClick={handleOutsideClose} className={cn("fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]", {
            "visible": isOpen,
        })}>
            <div ref={containerRef} className="bg-white w-full max-w-sm rounded-md p-4">{children}</div>
        </div>
        </ModalContext.Provider>,
        document.getElementById('portal') as Element
    )
}

export default Modal;


const CloseButton = ({children}: TCloseButton) =>{
    const {onClose} = useContext(ModalContext) as TModalContext;

    return <button onClick={onClose}>
            {children ? children : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="bg-red-500 text-white rounded-md p-0.5 size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>)}
    </button>
}

const Header = ({children}: THeader) =>{
    return <div className="flex justify-between items-center w-full mb-3">{children}</div>
}

Modal.Header = Header;
Modal.CloseButton = CloseButton;


//re-usable component list
// Accordion 
// Tab 
// Pagination component 
// slider / carousel component 
// Breadcrumb 