import s from './error.module.css';
const Error = ({ name }) => {
  return (
    <h2 className={s.Error}>
      Пошук по запиту <span className={s.text}>{name}</span> не дав результату
    </h2>
  );
};
export default Error;
