import { GAME_TITLE } from "../constants/strings";
import {
  ArrowRightOnRectangleIcon,
  CogIcon,
  InformationCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import "./Navbar.css"

type Props = {
  setIsInfoModalOpen: (value: boolean) => void;
  setIsLoginModalOpen: (value: boolean) => void;
  setIsSettingsModalOpen: (value: boolean) => void;
  logout: () => void;
  userName: string | null;
};

export const Navbar = ({
  setIsInfoModalOpen,
  setIsLoginModalOpen,
  setIsSettingsModalOpen,
  logout,
  userName,
}: Props) => {
  return (
    <div className="mb-[2%]">
      <div className="flex h-3rem px-5 short:h-auto justify-between items-center">
        <p className="text-xl font-bold dark:text-white">{GAME_TITLE}</p>
        <div className="flex">
          <p className="mr-3 font-bold dark:text-white">{userName}</p>
          <ArrowLeftOnRectangleIcon
            className={`mr-3 h-6 w-6 cursor-pointer dark:stroke-white ${
              userName && "hidden"
            }`}
            onClick={() => setIsLoginModalOpen(true)}
          />
          <ArrowRightOnRectangleIcon
            className={`mr-3 h-6 w-6 cursor-pointer dark:stroke-white ${
              !userName && "hidden"
            }`}
            onClick={logout}
          />
          <InformationCircleIcon
            className="mr-3 h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
          <CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  );
};
