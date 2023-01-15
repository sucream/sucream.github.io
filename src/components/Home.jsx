import { useState } from 'react';

import Category from './category/Category';
import PostForm from './post/PostForm';

import './Home.css';

const INIT_POSTS = [
  {
    title: '[PC/폰배경] 나른나른 소파 포챠펭',
    date: '20221209',
    content: `[PC/폰배경]

나른나른 소파의 포챠펭과 판다리나~

포챠펭 2023 캘린더 xs의 표지 그림인데요!

이 그림을 좋아해 주셔서.. 배경화면으로 올립니다!

트리가 있는 버전과 없는 버전이 있습니다-`,
    url: 'https://hoduse.tistory.com/235',
    thumbnail:
      'https://blog.kakaocdn.net/dn/ds2JYf/btrTc67Hq0u/mWuGJ92vbAd9Lc0ItGB9O0/img.jpg',
  },
  {
    title: '[포챠펭 인스타그램] 우리집 포챠펭 폰배경 11~20번',
    date: '20221203',
    content: '어쩌구 저쩌구',
    url: 'https://hoduse.tistory.com/234',
    thumbnail:
      'https://blog.kakaocdn.net/dn/BL12e/btrSHUAEh1X/VRPO9RWosHCbBMkKcyfqf1/img.jpg',
  },
  {
    title: '[포챠펭 인스타그램] 우리집 포챠펭 폰배경 0~10번',
    date: '20221126',
    content:
      '인스타그램(https://www.instagram.com/by_hoduse/)의 <우리집 포챠펭> 이벤트 그림의 폰배경 버전입니다!^0^',
    url: 'https://hoduse.tistory.com/232',
    thumbnail:
      'https://blog.kakaocdn.net/dn/p26PF/btrR9EYIUzo/C3KYwdl8LxKkVqQP6jEMa0/img.jpg',
  },
  {
    title: '[카카오톡 이모티콘] 쪼꼬만 뽀짝펭귄 포챠펭!',
    date: '20211124',
    content: `[카카오톡 이모티콘] 쪼꼬만 뽀짝펭귄 포챠펭!
    매우 오랜만의 포챠펭 새 이모티콘이 나왔습니다!
    동글동글 콩알같은 하찮은 귀여움..!
    미니미가 된 쪼꼬만 포챠펭을 귀여워해 줄 수 있는 듯한♬
    재미있게 사용해 주시면 좋겠습니다!
    
    카카오톡 이모티콘샵 웹(e.kakao.com)에서는 20% 할인된다고 하니 참고해주세요!`,
    url: 'https://hoduse.tistory.com/222',
    thumbnail:
      'https://blog.kakaocdn.net/dn/b69j36/btrlY5maSgg/s2H6FaJ84Mgb0q8GOkUKi1/img.gif',
  },
  {
    title: '[출시] 포챠펭 2020 다이어리',
    date: '20190925',
    content: `올해도 포챠펭의 다이어리가 나왔습니다-

    작년과 같은 월간/프리노트 중심의 먼슬리플래너형 다이어리인데요,
    
    2019.12월부터 시작됩니다. 2021년 1~4월도 미니로 추가되어 있어요.
    
    작년보다 커진 월간 날짜칸과 미니 컬러링 도안이 있는 무지노트 페이지가 추가되었어요!
    
    은은한 핑크와 차분한 민트 2종의 심플한 커버 디자인으로 제작되었습니다.`,
    url: 'https://hoduse.tistory.com/180',
    thumbnail: 'https://t1.daumcdn.net/cfile/tistory/999DE2355D89D0E935',
  },
];

const Home = () => {
  const [posts, setPosts] = useState(INIT_POSTS);

  const addPostHandler = (post) => {
    console.log('addPostHandler');
    console.log(post);
    setPosts((prevState) => {
      return [post, ...prevState];
    });
  };

  return (
    <div className='home'>
      <div className='home__title'>Home</div>
      <PostForm postHandler={addPostHandler} />
      <div className='home__content'>
        <Category category={'일상'} posts={posts} />
      </div>
    </div>
  );
};

export default Home;
