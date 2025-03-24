
import React, { useRef, useEffect } from "react";
import {
  DiJavascript,
  DiReact,
  DiHtml5,
  DiCss3,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiDjango,
  DiMysql,
  DiAngularSimple,
  DiGithub,
  DiChrome,
  DiBootstrap,
  DiTerminal,
  DiGit
} from "react-icons/di";
import { SiPostgresql, SiFirebase } from "react-icons/si";

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className="section-container" ref={skillsRef}>
      <h2 className="section-title">Stuff I Excel At</h2>

      {/* Techstack Section */}
      <div className="tech-icons-grid">
        <div className="tech-icons">
          <DiNodejs />
        </div>
        <div className="tech-icons">
          <DiReact />
        </div>
        <div className="tech-icons">
          <DiAngularSimple />
        </div>
        <div className="tech-icons">
          <DiMongodb />
        </div>
        <div className="tech-icons">
          <DiPython />
        </div>
        <div className="tech-icons">
          <DiDjango />
        </div>
        <div className="tech-icons">
          <DiMysql />
        </div>
        {/* <div className="tech-icons">
          <DiChrome />
        </div> */}
        {/* <div className="tech-icons">
          <DiGithub />
        </div> */}
        <div className="tech-icons">
          <SiPostgresql />
        </div>
        <div className="tech-icons">
          <DiGit />
        </div>
        <div className="tech-icons">
          <DiHtml5 />
        </div>
        <div className="tech-icons">
          <DiJavascript />
        </div>
        <div className="tech-icons">
          <DiTerminal />
        </div>
        {/* <div className="tech-icons">
          <DiBootstrap />
        </div> */}
        {/* <div className="tech-icons">
          <DiCss3 />
        </div> */}
        {/* <div className="tech-icons">
          <SiFirebase />
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
