import { Link } from 'react-router-dom';

import myAccountStyles from './ myAccountStyles.js';
import profileIcon from '../../images/6.png';
import background from '../../images/howlingAbyss.jpg';
import guildPostsStyles from '../GuildPosts/guildPostsStyles.js';

import screenshot from '../../images/5.jpg';

const style = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repat',
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
};

function MyAccount() {
  return (
    <div className={myAccountStyles.main}>
      <div className={myAccountStyles.boxContainer}>
        <div className={myAccountStyles.backgroundImage}>
          <img src={background} alt='Background' />
        </div>
        <div className={myAccountStyles.profileImageContainer}>
          <img
            className={myAccountStyles.profileImage}
            src={profileIcon}
            alt='ProfileIcon'
          />
        </div>
        <div className={myAccountStyles.textContainer}>
          <h2 className={myAccountStyles.textHeading}>Pesho</h2>
          <p className={myAccountStyles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            corrupti harum delectus est, animi id! Libero voluptas beatae
            expedita itaque at, perferendis nemo delectus nostrum iure, natus ea
            eius consequuntur. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ad sed, placeat porro fuga doloribus non ut
            consequuntur maiores eos quasi nemo id incidunt. Inventore, aliquam
            et ipsa sed facilis labore!
          </p>
        </div>
        <div className={myAccountStyles.ratingContainer}>
          <p>
            <span className='font-semibold'>Rating: </span> 25
          </p>
        </div>
        <button className={myAccountStyles.button}>Show My Posts...</button>
      </div>

      <section className={guildPostsStyles.section}>
        <article className={guildPostsStyles.boxContainer}>
          <div className={guildPostsStyles.infoBox}>
            <img
              className={guildPostsStyles.image}
              src='http://s01.riotpixels.net/data/02/57/025771f9-b82b-4467-9ce2-490edee9a3ca.jpg/screenshot.league-of-legends-wild-rift.1920x1080.2019-10-16.8.jpg
              '
              alt='Screenshot'
            />
          </div>
          <div className={guildPostsStyles.box} style={style}>
            <div className={guildPostsStyles.info}>
              <p>Author: Pesho</p>
              <br />
              <p>Topic: Nema</p>
              <br />
              <p>Rating: 100</p>
              <Link
                className={guildPostsStyles.bottomButton}
                to={`/details/$SSS`}
              >
                Details
              </Link>
              <div className='flex'>
                <button className={guildPostsStyles.bottomButton}>Edit</button>
                <button className={guildPostsStyles.bottomButton}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default MyAccount;
