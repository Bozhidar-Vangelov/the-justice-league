import guildMembersStyles from './guildMembersStyles.js';
import profileIcon from '../../images/6.png';

function GuildMembers() {
  return (
    <div className={guildMembersStyles.main}>
      <section className='container mx-auto flex flex-wrap'>
        <article className={guildMembersStyles.boxContainer}>
          <div className={guildMembersStyles.box}>
            <div className={guildMembersStyles.infoBox}>
              <img src={profileIcon} alt='ProfileIcon' />
            </div>
            <div className={guildMembersStyles.info}>
              <p>Summoner Name: Pesho</p>
              <p>Level: 15</p>
              <p>Server: EUNE</p>
              <br />
              <p>Favourite champion: Garen</p>
              <br />
              <div className='flex justify-between'>
                <button className={guildMembersStyles.upVote}>UpVote</button>
                <button className={guildMembersStyles.downVote}>
                  DownVote
                </button>
              </div>
              <p>Rating: 25</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default GuildMembers;
