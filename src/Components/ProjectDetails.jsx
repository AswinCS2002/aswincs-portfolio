import { useParams } from "react-router-dom";
import Portfolio from "../assets/Logo/portfolio.webp";
import expense from "../assets/Logo/expense tracker.webp";
import prototype from "../assets/Logo/Prototype.webp";
import glass from "../assets/Logo/smart glass.webp";

// Keep your imported images inside src (best practice)
const projectData = {
  1: {
    title: "Portfolio Website",
    description:
      "A personal animated portfolio built using React. A fully responsive and modern website designed to showcase my skills, projects, internship experience, and contact information. The UI includes smooth transitions, clean layout, reusable components and an engaging user experience.",
    points: [
      "Tech Stack: React.js, React Router, CSS3 (Custom Styling), Bootstrap, Formspree, JavaScript (ES6+)",
      "Purpose: A professional digital identity | A showcase of skills and achievements | A gateway for recruiters and clients"
    ],
    images: [Portfolio],
  },
  2: {
    title: "Expense Tracker App - Front End",
    description:
      "A multi-user family expense management system for tracking expenses, storing entries securely, and displaying them in an organized dashboard. Designed with simplicity, real-time insights, and clean UI.",
    points: [
      "Tech Stack: React.js, React Router, LocalStorage, CSS3, JavaScript (ES6+)",
      "Features: Multi-user support | Secure login | Expense entry form | Data dashboard | LocalStorage-based persistence",
      "Purpose: Demonstrate CRUD operations and strengthen component-based UI design"
    ],
    images: [expense],
  },
  3: {
    title: "Face Recognition Attendance System",
    description:
      "An intelligent system that automates attendance marking and monitors real-time student alertness using Face Recognition and Drowsiness Detection.",
    points: [
      "Tech Stack: Python (OpenCV), Dlib, pyttsx3, Mediapipe Face Mesh, Ubidots Dashboard, Excel Reporting",
      "Features: Automated face recognition | Real-time drowsiness alert | Excel integration | Cloud dashboard | Continuous monitoring",
      "Purpose: A smart classroom automation solution combining computer vision, IoT and face analytics"
    ],
    images: [prototype],
  },
  4: {
    title: "IoT Sensor Based Third Eye",
    description:
      "A wearable IoT safety device designed to assist visually-impaired individuals using ultrasonic detection, buzzer alerts and GPS tracking for safety.",
    points: [
      "Tech Stack: ESP8266, Ultrasonic Sensor, Buzzer, Neo-6M GPS Module",
      "Features: Obstacle detection | Smart alerts | IoT-based location tracking | Compact wearable design",
      "Purpose: Build a fully-functional IoT prototype providing real-time safety features"
    ],
    images: [glass],
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData[id];

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>{project.title}</h1>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "40px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* IMAGE */}
        <div style={{ flex: "1", minWidth: "280px" }}>
          {project.images?.[0] && (
            <img
              src={project.images[0]}
              alt={project.title}
              style={{
                width: "100%",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                objectFit: "cover",
              }}
            />
          )}
        </div>

        {/* DESCRIPTION */}
        <div style={{ flex: "1", minWidth: "280px" }}>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
            {project.description}
          </p>

          {project.points && (
            <ul
              style={{
                fontSize: "1.1rem",
                marginTop: "10px",
                lineHeight: "1.7",
              }}
            >
              {project.points.map((point, i) => (
                <li key={i} style={{ marginBottom: "6px" }}>
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
