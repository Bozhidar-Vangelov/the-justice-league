import guildMembersStyles from './guildMembersStyles.js';

function GuildMembers() {
  return (
    <div className={guildMembersStyles.main}>
      <section className='container mx-auto flex flex-wrap'>
        <article className={guildMembersStyles.boxContainer}>
          <div className={guildMembersStyles.box}></div>
        </article>
      </section>
    </div>
  );
}

export default GuildMembers;
