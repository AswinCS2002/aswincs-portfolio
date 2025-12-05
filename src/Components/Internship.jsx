import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Internship.css";

function BasicExample() {
  const internshipData = [
    {
      title:
        "Introduction To Embedded Systems, Components, Microcontroller Architecture, Introduction To 8051 Programming",
      image: "Logo/Embedded.webp",
      text: "Learned the basics of Embedded systems and microcontrollers",
    },
    {
      title: "Introduction To Machine Learning",
      image: "Logo/artificial Intelligence.webp",
      text: "Learned python basics for data handling.",
    },
    {
      title: "Java Full Stack Development",
      image: "Logo/Java.webp",
      text: "Built interactive and responsive UI components using HTML, CSS, JavaScript, and React.",
    },
  ];

  return (
    <>
      <h1 className="internship-title">Internships</h1>

      <div className="internship-wrapper">
        {internshipData.map((item, index) => (
          <Card key={index} className="internship-card">
            <Card.Img
              variant="top"
              src={item.image}
              className="internship-img"
            />

            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>

              <Link to={`/internship/${index}`} className="learn-more-btn">
                Learn More
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default BasicExample;
