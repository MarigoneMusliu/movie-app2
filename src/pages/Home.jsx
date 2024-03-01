import { Link } from "react-router-dom";
import { Button } from "@mui/joy"; // Import Button component from Joy UI
import { useState } from "react";

function Home() {
  const [showText, setShowText] = useState(false);

  const handleShowText = () => {
    setShowText(true);
  };

  return (
    <div
      style={{ position: "relative", textAlign: "center", marginTop: "0.5cm" }}
    >
      <div
        style={{
          position: "absolute",
          top: "calc(50% + 3.0cm)", // Adjust the top position to move the square 5 cm down
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "85%",
          height: "110%",
          background: "#191919",
          boxShadow: "45px 45px 55px 25px  #0A0A0A",
          borderRadius: "25px",
          zIndex: "-1",
        }}
      ></div>
      <h1
        style={{
          marginBottom: "125px",
          color: "#ffffff", // Blue color text
        }}
      >
        MOVIE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TV
        SHOW
      </h1>
      <div>
        <Link to="/movie">
          <Button
            style={{
              width: "8.5cm",
              height: "4.5cm",
              background: "linear-gradient(45deg, #0d253f, #01b4e4, #90cea1)", // Gradient background blending two colors
              marginRight: "2.5cm",
              fontSize: "25px",
              fontWeight: "bold",
              fontStyle: "italic",
              border: "3px solid #006c88",
              color: "#ffffff", // White text color
              boxShadow: "30px 40px 50px 30px  #1b2433",
              borderRadius: "105px", // Adding border radius for rounded corners
            }}
            color="warning"
          >
            MOVIE
          </Button>
        </Link>

        <Link to="/tv">
          <Button
            style={{
              width: "8.5cm",
              height: "4.5cm",
              background: "linear-gradient(45deg, #0d253f, #01b4e4, #90cea1)", // Gradient background blending two colors
              marginLeft: "2.5cm",
              fontSize: "25px",
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#FFFFFF", // Text color
              border: "3px solid #006c88",
              boxShadow: "30px 40px 50px 0px  #1b2433",
              borderRadius: "105px", // Adding border radius for rounded corners
            }}
            color="warning"
          >
            TV SHOW
          </Button>
        </Link>
      </div>
      <div style={{ marginTop: "3cm", marginLeft: "-15cm" }}>
        <Button
          style={{
            width: "7.5cm",
            height: "1.0cm",
            backgroundColor: "#212121",
            marginLeft: "0.5cm",
            borderRadius: "35px",
            border: "4px solid #212121",
            boxShadow: "30px 30px 40px   #0f0f0f",
          }}
          color="warning"
          onClick={handleShowText} // Add onClick handler to show text
        >
          Best Movies and TVShows
        </Button>{" "}
      </div>
      {showText && (
        <div
          style={{ display: "flex", justifyContent: "center", color: "white" }}
        >
          <div style={{ marginRight: "20px" }}>
            <p style={{ marginTop: "20px" }}>
              <strong>Best Movies:</strong>
              <br />
              1. Anyone But You
              <br />
              2. The Marvels
              <br />
              3. Migration
            </p>
          </div>
          <div style={{ marginLeft: "20px" }}>
            <p style={{ marginTop: "20px" }}>
              <strong>Best TV Shows:</strong>
              <br />
              1. Mannix
              <br />
              2. Chronicles of the Sun
              <br />
              3. Suidooster
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
