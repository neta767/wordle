import { useNavigate } from 'react-router-dom';

type Props = {
  userName: string | null;
};

function HomePage({ userName }: Props) {
  const navigate = useNavigate();

  return (
    <form className='flex flex-col items-center'>
      <p className='mb-5 text-center text-xl font-bold dark:text-white'>
        Welcome {userName ? userName : 'guest'}!
      </p>
      <button
        className='rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
        onClick={() => navigate('game')}
      >
        Start to play
      </button>
    </form>
  );
}

export default HomePage;
