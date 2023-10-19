import React from "react";

function About() {
  const containerStyles = {
    paddingBottom: "20%",
    paddingTop: "17%",
  };
  const containerStyles1 = {
    paddingBottom: "20%",
    paddingTop: "7%",
  };
  const styles = {
    customFont: {
      fontFamily: "Young Serif, serif",
    },
  };
  const styles1 = {
    customFont1: {
      fontFamily: "'Acme', sans-serif",
    },
  };
  return (
    <div className="container ">
      <div className="row">
        <div className="col " style={containerStyles}>
          <h1 style={styles.customFont}>About Me</h1>
          <p style={styles1.customFont1}>
            My name is Akshay Pratap Singh. You can reach me at the following
            contact details:
          </p>
          <ul>
            <li>
              <strong>Phone Number:</strong> 8755380144
            </li>
            <li>
              <strong>Email:</strong> mr.akshaythakur124@gmail.com
            </li>
            <li>
              <strong>WhatsApp Number:</strong> 8006120310
            </li>
          </ul>
        </div>

        {/* Divide */}

        <div className="col" style={containerStyles1}>
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://img.freepik.com/premium-vector/business-teamwork-concept-people-working-table-meeting-co-working-office-illustration_138260-635.jpg?w=740"
                  className="d-block w-100"
                  alt="Error"
                  height="400px"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.freepik.com/free-vector/business-team-communicating-via-social-media_74855-5439.jpg?w=996&t=st=1697706986~exp=1697707586~hmac=988fc412dff8d5743677d3871bdcfbe6b71c8ed7a4aa41559e01278d939ef7f4"
                  className="d-block w-100"
                  alt="Error"
                  height="400px"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://img.freepik.com/free-vector/couple-using-augmented-reality-smartphones_23-2148767243.jpg?w=740&t=st=1697706611~exp=1697707211~hmac=f99f450aeed5081de50ed5f7f50da4ce45c800bae4614ee07e90666f16f6c100"
                  className="d-block w-100"
                  alt="Error"
                  height="400px"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
