import gucci from "../images/gucci-top.jpg";
import wang from "../images/alexander-wang.jpg";
import top from "../images/jacquemus-top.webp";
import trousers from "../images/gucci-trousers.webp";

function BirthdayOutfits() {
  return (
    <div className="outfits">
      <h1>Birthday Outfits 🥳</h1>
      <section className="outfit-sec">
        <br />
        <br />
        <div className="column">
          <p>OUTFIT ONE</p>
          <br />
          <a
            href="https://www.gucci.com/us/en/pr/women/ready-to-wear-for-women/tops-shirts-for-women/tops-for-women/gg-jersey-jacquard-sleeveless-top-p-693286XJEFY7388"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img" src={gucci} alt="gucci-top" width="350" />
          </a>

          <br />
          <br />
          <a
            href="https://www.gucci.com/us/en/pr/women/ready-to-wear-for-women/tops-shirts-for-women/tops-for-women/gg-jersey-jacquard-sleeveless-top-p-693286XJEFY7388"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">GUCCI TOP</button>
          </a>
          <img src={wang} alt="alexander-wang" width="300" />
          <a
            href="https://www.bloomingdales.com/shop/product/alexander-wang-womens-julie-strappy-high-heel-sandals?ID=3924304&pla_country=US&cm_mmc=Google-PLA-ADC-_-GMM2+-+Center+Core+-+Shoes-_-Shoes-_-192722200575USA-_-go_cmp-13048290360_adg-123409840018_ad-520724334467_pla-1246168337695_dev-c_ext-_prd-192722200575USA&gclid=CjwKCAjw3cSSBhBGEiwAVII0Z7CXcfZSLtpRPLHr1eB75Co5TYQGZSeJcVsJjk60NVzzsh9WlWXBfRoC2cQQAvD_BwE"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">ALEXANDER WANG HEELS</button>
          </a>
        </div>
        <br />
        <br />
        <div className="column">
          <p>OUTFIT TWO</p>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/jacquemus/black-le-bandeau-beijo-bra/9006301"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img" src={top} alt="jacquemus-top" width="350" />
          </a>

          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/jacquemus/black-le-bandeau-beijo-bra/9006301"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">JACQUEMUS TOP</button>
          </a>
          <img src={trousers} alt="gucci-trousers" width="300" />
          <a
            href="https://www.ssense.com/en-us/women/product/gucci/brown-gg-canvas-trousers/9421431"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">GUCCI TROUSERS</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default BirthdayOutfits;
