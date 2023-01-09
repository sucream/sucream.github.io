import './Post.css';

const Post = (props) => {
  const { title, url, date, content, thumbnail } = props;
  return (
    <div className='post'>
      <a className='post__title_area' href={url}>
        <div>{title}</div>
      </a>
      <div className='post__content_area'>
        <div className='post__date'>{date}</div>
        <div className='post__content'>{content}</div>
      </div>
    </div>
  );
};

export default Post;
