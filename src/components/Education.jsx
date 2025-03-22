import React, { useRef, useEffect } from 'react';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Education = () => {
  const educationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  const educationData = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Nowrosjee Wadia College',
      location: 'Pune,',
      period: '2022 - 2024',
      description: 'Specialized in Full Stack Development and AI, ML and Databases.',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Savitribai Phule Pune University',
      location: 'Pune, India',
      period: '2014 - 2018',
      description: 'Graduated with honors. Coursework included Data Structures, Algorithms, Web Development, and Database Systems.',
    },
  ];

  const certificationData = [
    {
      title: 'Front End Web Development Ultimate Guide',
      issuer: 'Udemy',
      date: 'Feb 2022',
    },
    // {
    //   title: 'Three.js Journey',
    //   issuer: 'Bruno Simon',
    //   date: 'January 2023',
    // },
    {
      title: 'Become a Data Science Expert with Python Django',
      issuer: 'SimpliLearn  ',
      date: 'Dec 2023',
    },
  ];

  return (
    <div className="section-container" ref={educationRef}>
      <h2 className="section-title">Academics & Achievements</h2>
      
      <div className="education-content">
        <div className="education-section">
          <h3 className="subsection-title">Education</h3>
          <div className="timeline">
            {educationData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-period">{item.period}</div>
                  <h4 className="timeline-title">{item.degree}</h4>
                  <p className="timeline-institution">{item.institution}, {item.location}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="certification-section">
          <h3 className="subsection-title">Certifications</h3>
          <div className="certifications-list">
            {certificationData.map((item, index) => (
              <div key={index} className="certification-item">
                <div className="certification-icon">
                <FontAwesomeIcon icon={faTrophy} style={{ color: 'gold' }} />
                </div>
                <div className="certification-details">
                  <h4 className="certification-title">{item.title}</h4>
                  <p className="certification-issuer">{item.issuer} • {item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
