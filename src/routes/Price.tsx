import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { ICoinContext } from "./Coin";

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  div {
    margin-bottom: 20px;
    label {
      display: block;
      color: ${(props) => props.theme.accentColor};
      font-weight: bold;
      font-size: 12px;
      margin-bottom: 5px;
    }
    span {
      font-size: 18px;
      padding: 5px;
    }
  }
`;

interface ItemContext {
  label: string;
  value: string | number;
}

function Item({ label, value }: ItemContext) {
  return (
    <div>
      <label>{label}</label>
      <span>{typeof value === "number" ? value.toFixed(2) : value}</span>
    </div>
  );
}

const caption = {
  price: "Price",
  volume_24h: "Volume 24h",
  volume_24h_change_24h: "Volume change 24h",
  market_cap: "Market cap",
  market_cap_change_24h: "Market cap change 24h",
  percent_change_15m: "Percent change 15 minutes",
  percent_change_30m: "Percent change 30 minutes",
  percent_change_1h: "Percent change 1 hour",
  percent_change_6h: "Percent change 6 hour",
  percent_change_12h: "Percent change 12 hour",
  percent_change_24h: "Percent change 24 hour",
  percent_change_7d: "Percent change 7 days",
  percent_change_30d: "Percent change 30 days",
  percent_change_1y: "Percent change 1 year",
  ath_price: "All time high price",
  ath_date: "All time high date",
  percent_from_price_ath: "Percent from all time high price",
};

function Price() {
  const {
    tickersData: {
      quotes: { USD: data },
    },
  } = useOutletContext<ICoinContext>();

  // console.log(caption["percent_from_price_ath"]);
  return (
    <Container>
      {(Object.keys(data) as Array<keyof typeof data>).map((key) => (
        <Item key={key} label={caption[key]} value={data[key]} />
      ))}
    </Container>
  );
}

export default Price;
