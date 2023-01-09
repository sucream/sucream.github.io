import Category from './category/Category';

import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__title'>Home</div>
      <div className='home__content'>
        <Category category={'일상'} />
        <Category category={'IT'} />
      </div>
    </div>
  );
};

export default Home;
