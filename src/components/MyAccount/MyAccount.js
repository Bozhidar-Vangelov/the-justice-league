import myAccountStyles from './ myAccountStyles.js';
import profileIcon from '../../images/6.png';
import background from '../../images/7.jpg';
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

      <section className='container mx-auto flex flex-wrap'>
        <article className={guildPostsStyles.boxContainer}>
          <div className={guildPostsStyles.infoBox}>
            <img src={screenshot} alt='Screenshot' />
          </div>
          <div className={guildPostsStyles.box} style={style}>
            <div className={guildPostsStyles.info}>
              <p>Author: Pesho</p>
              <br />
              <p>Game type: ARAM</p>
              <br />
              <p>
                Description: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Unde, quasi ducimus iure minus, numquam earum quod quia
                non pariatur quos eius. Provident, inventore esse minus quos
                quis quidem nam tenetur.
              </p>
              <br />
              <p>Game result: Win</p>
              <br />
              <div className={guildPostsStyles.buttons}>
                <button className={guildPostsStyles.upVote}>UpVote</button>
                <p>Rating: 25</p>
                <button className={guildPostsStyles.downVote}>DownVote</button>
              </div>
            </div>
          </div>
        </article>
        <article className={guildPostsStyles.boxContainer}>
          <div className={guildPostsStyles.infoBox}>
            <img src={screenshot} alt='Screenshot' />
          </div>
          <div className={guildPostsStyles.box} style={style}>
            <div className={guildPostsStyles.info}>
              <p>Author: Pesho</p>
              <br />
              <p>Game type: ARAM</p>
              <br />
              <p>
                Description: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Unde, quasi ducimus iure minus, numquam earum quod quia
                non pariatur quos eius. Provident, inventore esse minus quos
                quis quidem nam tenetur.
              </p>
              <br />
              <p>Game result: Win</p>
              <br />
              <div className={guildPostsStyles.buttons}>
                <button className={guildPostsStyles.upVote}>UpVote</button>
                <p>Rating: 25</p>
                <button className={guildPostsStyles.downVote}>DownVote</button>
              </div>
            </div>
          </div>
        </article>
        <article className={guildPostsStyles.boxContainer}>
          <div className={guildPostsStyles.infoBox}>
            <img src={screenshot} alt='Screenshot' />
          </div>
          <div className={guildPostsStyles.box} style={style}>
            <div className={guildPostsStyles.info}>
              <p>Author: Pesho</p>
              <br />
              <p>Game type: ARAM</p>
              <br />
              <p>
                Description: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Unde, quasi ducimus iure minus, numquam earum quod quia
                non pariatur quos eius. Provident, inventore esse minus quos
                quis quidem nam tenetur.
              </p>
              <br />
              <p>Game result: Win</p>
              <br />
              <div className={guildPostsStyles.buttons}>
                <button className={guildPostsStyles.upVote}>UpVote</button>
                <p>Rating: 25</p>
                <button className={guildPostsStyles.downVote}>DownVote</button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default MyAccount;
