import React from "react";
import { Element } from "react-scroll";
import BackgroundVideo from "./BackgroundVideo";
import Counting from "./Counting";
import "./home.css";
import MyCaro from "./MyCaro";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Graph from "./Graph";
import Pies from "./Pies";
import MyTable from "./MyTable";
import Table2 from "./Table2";
import Img from "../images/one.jpg";
import MyCaro2 from "./MyCaro2";

function App() {
  const videoSource =
    "https://firebasestorage.googleapis.com/v0/b/homoeomedicare-935f2.appspot.com/o/bit.mp4?alt=media&token=c9940b5d-7444-40eb-bb5d-a1ea3abc39e4";
  const scrollToBottom = () => {
    const bottomEle = document.getElementById("video-id");
    bottomEle.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <BackgroundVideo blur={2} videoSource={videoSource}>
        <div className="content">
          {/* <div className="sub-content"> */}
          <h1>
            <h1>
              ALL OUR DREAMS CAN COME TRUE-
              <br />
              IF WE HAVE COURAGE TO PERSUE THEM!
              <br />
            </h1>
          </h1>
          {/* </div> */}
        </div>
      </BackgroundVideo>
      {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  */}
      <div style={{ height: 150, backgroundColor: "white" }}></div>
      <div id="home" className="place">
        <h1>Placements 2022*</h1>
        <br />

        <div class="row" style={{ padding: "30px" }}>
          <div class="column">
            <Counting
              start="0"
              end="315"
              heading="Placed Students"
              suffix="+"
            />
          </div>
          <div class="column">
            <Counting start="0" end="600" heading="No of offers" suffix="+" />
          </div>
          <div class="column">
            <Counting
              start="0"
              end="25"
              heading="Highest package"
              suffix="LPA"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* 
      <div style={{ height: 100, backgroundColor: "white" }}></div>
      <div id={"placementprocess"} style={{ backgroundColor: "white" }}></div> */}
      {/* <hr /> */}
      <br />
      <br />
      {/* carousel */}
      <MyCaro />
      {/* carousel ends /////////////////////// */}
      <br />
      <br />
      {/* <hr /> */}
      <br />
      <br />
      {/* Placement Stats */}
      <div id="placementStats">
        <h1>Placement Statistics</h1>
      </div>
      <br />
      <br />
      <br />
      <div class="bar">
        <Graph />
      </div>
      <div className="pies">
        <br />
        <br />
        <div
          style={{
            background: "white",
            // boxShadow: "3px 5px 3px 3px ",
            padding: "20px",
          }}
        >
          {/* <h1>Placement At BIT</h1> */}
          <p style={{ alignItems: "left", textAlign: "left" }}>
            The Center provides employment opportunities for the students in
            acclaimed world class organisations. Every year more than 100 top
            notch companies visit our Institution and conduct placement
            activities for the full time recruitment and internship.
            <br />
            <br /> The Training and Placement Centre takes immense pleasure in
            stating that around 70 percent of eligible students are placed in
            their dream companies with attractive packages. The average
            compensation is 7 lacs and highest compensation will be 25 LPA.
            <br />
            <br />
            Leading companies like Infosys, Wipro, Accenture, Cisco, Akamai,
            Microfocus, HPE, SAP, Nokia, Microchip, BEL, Mercedes Benz, Bosch,
            L&T- ECC and Brigade Group recruit our students.
          </p>
        </div>

        <br />
      </div>
      <br />
      <br />
      <div class="biggap"></div>
      <br />
      <br />
      {/* <hr /> */}
      <br />
      <br />
      <MyTable />
      <div style={{ height: 150, backgroundColor: "white" }}>
        <h1>Placements 2022*</h1>
        <br />

        <div class="row" style={{ padding: "30px" }}>
          <div class="column">
            <Counting
              start="0"
              end="315"
              heading="Placed Students"
              suffix="+"
            />
          </div>
          <div class="column">
            <Counting start="0" end="600" heading="No of offers" suffix="+" />
          </div>
          <div class="column">
            <Counting
              start="0"
              end="25"
              heading="Highest package"
              suffix="LPA"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <div class="bar">
          <br />
          <br />
          <div className="mycard">
            <h1>Branch Wise Placement Statistics of BIT in 2022*</h1>
          </div>

          <br />
        </div>
        <div className="pies">
          <Pies />
          <br />
        </div>
      </div>
      <div className="biggap2"></div>
      <h1>PREVIOUS YEAR STATISTICS</h1>
      <Table2 />
      <br />
      <br />

      <br />
      <br />
      <h1>Training and Placement Cell</h1>

      <div class="row1">
        <div class="column1">
          <p style={{ textAlign: "left", fontWeight: "bold" }}>
            Training and Placement Center was established in the year 1994 under
            the visionary leadership of Dr.Aswath.M.U, with the objective of
            making our students self-reliant, capable, skilled and competent
            technocrats. Many milestones have been set by our center. To keep
            our students professionally updated to the unfolding dynamic
            environment, our center offers apex quality training services, many
            career guidance and development programmes on personality
            development, communication skills, Industry to Institute Convergence
            expert interaction sessions, aptitude tests and logical reasoning
            sessions, confidence grooming sessions, Group Discussion and Mock
            Interview Sessions, Public Sector Competitive Exams Training and
            Industry Internship Programs. Due to which our students are well
            equipped to handle the working norms of the industry.
          </p>
        </div>
        <div class="column1">
          <p style={{ textAlign: "left", fontWeight: "bold" }}>
            Our resourceful alumnae have set commendable standards in the
            corporate world through their admirable contributions. The
            consistent placement record illustrates our commitment and devotion
            towards creating employment opportunities to our students. We have
            excellent infrastructure facilities in terms of full-fledged seminar
            hall, training hall, conference and board rooms, interview cabins,
            full-fledged computer labs for conducting recruitment process.
          </p>
        </div>
      </div>
      <br />
      <MyCaro />
      <div class="row1">
        <div class="column1 card">
          <h2>VISION</h2>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>
            To enhance and equip our students with the conceptualized
            employability and professional skills in meeting the dynamic
            challenges of the corporate world and acquaint our faculty members
            with current industrial trends.
          </p>
        </div>
        <div class="column1 card">
          <h2>MISSION</h2>
          <p
            style={{
              textAlign: "left",
              fontWeight: "bold",
              marginLeft: "20px",
            }}
          >
            <ul>
              <li>To train the students to meet the industry requirements.</li>
              <li>To guide the students to achieve their career goals.</li>
              <li>
                To provide ample placement opportunities for the students to get
                their dream jobs.
              </li>
              <li>
                To equip our faculty members with the latest industry
                requisites.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <MyCaro />
      <br />
      <h1>OBJECTIVE OF TRAINING AND PLACEMENT CENTRE</h1>
      <div class="card" style={{ backgroundColor: "wheat" }}>
        <p
          style={{
            textAlign: "left",
            fontWeight: "bold",
            marginLeft: "20px",
          }}
        >
          <h2>The Objectives of the Centre Are As Under</h2>
          <ul>
            <li>To enhance industry-institute interaction.</li>
            <li>
              To organize seminar, training programmes and work-shops for
              students so as to help students to learn latest technologies
            </li>
            <li>
              To organize seminars, technical talks by eminent personalities
              from academic institutes and industry to enhance the awareness of
              students.
            </li>
            <li>To provide guidance and information for higher studies.</li>
            <li>
              To conduct mock tests, interviews, Group Discussions for students.
            </li>
            <li>
              To conduct training programs to enhance the communication skills
              and develop inter-personal skills of students.
            </li>
            <li>
              To arrange campus-interviews by inviting leading companies to
              recruit students
            </li>
          </ul>
        </p>
      </div>
      <br />
      <div id="placementProcess">
        <h1>PROCESS OF PLACEMENT</h1>
        <br />
        <div class="card" style={{ backgroundColor: "wheat" }}>
          <p
            style={{
              textAlign: "left",
              fontWeight: "bold",
              marginLeft: "20px",
            }}
          >
            <h2>Placement Process in BIT</h2>
            <ul>
              <li>
                Every year the enrollment process for placements begins when
                students come to pre final year.
              </li>
              <li>
                Each department will have one faculty and two student
                coordinators to facilitate training and placement activities.
              </li>
              <li>
                The coordinators organize mock test and group discussion in
                their respective classes. <br />
                External trainers are invited to train the students on solving
                the aptitude, prepare for group discussion, interview facing
                skills and technical skills. Experts from the varied industries
                are invited to give guest lecture on the latest technologies.
              </li>
              <li>
                Every year more than three hundred reputed companies are invited
                to visit our institution to recruit our students for internship
                and full time jobs.
              </li>
              <li>
                Several companies send their assessment form to assess our
                institute before they visit for recruitment. We provide all the
                required information to the companies. Based on the information
                provided, <br />
                companies visit our institution for campus recruitment.
              </li>
              <li>
                More than one hundred and twenty companies from different
                sectors visit BIT to recruit students for internship and
                full-time job. More than five hundred students get their dream
                jobs through placement center.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <br />
      <br />

      <h1>OUR RECRUITERS</h1>
      <br />
      <br />
      <div id="recruiters">
        <MyCaro2 />
      </div>
    </div>
  );
}

export default App;
