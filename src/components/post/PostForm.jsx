import { useState } from 'react';

import './PostForm.css';

const PostForm = (props) => {
  const { postHandler } = props;
  const [postInfo, setPostInfo] = useState({
    title: '',
    content: '',
    date: '',
    url: '',
    thumbnail: '',
  });

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setPostInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(postInfo);
    // 부모로부터 받은 postHandler 함수를 실행
    console.log(!postInfo.title);
    console.log(!postInfo.content);
    console.log(!postInfo.date);
    console.log(!postInfo.url);
    console.log(!postInfo.thumbnail);
    if (
      !postInfo.title ||
      !postInfo.content ||
      !postInfo.url ||
      !postInfo.date
    ) {
      alert('모든 항목을 입력해주세요.');
      return;
    }
    postHandler(postInfo);
    setPostInfo({
      title: '',
      content: '',
      date: '',
      url: '',
      thumbnail: '',
    });
  };

  return (
    <div className='post-form'>
      <form onSubmit={submitHandler}>
        <div>
          <input
            className='post-form__title'
            value={postInfo.title}
            onChange={formChangeHandler}
            name='title'
            type='text'
            placeholder='제목'
          />
        </div>
        <div>
          <input
            className='post-form__content'
            value={postInfo.content}
            onChange={formChangeHandler}
            name='content'
            type='text'
            placeholder='내용'
          />
        </div>
        <div>
          <input
            className='post-form__date'
            value={postInfo.date}
            onChange={formChangeHandler}
            name='date'
            type='date'
            placeholder='날짜'
          />
        </div>
        <div>
          <input
            className='post-form__url'
            value={postInfo.url}
            onChange={formChangeHandler}
            name='url'
            type='text'
            placeholder='URL'
          />
        </div>
        <div>
          <input
            className='post-form__thumbnail'
            value={postInfo.thumbnail}
            onChange={formChangeHandler}
            name='thumbnail'
            type='text'
            placeholder='썸네일 이미지'
          />
        </div>
        <button className='post-form__submit' type='submit'>
          등록
        </button>
      </form>
    </div>
  );
};

export default PostForm;
