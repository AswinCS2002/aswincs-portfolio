import { useParams } from "react-router-dom";
import Portfolio from "../assets/Logo/portfolio.webp";
import expense from "../assets/Logo/expense tracker.webp";
import prototype from "../assets/Logo/Prototype.webp";
import glass from "../assets/Logo/smart glass.webp";

const projectData = {
  1: {
    title: "Portfolio Website",
    description:
      "A personal animated portfolio built using React to A fully responsive and modern personal portfolio website designed to showcase my skills, projects, internship experience, and contact information. The website is built with a focus on clean UI, smooth interactions, reusable components, and an engaging user experience. projects, skills, and experience. Designed with a clean UI and smooth transitions for a professional online presence.",
    points: [
      "Tech Stack Used: React.js,React Router,CSS3+ Custom Styling,Bootstrap,Formspree,JavaScript(ES6+)",
      "Purpose: My professional digital identity | A showcase of skills and achievements | A gateway for recruiters and clients to contact me",
    ],
    images: [Portfolio],
  },
  2: {
    title: "Expense Tracker App-Front End",
    description:
      "A multi-user family expense management system designed to efficiently track daily spending, categorize expenses, store entries securely, and display them in an easy-to-understand format. Built with a focus on simplicity, real-time insights, and professional UI design.A personal animated portfolio built using React to showcase projects, skills, and experience. Designed with a clean UI and smooth transitions for a professional online presence.",
    points: [
      "Tech Stack Used: React.js,React Router,LocalStorage,CSS#,JavaScript(ES6+)",
      "Key Features: Multi-User Support | Secure Login Page | Expense Entry Form | Dashboard: Organized Data View | Data Storage",
      "Purpose: Simplify family expense management | Demonstrate practical CRUD functionality | Strengthen front-end development and component structuring skills",
    ],
    images: [expense],
  },
  3: {
    title: "Face Recognition Attendance System",
    description:
      "An Intelligent Vision-Based System that automates attendance marking and monitors real-time student alertness using Face Recognition and Drowsiness Detection.nal animated portfolio built using React to showcase projects, skills, and experience. Designed with a clean UI and smooth transitions for a professional online presence.",
    points: [
      "Tech Stack: Python(OpenCV) | Dlib | pyttsx3 | Mediapipe Face Mesh | Ubidots Web Dashboard |Excel Sheet Updation",
      "Features: Automated Face Recognition Attendance | Real-Time Drowsiness Monitoring | Integrated Excel Reporting | Cloud Connectivity (Ubidots IoT Platform) | Continuous Camera Monitorin",
      "Modern card-based project showcase",
      "Purpose:The project provides a smart classroom automation solution combining computer vision, IoT, and face analytics.It enhances classroom discipline, helps track student alertness, and reduces staff workload."
    ],
    images: [prototype],
  },
  4: {
    title: "IoT Sensor Based Third Eye: A Sensory Navigation Aid For The Visually Impaired",
    description:
      "A wearable IoT safety device designed to assist visually impaired individuals and enhance general situational awareness.The system uses ultrasonic sensing, buzzer alerts, and GPS monitoring to detect obstacles and notify users in real time. It provides a “third eye” that helps users navigate safely without physical contact.",
    points: [
      "Technical Stack: ESP 8266,Buzzer,Neo 6M GPS Module,Ultra Sonic Sensor",
      "Features: Obstacle Detection Using Ultrasonic Sensor | Buzzer Alert For Critical Distance | IoT for Live Location Monitoring | Compactable and Wearable Design",
      "Purpose : Designed a full working prototype using IoT & sensors | Implemented vibration & buzzer feedback for user safety |  Achieved stable real-time obstacle detection | Enabled optional cloud monitoring for remote safety tracking",
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

        {/* DESCRIPTION + SELECTIVE BULLET POINTS */}
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
