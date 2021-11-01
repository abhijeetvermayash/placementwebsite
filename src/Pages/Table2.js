import React from "react";
import "./table2.css";

class Table2 extends React.Component {
  render() {
    return (
      <div className="tableclass">
        <center>
          <table class="table">
            <thead>
              <tr>
                <th>YEAR</th>
                <th>COMPANIES VISITED</th>
                <th>PLACEMENTS</th>
                {/* <th>Marks%</th>
              <th>Status</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="YEAR">2021</td>
                <td data-label="COMPANIES VISITED">
                  <a
                    style={{ color: "darkblue" }}
                    href="https://bit-bangalore.edu.in/wp-content/uploads/2021/07/Companies-during-2021.pdf"
                  >
                    Companies Visited 2021 (click here)
                  </a>
                </td>
                <td data-label="STATISTICS">
                  <a
                    style={{ color: "darkblue" }}
                    href="https://bit-bangalore.edu.in/wp-content/uploads/2021/06/Placement-Details-2020.xlsx-Sheet2.pdf"
                  >
                    Placements 2021 (click here)
                  </a>
                </td>
              </tr>
              <tr>
                <td data-label="YEAR">2020</td>
                <td data-label="COMPANIES VISITED">
                  <a
                    style={{ color: "darkblue" }}
                    href="https://bit-bangalore.edu.in/wp-content/uploads/2021/07/Companies-during-2020.pdf"
                  >
                    Companies Visited 2020 (click here)
                  </a>
                </td>
                <td data-label="STATISTICS">
                  <a
                    style={{ color: "darkblue" }}
                    href="https://bit-bangalore.edu.in/wp-content/uploads/2021/06/Placement-Details-2020.xlsx-Sheet2.pdf"
                  >
                    Placements 2020 (click here)
                  </a>
                </td>
              </tr>
              <tr>
                <td data-label="YEAR">2019</td>
                <td data-label="COMPANIES VISITED">
                  <a
                    style={{ color: "darkblue" }}
                    href="https://bit-bangalore.edu.in/wp-content/uploads/2020/12/Companies-during-2019.pdf"
                  >
                    Companies Visited 2019 (click here)
                  </a>
                </td>
                <td data-label="STATISTICS">
                  <a
                    style={{ color: "darkblue" }}
                    href="https://bit-bangalore.edu.in/wp-content/uploads/2019/08/Placemnet-Details-2019-2019-final-1.pdf"
                  >
                    Placements 2019 (click here)
                  </a>
                </td>
              </tr>
              <tr>
                <td data-label="YEAR">2018</td>
                <td data-label="COMPANIES VISITED">
                  <a
                    style={{ color: "darkblue" }}
                    href="https://bit-bangalore.edu.in/wp-content/uploads/2020/11/Companies-during-2018new.pdf"
                  >
                    Companies Visited 2018 (click here)
                  </a>
                </td>
                <td data-label="STATISTICS">
                  <a
                    style={{ color: "darkblue" }}
                    href="https://bit-bangalore.edu.in/wp-content/uploads/2019/09/Placemnet-Details-2018-Final-.pdf"
                  >
                    Placements 2018 (click here)
                  </a>
                </td>
              </tr>
              <tr>
                <td data-label="YEAR">2017</td>
                <td data-label="COMPANIES VISITED">
                  <a
                    style={{ color: "darkblue" }}
                    href="https://bit-bangalore.edu.in/wp-content/uploads/2020/11/Companies-during-2017.pdf"
                  >
                    Companies Visited 2017 (click here)
                  </a>
                </td>
                <td data-label="STATISTICS">
                  <a
                    style={{ color: "darkblue" }}
                    href="https://bit-bangalore.edu.in/wp-content/uploads/2019/09/Placement-Details-2017-Sheet1.pdf"
                  >
                    Placements 2017 (click here)
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}
export default Table2;
