import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { redirect, useOutletContext } from "react-router-dom";
import { useTheme } from "styled-components";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart() {
  const coinId = useOutletContext();
  const theme = useTheme();
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId as string),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: data?.map((price) => [
                Number(price.time_close) * 1000,
                [price.open, price.high, price.low, price.close],
              ]) as number[][],
            },
          ]}
          options={{
            theme: {
              mode: theme.name as "dark" | "light" | undefined,
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: { show: true, borderColor: "#718093" },
            yaxis: {
              show: true,
              labels: {
                formatter: (val) => val.toFixed(0),
              },
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: true },
              labels: { show: true },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
