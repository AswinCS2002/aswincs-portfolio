import { useParams } from "react-router-dom";
import "./InternshipDetails.css";

const internshipData = [
  {
    title:
      "Introduction To Embedded Systems|Keltron Pvt Ltd",
    image:  "/Logo/Embedded.webp",
    description: `
      - Learned the basics of embedded systems and microcontroller architecture.
      - Worked with microcontroller features and programming basics.
    `,
  },
  {
    title: "Introduction to Machine Learning | Sinro Robotics Pvt Ltd",
    image: "/Logo/artificial Intelligence.webp",
    description: `
      - Learned python basics for data handling.
      - Executed simple ML programs and interpreted model outputs.
    `,
  },
  {
    title: "Java Full Stack Development | Kompetenzen Technologies",
    image: "/Logo/Java.webp",
    description: `
      - Built interactive and responsive UI components using HTML, CSS, JavaScript, and React.
      - Practiced front-end development concepts including state management, routing, and reusable components.
      - Implemented simple CRUD operations and connected UI with backend APIs for dynamic data display.
    `,
  }
];

function InternshipDetails() {
  const { id } = useParams();
  const item = internshipData[id];

  return (
    <div className="details-container">
      <img src={item.image} className="details-image" alt="internship" />

      <div className="details-content">
        <h1>{item.title}</h1>

        {item.description.split("\n").map((line, idx) => (
          <p key={idx}>{line.trim()}</p>
        ))}
      </div>
    </div>
  );
}

export default InternshipDetails;
