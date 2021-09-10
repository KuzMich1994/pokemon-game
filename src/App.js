import Header from "./components/Header/Header.jsx";
import Layout from "./components/Layout/Layout.jsx";
import bgUrl from './components/Layout/img/background.jpg';
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const title = 'This is title';
  const descr = 'This is Description';
  return (
    <>
      <Header title={title} descr={descr} />
      <Layout title={title} descr={descr} bgUrl={bgUrl} />
      <Layout title={title} descr={descr} colorBg={'#e2e2e2'} />
      <Layout title={title} descr={descr} bgUrl={bgUrl} />
      <Footer />
    </>
  );
}

export default App;
