import gucci from "../images/gucci.jpg";
import area from "../images/area.jpg";

function BirthdayDinner() {
  return (
    <div className="dinner">
      <p>Birthday Dinner</p>
      <section className="outfit-sec">
        <br />
        <br />
        <a
          href="https://www.gucci.com/us/en/pr/women/ready-to-wear-for-women/dresses-for-women/jumpsuits-for-women/faille-jumpsuit-with-g-buckle-belt-p-674467Z8AUI1000"
          target="_blank"
          rel="noreferrer"
        >
          <img className="img" src={gucci} alt="gucci-jumpsuit" width="500" />
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
        <br />
        <br />
        <a href="https://www.farfetch.com/shopping/women/area-crystal-embellished-mini-dress-item-17266847.aspx?storeid=13537">
          <img className="img" src={area} alt="area-dress" width="400" />
        </a>
        <br />
        <br />
        <a href='"https://www.farfetch.com/shopping/women/area-crystal-embellished-mini-dress-item-17266847.aspx?storeid=13537"'>
          <button className="gucci-btn">AREA CRYSTAL DRESS</button>
        </a>
      </section>
    </div>
  );
}

export default BirthdayDinner;
