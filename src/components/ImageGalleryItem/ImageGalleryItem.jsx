import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, largeImageURL, webformatURL }) => {
  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        src={webformatURL}
        alt={webformatURL}
      />
    </li>
  );
};

export default ImageGalleryItem;

// const ImageGalleryItem = ({ id, largeImageURL, webformatURL }) => {
//   return (
//     <li id={id} className="gallery-item">
//       <img src={webformatURL} alt={webformatURL} />
//     </li>
//   );
// };
// export default ImageGalleryItem;
