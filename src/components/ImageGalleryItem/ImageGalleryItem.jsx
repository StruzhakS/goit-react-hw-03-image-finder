import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, largeImageURL, webformatURL }) => {
  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img
        className={s.ImageGalleryItemImage}
        src={webformatURL}
        alt={largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
