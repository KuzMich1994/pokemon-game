import Header from "../../components/Header/Header.jsx";
import Layout from "../../components/Layout/Layout.jsx";
import bgUrl from '../../components/Layout/img/background.jpg';
import Footer from "../../components/Footer/Footer.jsx";
// import './App.css';
import POKEMON_LIST from '../../api/pokemon-list.json';
import PokemonCard from "../../components/PokemonCard/PokemonCard.jsx";
import s from './style.module.css';
import MenuHeader from "../../components/MenuHeader/MenuHeader.jsx";

function HomePage({ onChangePage }) {
  const title = 'This is title';
  const descr = 'This is Description';
  const handleClickButton = (page) => {
    onChangePage && onChangePage(page);
  }
  return (
    <>
      <MenuHeader />
      <Header 
        title={title}
        descr={descr}
        onClickButton={handleClickButton}
      />
      <Layout 
        title={title}
        bgUrl={bgUrl}
      >
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
      </Layout>
      <Layout 
        title={title}
        colorBg={'#e2e2e2'}
      >
        <div className={s.flex}>
          {
            POKEMON_LIST.map(item => <PokemonCard 
              img={item.img}
              key={item.id}
              values={item.values}
              name={item.name}
              type={item.type}
              id={item.id}
            />)
          }
        </div>
      </Layout>
      <Layout title={title} bgUrl={bgUrl}>
        <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
      </Layout>
      <Footer />
    </>
  );
}

export default HomePage;
