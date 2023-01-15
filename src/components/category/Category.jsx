import Post from '../post/Post';

import './Category.css';

const Category = (props) => {
  const { category, posts } = props;

  return (
    <div className='category'>
      <div className='category__title'>{category}</div>
      <div className='category__posts'>
        {posts.map((post, index) => {
          return <Post key={index} {...post} />;
        })}
      </div>
      <hr />
    </div>
  );
};

export default Category;
