import homeStyles from './HomeStyles.js';

function Home() {
  return (
    <div className='h-screen text-center items-center bg-gray-800'>
      <h1 className={homeStyles.header}>The Justice League</h1>
      <h2 className={homeStyles.secondaryHeader}>
        The Justice League is the name of our guild in League of Legends – one
        legendary team, playing one legendary game!{' '}
      </h2>
      <p className={homeStyles.info}>Guild Level: 8</p>
      <p className={homeStyles.info}>Guild Points: 30700/34000</p>
      <p className={homeStyles.info}>Guild Energy: 3475/6000</p>
      <p className={homeStyles.info}>Guild Members: 51</p>
      <p className={homeStyles.info}>Guild Age: 92 days</p>
      <div className={homeStyles.imageBox}>
        <img
          src='https://lisbdnet.com/wp-content/uploads/2021/10/best-ult-in-lol.jpg'
          alt=''
        />
      </div>
    </div>
  );
}

export default Home;
