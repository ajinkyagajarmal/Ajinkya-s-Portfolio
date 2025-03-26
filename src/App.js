// import React, { useState, useEffect, Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Stars } from '@react-three/drei';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Education from './components/Education';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Loading from './components/Loading';
// import FloatingParticles from './components/FloatingParticles';
// import ScrollUpButton from './components/ScrollUpButton';
// import './App.css';

// const App = () => {
//   const [currentSection, setCurrentSection] = useState('home');
//   const [isMobile, setIsMobile] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check if device is mobile
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     // Initial check
//     checkMobile();
    
//     // Listen for resize events
//     window.addEventListener('resize', checkMobile);

//     // Simulate loading time
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);

//     return () => {
//       window.removeEventListener('resize', checkMobile);
//       clearTimeout(timer);
//     };
//   }, []);

//   const handleNavigation = (section) => {
//     setCurrentSection(section);
    
//     // Smooth scroll to section
//     const element = document.getElementById(section);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <div className="app">
//       {/* Full-screen canvas container */}
//       <div className="canvas-container">
//       <div className="canvas-container">
//   <Canvas
//     dpr={[1, 2]}
//     camera={{ position: [0, 0, 10], fov: 50 }}
//     style={{ width: '100%', height: '100%' }}
//   >
//     <ambientLight intensity={0.5} />
//     <mesh>
//       <boxGeometry args={[2, 2, 2]} />
//       <meshStandardMaterial color="blue" />
//     </mesh>
//   </Canvas>
// </div>
//       </div>

//       <div className="content">
//         {/* Navigation bar */}
//         <Navbar 
//           currentSection={currentSection} 
//           handleNavigation={handleNavigation} 
//         />
        
//         {/* Sections for content */}
//         <div className="sections">
//           <section id="home">
//             <Home />
//           </section>
          
//           <section id="about">
//             <About />
//           </section>
          
//           <section id="skills">
//             <Skills />
//           </section>
          
//           <section id="projects">
//             <Projects />
//           </section>
          
//           <section id="education">
//             <Education />
//           </section>
          
//           <section id="contact">
//             <Contact />
//           </section>
//         </div>
//         <ScrollUpButton />
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default App;







import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';
import FloatingParticles from './components/FloatingParticles';
import ScrollUpButton from './components/ScrollUpButton';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const handleNavigation = (section) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <div className="canvas-container">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 10], fov: 50 }}
          style={{ width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <Suspense fallback={null}>
            <FloatingParticles count={isMobile ? 200 : 2000} />
            {!isMobile && (
              <Stars radius={100} depth={50} count={3500} factor={3} saturation={0} fade speed={0.1} />
            )}
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.9}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enabled={!isMobile}
          />
        </Canvas>
      </div>

      <div className="content">
        <Navbar currentSection={currentSection} handleNavigation={handleNavigation} />
        <div className="sections">
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="education"><Education /></section>
          <section id="contact"><Contact /></section>
        </div>
        <ScrollUpButton />
        <Footer />
      </div>
    </div>
  );
};

export default App;