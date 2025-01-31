import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Editorial.css";

const Editorial = () => {
  return (
    <>
      <Header />
      <div className="full-screen-bg">
        <div className="text-class" style={{ fontSize: "3rem" }}>
          Editorial
          <span style={{ color: "blue" }}> Board</span>
        </div>
      </div>

      <div className="editorial-content">
        <p>
          The International Journal of Academic Excellence (IJAE) is supported
          by an esteemed Editorial Board dedicated to maintaining the journal’s
          high standards and academic integrity. The Editorial Team, along with
          the National and International Editorial Advisory Boards, brings
          together a wealth of knowledge and expertise across various
          disciplines, fostering a rigorous and comprehensive review process.
        </p>
        <h2>
          <span style={{ color: "blue" }}>Editorial </span>Team
        </h2>
        <div className="editorial-section">
          <h3>Editor-in-Chief</h3>
          <p>Mr. Attrait Dovin Fedrick S</p>

          <h3>Associate Editor</h3>
          <p>Dr. M. Richard Robert Raa</p>
        </div>

        <h2>
          National <span style={{ color: "blue" }}>Editorial </span>Advisory
          <span style={{ color: "blue" }}> Board</span>
        </h2>
        <p>
          Our National Editorial Advisory Board comprises distinguished
          academics from premier institutions across India. They contribute
          insights and uphold the quality of scholarship within IJAE.
        </p>

        <div class="container-editorial">
          <div class="row-editorial">
            <div class="box-editorial">
              <p>Dr. Joseph Mathew</p>
            </div>
            <div class="box-editorial">
              <p>Prof. Prasanth Arokia Samy D</p>
            </div>
          </div>
          <div class="row-editorial">
            <div class="box-editorial">
              <p>Prof. Caro Velma J</p>
            </div>
            <div class="box-editorial">
              <p>Dr. B. S. Gomathi</p>
            </div>
          </div>
          <div class="row-editorial">
            <div class="box fifth-box-edit">
              <p>Dr. Cynthiya Rose J S</p>
            </div>
          </div>
        </div>

        <h2>
          International <span style={{ color: "blue" }}>Editorial </span>{" "}
          Advisory <span style={{ color: "blue" }}>Board</span>
        </h2>
        <p>
          IJAE is committed to a global perspective on research and scholarship.
          Our International Editorial Advisory Board includes respected scholars
          from around the world who bring diverse expertise to the journal,
          ensuring the relevance and impact of our published work across
          borders.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Editorial;
