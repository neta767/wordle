import {BaseModal} from "./BaseModal";
import classnames from "classnames";

type Props = {
    isOpen: boolean;
    handleClose: () => void;
    isDarkMode: boolean;
    handleDarkMode: Function;
};

export const SettingsModal = ({
                                  isOpen,
                                  handleClose,
                                  isDarkMode,
                                  handleDarkMode,
                              }: Props) => {
    const toggleHolder = classnames(
        "w-14 h-8 flex shrink-0 items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out cursor-pointer",
        {
            "bg-green-400": isDarkMode,
        }
    );
    const toggleButton = classnames(
        "bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out cursor-pointer",
        {
            "translate-x-6": isDarkMode,
        }
    );
    return (
        <BaseModal title="Settings" isOpen={isOpen} handleClose={handleClose}>
            <div className="mt-2 flex flex-col divide-y">
                <div className="flex justify-between gap-4 py-3">
                    <div className="mt-2 text-left text-gray-500 dark:text-gray-300">
                        <p className="leading-none">isDarkMode</p>
                    </div>
                    <div className={toggleHolder} onClick={() => handleDarkMode(!isDarkMode)}>
                        <div className={toggleButton}/>
                    </div>
                </div>
            </div>
        </BaseModal>
    );
};
