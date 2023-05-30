import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ data }) => {
  console.log(data);
  return (
    <ul className={s.ImageGallery}>
      {data.map(({ id, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          id={id}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

// <ul>
//   {users.map(user => (
//     <UserItem
//       key={user.id}
//       userDelete={userDelete}
//       changeJob={changeStat}
//       showUserDetails={showUserDetails}
//       {...user}
//     />
//   ))}
// </ul>;
