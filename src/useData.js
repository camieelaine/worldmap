import { useState, useEffect } from "react";
import { csv } from "d3";

const csvUrl = `https://gist.githubusercontent.com/camieelaine/c05b42a256bc2392e9cc2b14762845e8/raw/4c2320fa2a6a88107330973f04b780f5d37e33ac/MatSuExperimentalFarmTemps1991-2020-2021.csv`;

/* const token = "cTLoSfiiZLWRufzAdLlXuanjroTSWSSk";
fetch(
  `https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets?stationid=USC00505733?datatypeid=TOBS`,
  {
    headers: {
      Authorization: `token ${token}`,
    },
  }
)
  .then((res) => res.json())
  .then((json) => console.log(json));
 */
export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.date = new Date(+d.date);
      d.mlytavgnormal = +d.mlytavgnormal;

      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);
  console.log(data);
  return data;
};
