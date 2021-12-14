import guildPostsStyles from './guildPostsStyles.js';
import screenshot from '../../images/5.jpg';
import background from '../../images/7.jpg';

const style = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repat',
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
};

function GuildPosts() {
  return (
    <div className={guildPostsStyles.main}>
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
      </section>
    </div>
  );
}

export default GuildPosts;
