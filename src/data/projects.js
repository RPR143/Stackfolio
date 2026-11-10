const baseUrl = import.meta.env.BASE_URL || "/";

// Projects data from resume
export const projects = [
  {
    id: "handwritten-digit-recognition",
    Title: "Handwritten Digit Recognition",
    Description:
      "Built a real-time handwritten digit recognition model trained on 60K+ MNIST images using Python and deep learning. Cut inference latency and enabled deployment across 2 automation use cases by streamlining the image preprocessing pipeline. Achieved 90% prediction accuracy with NumPy, Pandas, and Scikit-learn.",
    TechStack: ["Python", "Deep Learning", "NumPy", "Scikit-learn"],
    Img: `${baseUrl}project-digit.png`,
    Link: "https://github.com/RPR143/Handwritten-Digit-Recognition-System-",
    Github: "https://github.com/RPR143/Handwritten-Digit-Recognition-System-",
  },
  {
    id: "co-exist-sustainable-platform",
    Title: "Co-Exist: Sustainable Living Platform",
    Description:
      "Delivered a full-stack web platform with 3+ core modules by implementing secure authentication and personalized user dashboards. Enabled data-informed decisions by launching an analytics dashboard tracking 5+ user activity metrics, built by capturing user activity data and visualizing it on the dashboard.",
    TechStack: ["React.js", "Node.js", "MongoDB", "RESTful APIs"],
    Img: `${baseUrl}project-coexist.png`,
    Link: "https://github.com/RPR143/The-Co-Exist",
    Github: "https://github.com/RPR143/The-Co-Exist",
  },
];

// Certificates data from resume
const certificateFiles = Array.from({ length: 31 }, (_, i) => `certificate-${i + 1}.png`);

export const certificates = certificateFiles.map((filename, index) => ({
  id: `cert-${index}`,
  Title: `Professional Certificate ${index + 1}`,
  Issuer: "Verified Issuer",
  Img: `${baseUrl}certificates/${filename}`,
}));
