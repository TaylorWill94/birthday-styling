import gucci from "../images/gucci.jpg";
import area from "../images/area.jpg";
import dolce from "../images/dolce.jpg";
import ysl from "../images/ysl-heels.jpg";
import mesh from "../images/mesh-dress.jpg";
import gia from "../images/gia.jpg";
import laquan from "../images/laquan.jpg";
import black from "../images/black-heels.jpg";
import bra from "../images/gucci-bra.webp";
import pants from "../images/pants.webp";
import mugler from "../images/mugler-pants.webp";
import gucci_bra from "../images/gucci-black-bra.webp";

function BirthdayDinner() {
  return (
    <div className="dinner">
      <h1>Birthday Dinner 🎂</h1>
      <section className="outfit-sec">
        <br />
        <br />
        <div className="column">
          <h1>OUTFIT ONE</h1>
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
          <p>OUTFIT TWO</p>
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
          <br />
          <br />
          <h1>OUTFIT THREE</h1>
          <br />
          <a href="https://www.ssense.com/en-us/women/product/gauntlett-cheng/brown-polyester-mini-dress/9825471">
            <img className="img" src={mesh} alt="gauntlett-cheng" width="100" />
          </a>
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/gauntlett-cheng/brown-polyester-mini-dress/9825471"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">GUANLETT CHENG DRESS</button>
          </a>
          <img src={gia} alt="gia-heels" width="300" />
          <a
            href="https://www.saksfifthavenue.com/product/gia-borghini-leather-strappy-sandals-0400015709099.html?dwvar_0400015709099_color=COFFEE%20BROWN"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">GIA HEELS</button>
          </a>
        </div>
        <div className="column">
          <p>OUTFIT FOUR</p>
          <br />
          <a href="https://laquansmith.com/collections/catsuit/products/off-the-shoulder-sheer-and-velvet-catsuit">
            <img className="img" src={laquan} alt="laquan-smith" width="300" />
          </a>
          <br />
          <br />
          <a
            href="https://laquansmith.com/collections/catsuit/products/off-the-shoulder-sheer-and-velvet-catsuit"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">LAQUAN SMITH</button>
          </a>
          <img src={black} alt="black-heels" width="300" />
          <a
            href="https://www.saksfifthavenue.com/product/dolce-gabbana-sculpted-heel-patent-leather-sandals-0400012630540.html?dwvar_0400012630540_color=NERO"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">DOLCE & GABANA</button>
          </a>
        </div>
        <div className="column">
          <h1>OUTFIT FIVE</h1>
          <br />
          <a href="https://www.gucci.com/us/en/pr/women/ready-to-wear-for-women/tops-shirts-for-women/tops-for-women/gg-embroidered-silk-top-p-681155ZAIDC7278">
            <img className="img" src={bra} alt="gucci-bra" width="350" />
          </a>
          <br />
          <br />
          <a
            href="https://www.gucci.com/us/en/pr/women/ready-to-wear-for-women/tops-shirts-for-women/tops-for-women/gg-embroidered-silk-top-p-681155ZAIDC7278"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">GUCCI BRA</button>
          </a>
          <br />
          <br />
          <br />
          <img src={pants} alt="alexander-wang-pants" width="200" />
          <a
            href="https://www.ssense.com/en-us/women/product/alexander-wang/black-polyester-trousers/9374741"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">ALEXANDER WANG</button>
          </a>
        </div>
        <br />
        <br />
        <div className="column">
          <br />
          <br />
          <p>OUTFIT SIX</p>
          <br />
          <a href="https://www.ssense.com/en-us/women/product/gucci/black-gg-embroidered-tulle-bra/9421761">
            <img className="img" src={gucci_bra} alt="gucci-bra" width="350" />
          </a>
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/gucci/black-gg-embroidered-tulle-bra/9421761"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">GUCCI BRA</button>
          </a>
          <br />
          <br />
          <br />
          <img src={mugler} alt="mugler-pants" width="300" />
          <a
            href="https://www.ssense.com/en-us/women/product/mugler/blue-spiral-jeans/9125821"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">MUGLER</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default BirthdayDinner;
