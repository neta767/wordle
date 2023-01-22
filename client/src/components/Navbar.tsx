import {GAME_TITLE} from "../constants/strings";
import {
    ArrowRightOnRectangleIcon,
    SunIcon,
    MoonIcon,
    InformationCircleIcon,
    ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import "./Navbar.css"

type Props = {
    setIsInfoModalOpen: (value: boolean) => void;
    setIsLoginModalOpen: (value: boolean) => void;
    logout: () => void;
    userName: string | null;
    isDarkMode: boolean,
    handleDarkMode: (isDark: boolean) => void
};

export const Navbar = ({
                           setIsInfoModalOpen,
                           setIsLoginModalOpen,
                           logout,
                           userName,
                           isDarkMode,
                           handleDarkMode
                       }: Props) => {
    return (
        <div className="mb-[2%]">
            <div className="flex h-3rem px-5 short:h-auto justify-between items-center">
                <p className="text-xl font-bold dark:text-white">{GAME_TITLE}</p>
                <div className="flex">
                    {userName ?
                        <>
                            <p data-cy='user-name' className="mr-3 font-bold dark:text-white">{userName}</p>
                            <button data-cy='logout-button' onClick={(event) => {
                                logout();
                                event.currentTarget.blur();
                            }}>
                                <ArrowRightOnRectangleIcon className='cursor-pointer mr-3 h-6 w-6 dark:stroke-white'/>
                            </button>
                        </> :
                        <button data-cy='login-button' onClick={(event) => {
                            setIsLoginModalOpen(true);
                            event.currentTarget.blur();
                        }}>
                            <ArrowLeftOnRectangleIcon className='cursor-pointer mr-3 h-6 w-6 dark:stroke-white'/>
                        </button>}
                    <button data-cy='info-button' onClick={(event) => {
                        setIsInfoModalOpen(true);
                        event.currentTarget.blur();
                    }}>
                        <InformationCircleIcon className="cursor-pointer mr-3 h-6 w-6 dark:stroke-white"/>
                    </button>
                    {isDarkMode ?
                        <button data-cy='light-button' onClick={(event) => {
                            handleDarkMode(!isDarkMode);
                            event.currentTarget.blur();
                        }}>
                            <MoonIcon className='cursor-pointer h-6 w-6 dark:stroke-white'/>
                        </button> :
                        <button data-cy='dark-button' onClick={(event) => {
                            handleDarkMode(!isDarkMode);
                            event.currentTarget.blur();
                        }}>
                            <SunIcon className='cursor-pointer h-6 w-6 dark:stroke-white'/>
                        </button>}
                </div>
            </div>
            <hr></hr>
        </div>
    );
};
