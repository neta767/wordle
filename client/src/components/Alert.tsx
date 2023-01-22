import {Transition} from "@headlessui/react";
import classNames from "classnames";
import {Fragment} from "react";
import {alertProps} from "../lib/types";


export const Alert = ({isOpen, message, variant}: alertProps) => {
    const classes = classNames(
        "fixed z-20 top-14 left-1/2 -translate-x-1/2 max-w-sm shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden text-white",
        {
            "bg-rose-500": variant === "error",
            "bg-blue-500": variant === "success",
        }
    );

    return (
        <Transition
            show={isOpen}
            as={Fragment}
            enter="ease-out duration-300 transition"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed inset-0 min-h-screen bg-gray-500 bg-opacity-75 transition-opacity">
                <div data-cy='alert' className={classes}>
                    <div className="p-2">
                        <p className="text-center text-sm font-medium">{message}</p>
                    </div>
                </div>
            </div>
        </Transition>
    );
};
