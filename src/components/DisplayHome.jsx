import { albumsData, songsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import Navbar from './Navbar';
import SongItem from './SongItem';

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='mb-4 '>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto '>
          {albumsData.map((item, id) => (
            <AlbumItem
              key={id}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className='mb-4 '>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hit</h1>
        <div className='flex overflow-auto '>
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
