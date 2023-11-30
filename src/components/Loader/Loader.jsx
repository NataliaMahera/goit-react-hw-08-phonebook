import { ThreeDots } from 'react-loader-spinner';
import css from './loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#6c9290"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName="blocks-wrapper"
        visible={true}
      />
    </div>
  );
};

export default Loader;
