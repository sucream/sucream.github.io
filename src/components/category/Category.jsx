import Post from '../post/Post';

import './Category.css';

const Category = (props) => {
  const { category } = props;

  const posts = [
    {
      title: '첫 게시글',
      date: '20230109',
      content: '어쩌구 저쩌구',
      thumbnail: 'https://picsum.photos/200/300',
    },
    {
      title: '두번째 게시글',
      date: '20230109',
      content: '어쩌구 저쩌구',
      thumbnail: 'https://picsum.photos/200/300',
    },
    {
      title: '세번째 게시글',
      date: '20230109',
      content: '어쩌구 저쩌구',
      thumbnail: 'https://picsum.photos/200/300',
    },
    {
      title: '네번째 게시글',
      date: '20230109',
      content: '어쩌구 저쩌구',
      thumbnail: 'https://picsum.photos/200/300',
    },
    {
      title: '다섯번째 게시글',
      date: '20230109',
      content: '어쩌구 저쩌구',
      thumbnail: 'https://picsum.photos/200/300',
    },
    {
      title: '여섯번째 게시글',
      date: '20230109',
      content: '어쩌구 저쩌구',
      thumbnail: 'https://picsum.photos/200/300',
    },
  ];

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
