import React, { useRef, useState, useEffect } from 'react'
import CardToolkit from './component/CardToolkit'
import CardProject from './component/CardProject'

import photoImage from './assets/photo.jpeg';
import igIcon from './assets/ig.png';
import fbIcon from './assets/fb.png';
import reactIcon from './assets/react.png';
import mysqlIcon from './assets/mysql.png';
import arduinoIcon from './assets/arduino.png';
import iotIcon from './assets/iot.png';
import tailwindIcon from './assets/tailwind.png';
import expressIcon from './assets/express-js.png';
import delphiIcon from './assets/delphi.png';
import flutterIcon from './assets/flutter.png';
import sqlIcon from './assets/sql.png';
import pythonIcon from './assets/python.png';
import cIcon from './assets/c.png';
import postmanIcon from './assets/postman.png';

import iot1 from './assets/project/iot1.jpg';
import iot2 from './assets/project/iot2.jpg';
import iot3 from './assets/project/iot3.jpg';
import video1 from './assets/project/video2.mp4'



const App = () => {
  const aboutRef = useRef(null)
  const toolkitRef = useRef(null)
  const projectRef = useRef(null)
  const [lineX, setLineX] = useState(null);
  const [showAbout, setShowAbout] = useState(false)
  const [showToolkit, setShowToolkit] = useState(false)
  const [showProject, setShowProject] = useState(false)

  const toolkitItems = [
    { icon: reactIcon, label: "React" },
    { icon: expressIcon, label: "Express" },
    { icon: tailwindIcon, label: "Tailwind" },
    { icon: mysqlIcon, label: "MySQL" },
    { icon: arduinoIcon, label: "Arduino" },
    { icon: iotIcon, label: "IOT" },
    { icon: delphiIcon, label: "Delphi" },
    { icon: flutterIcon, label: "Flutter" },
    { icon: sqlIcon, label: "SQL Server" },
    { icon: pythonIcon, label: "Python" },
    { icon: cIcon, label: "C#" },
    { icon: postmanIcon, label: "Postman" },
  ]


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "aboutSection" && entry.isIntersecting) {
            setShowAbout(true)
          }
          if (entry.target.id === "toolkitSection" && entry.isIntersecting) {
            setShowToolkit(true)
          }
          if (entry.target.id === "projectSection" && entry.isIntersecting) {
            setShowProject(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (aboutRef.current) observer.observe(aboutRef.current)
    if (toolkitRef.current) observer.observe(toolkitRef.current)
    if (projectRef.current) observer.observe(projectRef.current)
  }, [])



  return (
    <div className='flex justify-center items-center'>
      <div className='w-full flex flex-col justify-center rounded-lg shadow-lg'>

        <div className='h-[75px] bg-[#1a1a1a] flex justify-end items-center p-4'>
          <h1 className="font-bold text-white px-8 text-base md:text-lg"
            onClick={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })}>
            Tentang Saya
          </h1>
          <h1 className="font-bold text-white px-8 text-base md:text-lg"
            onClick={() => toolkitRef.current?.scrollIntoView({ behavior: 'smooth' })}>
            Toolkit
          </h1>
          <h1 className="font-bold text-white px-8 text-base md:text-lg"
            onClick={() => projectRef.current?.scrollIntoView({ behavior: 'smooth' })}>
            Project
          </h1>
        </div>

        <div
          id="aboutSection"
          ref={aboutRef}
          className={`min-h-screen bg-black flex justify-center items-center transition-all duration-700 
          ${showAbout ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className='flex flex-col md:flex-row w-[90%] h-[80%] justify-around gap-8'>

            {/* Lapis 1: Container Luar (Menangani padding responsif) */}
            <div className="flex-1 flex items-center justify-center p-4 md:p-28">

              {/* Lapis 2: Container Dalam (Menangkap posisi mouse & mengunci garis tepat di ukuran gambar) */}
              <div
                className="relative w-full h-full group"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  setLineX(x);
                }}
                onMouseLeave={() => setLineX(null)}
              >
                {/* Gambar sekarang bersih tanpa padding bawaan */}
                <img
                  src={photoImage}
                  alt="photo"
                  className="w-full h-full object-cover"
                />

                {/* Garis vertikal otomatis terbatasi oleh ukuran gambar asli */}
                {lineX !== null && (
                  <div
                    className="absolute top-0 h-full w-3 transition-all duration-75"
                    style={{
                      left: `${lineX - 5}px`,
                      background: "linear-gradient(to bottom, rgba(0, 208, 255, 0.35), rgba(58, 242, 255, 0.45), rgba(136, 255, 255, 0.35))",
                      boxShadow: "0 0 15px rgba(58, 242, 255, 0.5), 0 0 30px rgba(58, 242, 255, 0.3)",
                      opacity: 1
                    }}
                  ></div>
                )}
              </div>

            </div>


            <div className='flex-1 flex items-center justify-start p-4'>
              <div className='flex flex-col'>
                {/* <h1 className="font-poppins text-xl font-bold font-italic text-white">TENTANG SAYA</h1> */}
                <p className="text-4xl md:text-5xl font-bold text-gray-200">Hallo, Saya Hairul Anam S</p>
                <div className="border-t-4 border-white my-4 w-1/4"></div>
                <p className="text-sm md:text-base text-gray-300">Saya adalah seorang Software Developer yang memiliki pengalaman dalam merancang dan mengembangkan aplikasi desktop, web, serta solusi berbasis hardware dan Internet of Things (IoT). Saya terbiasa membangun sistem mulai dari perancangan database, pengembangan aplikasi, hingga integrasi dengan perangkat keras untuk menghasilkan solusi yang efisien, andal, dan sesuai dengan kebutuhan pengguna. Saya percaya bahwa dunia teknologi terus berkembang, sehingga saya selalu antusias mempelajari teknologi baru dan terbuka terhadap tantangan baru. Dengan semangat belajar yang tinggi dan perhatian terhadap kualitas, saya berkomitmen untuk menciptakan solusi yang efisien, inovatif, dan memberikan nilai bagi setiap proyek yang saya kerjakan.</p>

                <p className="text-4xl md:text-5xl font-bold mt-8 text-gray-200">Software Developer</p>
                <div className='flex justify-start m-4 gap-4'>
                  <img
                    src={igIcon}
                    alt="photo"
                    className="w-8 h-8"
                  />
                  <img
                    src={fbIcon}
                    alt="photo"
                    className="w-8 h-8"
                  />

                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="toolkitSection"
          ref={toolkitRef}
          className={`
          min-h-[400px] bg-linear-to-r from-[#1a1a1a] via-[#202b2b] to-[#1e3a3a]
          flex flex-col justify-center items-center gap-4
          transform transition-all duration-700
          ${showToolkit ? "" : ""}
        `}
        >

          <div className='w-full'>
            <h1 className='text-2xl ml-10 mt-6 text-white font-bold'>
              Toolkit
            </h1>
          </div>
          {/* <div className="grid grid-cols-3 md:grid-cols-6 gap-[2%] w-[75%] place-items-center"> */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-y-6 gap-x-[2%] w-[75%] place-items-center pb-8">

            {toolkitItems.map((item, i) => (
              <div
                key={i}
                className={`
                transition-all duration-700
                ${showToolkit ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
                style={{
                  transitionDelay: `${i * 120}ms` // jeda 120ms per card
                }}
              >
                <CardToolkit icon={item.icon} label={item.label} />
              </div>
            ))}
          </div>
        </div>

        <div id="projectSection" ref={projectRef} className='min-h-screen bg-black flex flex-col justify-start items-center'>
          <h1 className='text-3xl mt-10 text-white font-bold'>
            Project
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1%] w-full flex-1 place-items-center">

            {/* Card kiri */}
            <div
              className={`
              transition-all duration-700
              ${showProject ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
            `}
            >
              <CardProject
                type="image"
                label="Gallery Project"
                files={[iot1, iot2, iot3]}
                deskripsi="Ini adalah project pertama saya, sistem akurasi payload untuk memantau atau monitoring keadaan rumah"
              />
            </div>

            {/* Card kanan */}
            <div
              className={`
              transition-all duration-700
              ${showProject ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
            `}
            >
              <CardProject
                type="video"
                label="Demo Project"
                files={video1}
                deskripsi="Ini adalah project pertama saya, sistem akurasi payload untuk memantau atau monitoring keadaan rumah"
              />
            </div>

          </div>
        </div>

        <div className='h-[75px] bg-black flex justify-center items-center'>
          <h1 className="font-bold text-white/50 text-xs">
            © 2026 Hairul Anam S
          </h1>
        </div>
      </div>

    </div>
  )
}

export default App