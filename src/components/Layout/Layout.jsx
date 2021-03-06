import s from './style.module.css';

const Layout = ({title, bgUrl, colorBg, children}) => {
  return (
    <section 
      className={s.root} style={{background: `url(${bgUrl})`, backgroundColor: `${colorBg}`}}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            {
              title && (<h3>{title}</h3>)
            }
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>
            {
              children
            }
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;