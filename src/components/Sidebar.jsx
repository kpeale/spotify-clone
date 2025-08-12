import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img
            src={assets.home_icon}
            alt='home icon'
            className='w-6'
            onClick={() => navigate('/')}
          />
          <Link
            to='/'
            className='font-bold'
          >
            Home
          </Link>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img
            src={assets.search_icon}
            alt='search icon'
            className='w-6'
          />
          <p className='font-bold'>Search</p>
        </div>
      </div>

      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img
              src={assets.stack_icon}
              alt='stack icon'
              className='w-8'
            />
            <p className='font-semibold'>Your library</p>
          </div>

          <div className='flex items-center gap-3'>
            <img
              src={assets.arrow_icon}
              alt='arrow icon'
              className='w-5'
            />
            <img
              src={assets.plus_icon}
              alt='arrow icon'
              className='w-5'
            />
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1 className=''>Create your first playlist</h1>
          <p className='font-light'>It is easy, we will help you</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
            Create Playlist
          </button>
        </div>

        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1 className=''>Let us find some podcast to follow</h1>
          <p className='font-light'>We will keep you updated on new episodes</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
            Browse podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
