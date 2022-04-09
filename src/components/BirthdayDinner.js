import gucci from "../images/gucci.jpg";
import area from "../images/area.jpg";
import dolce from "../images/dolce.jpg";
import ysl from "../images/ysl-heels.jpg";
import mesh from "../images/mesh-dress.jpg";

function BirthdayDinner() {
  return (
    <div className="dinner">
      <p>Birthday Dinner</p>
      <section className="outfit-sec">
        <br />
        <br />
        <div className="column">
          <p>Outfit One</p>
          <br />
          <a
            href="https://www.gucci.com/us/en/pr/women/ready-to-wear-for-women/dresses-for-women/jumpsuits-for-women/faille-jumpsuit-with-g-buckle-belt-p-674467Z8AUI1000"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img" src={gucci} alt="gucci-jumpsuit" width="350" />
          </a>

          <br />
          <br />
          <a
            href="https://www.gucci.com/us/en/pr/women/ready-to-wear-for-women/dresses-for-women/jumpsuits-for-women/faille-jumpsuit-with-g-buckle-belt-p-674467Z8AUI1000"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">GUCCI JUMPSUIT</button>
          </a>
          <img src={dolce} alt="dolce" width="300" />
          <a
            href="https://www.saksfifthavenue.com/product/dolce-gabbana-sculpted-heel-metallic-leather-sandals-0400013535394.html?dwvar_0400013535394_color=GOLD"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">DOLCE HEELS</button>
          </a>
        </div>
        <br />
        <br />
        <div className="column">
          <p>Outfit Two</p>
          <br />
          <a href="https://www.farfetch.com/shopping/women/area-crystal-embellished-mini-dress-item-17266847.aspx?storeid=13537">
            <img className="img" src={area} alt="area-dress" width="250" />
          </a>
          <br />
          <br />
          <a
            href="https://www.farfetch.com/shopping/women/area-crystal-embellished-mini-dress-item-17266847.aspx?storeid=13537"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">AREA CRYSTAL DRESS</button>
          </a>
          <img src={ysl} alt="ysl" width="300" />
          <a
            href="https://www.saksfifthavenue.com/product/saint-laurent-opyum-leather-sandals-0400099522701.html?dwvar_0400099522701_color=BLACK"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">YSL HEELS</button>
          </a>
        </div>
        <br />
        <br />
        <div className="column">
          <p>Outfit Two</p>
          <br />
          <a href="https://www.ssense.com/en-us/women/product/gauntlett-cheng/brown-polyester-mini-dress/9825471">
            <img className="img" src={mesh} alt="gauntlett-cheng" width="250" />
          </a>
          <br />
          <br />
          <a
            href="https://www.farfetch.com/shopping/women/area-crystal-embellished-mini-dress-item-17266847.aspx?storeid=13537"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">AREA CRYSTAL DRESS</button>
          </a>
          <img src={ysl} alt="ysl" width="300" />
          <a
            href="https://www.saksfifthavenue.com/product/saint-laurent-opyum-leather-sandals-0400099522701.html?dwvar_0400099522701_color=BLACK"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">YSL HEELS</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default BirthdayDinner;
