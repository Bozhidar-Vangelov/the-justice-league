import guildPageStyles from './guildPageStyles.js';

function GuildPage() {
  return (
    <div className={guildPageStyles.main}>
      <section className='container mx-auto flex flex-wrap'>
        <article className={guildPageStyles.boxContainer}>
          <div className={guildPageStyles.box}></div>
        </article>
      </section>
    </div>
  );
}

export default GuildPage;
