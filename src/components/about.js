
import '../css/about.css';
import HeaderComponent from './header';
import FooterComponent from '../components/footercomponent';

const AboutUsComponent = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div>
        <img className="back_image" src="https://www.susangreenecopywriter.com/wp-content/uploads/2013/01/iStock_000039291924_Medium.jpg"></img>
      </div>
      <br></br>
      <div class="row">
        The OAS Group operates a
        network of online advertisng platforms in over 10 countries,
        building market leading classifieds marketplaces that empower millions of people to buy,
        sell and create prosperity in local communities. With over 300 million monthly users worldwide
        , OAS Group makes it fast and easy to buy and sell almost anything online, such as household goods,
        phones, cars and houses. Through consumer brands including Avito, dubizzle,
        letgo, OAS, Stradia and Storia, more than 10 million things are listed on
        its market-leading apps and platforms every single month.
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}



export default AboutUsComponent;