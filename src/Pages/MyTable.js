import React, { Fragment } from "react";
import "./mytable.scss";

import Table from "./Table";

const driversData = [
  {
    number: 1,
    name: "ACCELALPHA",
    team: "19",
    internships: "",
  },
  {
    number: 2,
    name: "ACCENTURE",
    team: "35",
    internships: "",
  },
  {
    number: 3,
    name: "AMDOCS",
    team: "24",
    internships: "",
  },
  {
    number: 4,
    name: "BOEING",
    team: "8",
    internships: "",
  },
  {
    number: 5,
    name: "BRILLIO",
    team: "3",
    internships: "",
  },
  {
    number: 6,
    name: "CAPGEMINI",
    team: "68",
    internships: "",
  },
  {
    number: 7,
    name: "CIMPRESS",
    team: "8",
    internships: "",
  },
  {
    number: 8,
    name: "CISCO",
    team: "2",
    internships: "",
  },
  {
    number: 9,
    name: "COGNIZANT",
    team: "121",
    internships: "",
  },
  {
    number: 10,
    name: "DATACORP TRAFFIC",
    team: "3",
    internships: "",
  },
  {
    number: 11,
    name: "DELL TECHNOLOGIES",
    team: "2",
    internships: "",
  },
  {
    number: 12,
    name: "ECO LABS",
    team: "8",
    internships: "",
  },
  {
    number: 13,
    name: "ELLUCIAN",
    team: "12",
    internships: "",
  },
  {
    number: 14,
    name: "EPICOR",
    team: "4",
    internships: "",
  },
  {
    number: 15,
    name: "FIDELITY",
    team: "14",
    internships: "14",
  },
  {
    number: 16,
    name: "INFOSYS",
    team: "22",
    internships: "",
  },
  {
    number: 17,
    name: "KANTAR AQ",
    team: "4",
    internships: "",
  },
  {
    number: 18,
    name: "MICROFOCUS",
    team: "6",
    internships: "",
  },
  {
    number: 19,
    name: "MISTRAL",
    team: "8",
    internships: "",
  },
  {
    number: 20,
    name: "ONE DIRECT",
    team: "3",
    internships: "",
  },
  {
    number: 21,
    name: "OPTUM",
    team: "18",
    internships: "",
  },
  {
    number: 22,
    name: "ORACLE",
    team: "15",
    internships: "3",
  },
  {
    number: 23,
    name: "PERSISTENT",
    team: "42",
    internships: "",
  },
  {
    number: 24,
    name: "ROBERT BOSCH",
    team: "37",
    internships: "",
  },
  {
    number: 25,
    name: "ROBOSOFT",
    team: "13",
    internships: "",
  },
  {
    number: 26,
    name: "SAPIENTURY",
    team: "1",
    internships: "",
  },
  {
    number: 27,
    name: "MUSIGMA",
    team: "31",
    internships: "",
  },
  {
    number: 28,
    name: "SUPER 77",
    team: "",
    internships: "1",
  },
  {
    number: 29,
    name: "TARE ZAMEEN FOUNDATION ",
    team: "",
    internships: "1",
  },
  {
    number: 30,
    name: "TRUMINDS",
    team: "7",
    internships: "",
  },
  {
    number: 31,
    name: "WIPRO",
    team: "2",
    internships: "",
  },
  {
    number: 32,
    name: "ZS ASSOCIATES",
    team: "10",
    internships: "",
  },
  {
    number: 33,
    name: "TEKSYSTEM",
    team: "2",
    internships: "",
  },
  {
    number: 34,
    name: "MERCEDES BENZ",
    team: "12",
    internships: "",
  },
  {
    number: 35,
    name: "PUBLICIS SAPIENT",
    team: "5",
    internships: "",
  },
  {
    number: 36,
    name: "ZENSOR",
    team: "19",
    internships: "",
  },
];

const tracksData = [
  {
    name: "Spa-Francorchamps",
    country: "Belgium",
    length: 7.004,
    numberOfLaps: 44,
  },
  {
    name: "Circuit de Monaco",
    country: "Monaco",
    length: 3.337,
    numberOfLaps: 78,
  },
  {
    name: "Silverstone",
    country: "England",
    length: 5.891,
    numberOfLaps: 52,
  },
  {
    name: "Suzuka",
    country: "Japan",
    length: 5.807,
    numberOfLaps: 53,
  },
  {
    name: "Hockenheimring",
    country: "Germany",
    length: 4.574,
    numberOfLaps: 67,
  },
];

const MyTable = () => {
  return (
    <Fragment>
      {/* <Header title="Dynamic &amp; Responsive Table Component" /> */}
      <Table
        tableData={driversData}
        headingColumns={["S. NO", "COMPANY", "OFFERS", "INTERNSHIPS"]}
        title="PLACEMENTS 2022*"
      />
      {/* <Table
        tableData={tracksData}
        headingColumns={["Name", "Country", "Length(km)", "Number of laps"]}
        title="Top F1 tracks"
        breakOn="small"
      /> */}
    </Fragment>
  );
};

export default MyTable;
