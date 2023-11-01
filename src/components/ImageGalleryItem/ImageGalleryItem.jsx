import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onClick }) => (
  <li className={css.ImageGalleryItem}>
    <img
      src={image.webformatURL}
      alt=""
      className="ImageGalleryItemImage"
      onClick={onClick}
    />
  </li>
);

export default ImageGalleryItem;
