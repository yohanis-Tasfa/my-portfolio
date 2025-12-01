import AmazonImg from "../assets/images/amazon.png";
import NetflixImg from "../assets/images/netflix.png";
import RealestateImg from "../assets/images/realstate.png";
  
  
  
  
  export const projects = [
    {
      title: "Amazon Clone",
      description:
        "A modern, scalable Amazon replica built with React and Node.js. Includes real-time inventory, secure payments, and analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "FS API "],
      image: AmazonImg,
      demo: "https://yt-amazon-clone.vercel.app/",
      github: "https://github.com/yohanis-Tasfa/amazon-clone",
    },
    {
      title: "Netflix Clone",
      description:
        "A cinematic streaming platform with dynamic movie categories and TMDB API integration.",
      tech: ["React", "Node.js", "TMDB API", "TailwindCSS"],
      image: NetflixImg,
      demo: "https://yohanis-tasfa.github.io/Netflix-clone-2024/",
      github: "https://github.com/yohanis-Tasfa/Netflix-clone-2024",
    },
    {
      title: "Yoni RealEstate",
      description:
        "A modern real-estate platform showcasing properties with filtering, search, and elegant UI animations.",
      tech: ["React", "Node.js", "TailwindCSS", "Framer Motion"],
      image: RealestateImg,
      demo: "https://yoni-real-estate.vercel.app/",
      github: "https://github.com/yohanis-Tasfa/yoni-real-state",
    },
  ];