import white from "../images/white-dress-stella.webp";
import bottega from "../images/bottega.jpg";
import pyt from "../images/vacation-dress.jpg";
import chain from "../images/chain-top.webp";
import bal from "../images/bal.webp";
import denim from "../images/denim-shorts.webp";
import blu from "../images/blu-heels.webp";
import leather from "../images/leather-skirt.webp";
import givenchy from "../images/givenchy-heels.webp";

function Vacation() {
  return (
    <div className="vacation">
      <h1>Vacation 🏖</h1>
      <section className="outfit-sec">
        <br />
        <br />
        <div className="column">
          <br />
          <br />
          <h1>OUTFIT ONE</h1>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/stella-mccartney/white-viscose-dress/9590061"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img" src={white} alt="white-dress" width="350" />
          </a>

          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/stella-mccartney/white-viscose-dress/9590061"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">STELLA DRESS</button>
          </a>
          <img src={bottega} alt="bottega-heels" width="300" />
          <a
            href="https://www.saksfifthavenue.com/product/bottega-veneta-crochet-pinwheel-sandals-0400015482271.html?dwvar_0400015482271_color=KIWI"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">BOTTEGA HEELS</button>
          </a>
        </div>
        <div className="column">
          <br />
          <br />
          <p>OUTFIT TWO</p>
          <br />
          <a
            href="https://www.prettylittlething.us/shape-cream-soft-rib-tie-front-bardot-midaxi-dress.html"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img" src={pyt} alt="white-dress" width="350" />
          </a>

          <br />
          <br />
          <a
            href="https://www.prettylittlething.us/shape-cream-soft-rib-tie-front-bardot-midaxi-dress.html"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">CLICK ME</button>
          </a>
          <img src={blu} alt="blumarine-heels" width="300" />
          <a
            href="https://www.ssense.com/en-us/women/product/blumarine/pink-butterfly-spiral-heeled-sandals/9568491"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">BLUMARINE HEELS</button>
          </a>
          <br />
          <br />
          <br />
          <br />
        </div>

        <div className="column">
          <br />
          <br />
          <br />
          <br />
          <h1>OUTFIT THREE</h1>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/alexander-wang/silver-cowl-crop-halter-top/8573631"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img" src={chain} alt="chain-top" width="200" />
          </a>

          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/alexander-wang/silver-cowl-crop-halter-top/8573631"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">ALEXANDER WANG TOP</button>
          </a>
          <br />
          <br />
          <br />
          <img src={leather} alt="leather-skirt" width="300" />
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/aleksandre-akhalkatsishvili/black-faux-leather-mini-skirt/9769951"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">CLICK ME</button>
          </a>
          <br />
          <br />
          <img src={givenchy} alt="givenchy-heels" width="200" />
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/givenchy/black-triple-toes-horn-heeled-sandals/7174281"
            alt="givenchy-heels"
            target="-blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">GIVENCHY HEELS</button>
          </a>
          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="column">
          <br />
          <br />
          <p>OUTFIT FOUR</p>
          <br />
          <br />
          <p>
            <em>
              I would cut this top and tie it for a more sexier, sportier look!
            </em>
          </p>
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/balenciaga/red-logo-t-shirt/8249661"
            target="_blank"
            rel="noreferrer"
          >
            <img className="img" src={bal} alt="balenciaga-shirt" width="200" />
          </a>
          <br />
          <br />
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/balenciaga/red-logo-t-shirt/8249661"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">BALENCIAGA T-SHIRT</button>
          </a>
          <br />
          <br />
          <br />
          <img src={denim} alt="area-shorts" width="200" />
          <br />
          <br />
          <a
            href="https://www.ssense.com/en-us/women/product/area/blue-butterfly-shorts/9540511"
            target="_blank"
            rel="noreferrer"
          >
            <button className="gucci-btn">AREA SHORTS</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Vacation;
