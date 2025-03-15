import React, { useRef, useEffect } from 'react';

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
      institution: 'Stanford University',
      location: 'Stanford, CA',
      period: '2018 - 2020',
      description: 'Specialized in Human-Computer Interaction and Artificial Intelligence. Thesis focused on interactive 3D visualization techniques for data analysis.',
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'University of California',
      location: 'Berkeley, CA',
      period: '2014 - 2018',
      description: 'Graduated with honors. Coursework included Data Structures, Algorithms, Web Development, and Database Systems.',
    },
  ];

  const certificationData = [
    {
      title: 'Advanced React and Redux',
      issuer: 'Udemy',
      date: 'May 2022',
    },
    {
      title: 'Three.js Journey',
      issuer: 'Bruno Simon',
      date: 'January 2023',
    },
    {
      title: 'Full Stack Web Development',
      issuer: 'Coursera',
      date: 'August 2021',
    },
  ];

  return (
    <div className="section-container" ref={educationRef}>
      <h2 className="section-title">Education & Certifications</h2>
      
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
                <div className="certification-icon"></div>
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
