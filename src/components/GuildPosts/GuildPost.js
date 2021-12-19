import guildPostsStyles from './guildPostsStyles.js';
import background from '../../images/7.jpg';

const style = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repat',
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
};

function GuildPost({ post }) {
  return (
    <article className={guildPostsStyles.boxContainer}>
      <div className={guildPostsStyles.infoBox}>
        <img className={guildPostsStyles.image} src={post.image} alt='Screenshot' />
      </div>
      <div className={guildPostsStyles.box} style={style}>
        <div className={guildPostsStyles.info}>
          <p>Author: Pesho</p>
          <br />
          <p>Game type: {post.type}</p>
          <br />
          <p>Game result: {post.result}</p>
          <br />
          <div className={guildPostsStyles.buttons}>
            <button className={guildPostsStyles.upVote}>UpVote</button>
            <p className={guildPostsStyles.rating}>Rating: 100</p>
            <button className={guildPostsStyles.downVote}>DownVote</button>
          </div>
          <div className='text-center'>
            <button className={guildPostsStyles.showDescription}>
              Show description...
            </button>
          </div>
          <p className='break-words'>{post.description}</p>
        </div>
      </div>
    </article>
  );
}

export default GuildPost;
