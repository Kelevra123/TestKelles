import './App.css';
import Banner from './components/banner';
import Blog from './components/Blog';
import Categories from './components/categories';
import Foot from './components/foot';
import Footer from './components/footer';
import Header from './components/header';
import IconsBoard from './components/iconsBoard';
import Instagram from './components/Instagram';
import MobileToolbar from './components/mobileToolbar';
import Slider from './components/slider';
import TradeArea from './components/tradeArea';

function App() {
  return (
    <>
      <Header/>
      <MobileToolbar/>
      <Slider/>
      <Categories/> 
      <TradeArea title='TRENDING' text='Top view in this week'/>
      <Banner/>
      <TradeArea title='BEST SELLER' text='Top sale in this week'/>
      <Blog/>
      <Instagram/>
      <IconsBoard/>
      <Footer/>
      <Foot/>
  </>
  );
}

export default App;
