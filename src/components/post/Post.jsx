import './Post.css';

const Post = (props) => {
  const { title, content, date, url, thumbnail } = props;
  return (
    <a className='post' href={url}>
      <img
        className='post__thumbnail'
        src={thumbnail || process.env.PUBLIC_URL + '/img/sucream.png'}
        alt='썸네일 이미지'
      />
      <div className='post__content-area'>
        <div className='post__title'>{title}</div>
        <div className='post__date'>{date}</div>
        <div className='post__content'>{content}</div>
      </div>
    </a>
  );
};

export default Post;
