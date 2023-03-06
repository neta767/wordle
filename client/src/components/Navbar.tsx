import { GAME_TITLE } from '../constants/strings';
import {
  ArrowRightOnRectangleIcon,
  SunIcon,
  MoonIcon,
  InformationCircleIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

type Props = {
  setIsInfoModalOpen: (value: boolean) => void;
  setIsLoginModalOpen: (value: boolean) => void;
  logout: () => void;
  userName: string | null;
  isDarkMode: boolean;
  handleDarkMode: (isDark: boolean) => void;
};

export const Navbar = ({
                         setIsInfoModalOpen,
                         logout,
                         userName,
                         isDarkMode,
                         handleDarkMode
                       }: Props) => {
  const navigate = useNavigate();

  return (
    <div className='mb-[2%]'>
      <div className='h-3rem flex items-center justify-between px-5 short:h-auto'>
        <p className='text-xl font-bold dark:text-white cursor-pointer'
           onClick={() => navigate('')}
        >{GAME_TITLE}</p>
        <div className='flex'>
          {userName ? (
            <>
              <p data-cy='user-name' className='mr-3 font-bold dark:text-white'>
                {userName}
              </p>
              <button
                data-cy='logout-button'
                onClick={(event) => {
                  logout();
                  event.currentTarget.blur();
                }}
              >
                <ArrowRightOnRectangleIcon className='mr-3 h-6 w-6 cursor-pointer dark:stroke-white' />
              </button>
            </>
          ) : (
            <button
              data-cy='login-button'
              onClick={() => navigate('login')}
            >
              <ArrowLeftOnRectangleIcon className='mr-3 h-6 w-6 cursor-pointer dark:stroke-white' />
            </button>
          )}
          <button
            data-cy='info-button'
            onClick={(event) => {
              setIsInfoModalOpen(true);
              event.currentTarget.blur();
            }}
          >
            <InformationCircleIcon className='mr-3 h-6 w-6 cursor-pointer dark:stroke-white' />
          </button>
          {isDarkMode ? (
            <button
              data-cy='light-button'
              onClick={(event) => {
                handleDarkMode(!isDarkMode);
                event.currentTarget.blur();
              }}
            >
              <MoonIcon className='h-6 w-6 cursor-pointer dark:stroke-white' />
            </button>
          ) : (
            <button
              data-cy='dark-button'
              onClick={(event) => {
                handleDarkMode(!isDarkMode);
                event.currentTarget.blur();
              }}
            >
              <SunIcon className='h-6 w-6 cursor-pointer dark:stroke-white' />
            </button>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};
