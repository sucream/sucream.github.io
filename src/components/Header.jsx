import './Header.css';

const Header = () => {
  return (
    <header>
      <a className='logo' href='/'>
        <img className='logo__image' src='/logo192.png' alt='logo' />
        <span className='logo__title'>sucream</span>
      </a>

      <div className='search_box'>
        <input
          className='search_box__input'
          type={'text'}
          aria-label='Search'
        />
        <button className='search_box__search' type='submit'>
          <svg
            width='20'
            height='20'
            className='DocSearch-Search-Icon'
            viewBox='0 0 20 20'
          >
            <path
              d='M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z'
              stroke='currentColor'
              fill='none'
              fillRule='evenodd'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
