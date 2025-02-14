import React from "react";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { heavenly,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,c25,c26 } from "../assets";

function Music() {
  const navigate = useNavigate();
  // Customize and add your own songs
  const songs = [
    {
      title: "Heavenly",
      artist: "Cigarettes After Sex",
      albumCover: heavenly,
      left: "5%",
      top: "5%",
    },
    {
      title: "Pideme la luna",
      artist: "Repiola",
      albumCover: c1,
      left: "10%",
      top: "8%",
    },
    {
      title: "Mi amor amor",
      artist: "Ray Sepulveda",
      albumCover: c2,
      left: "15%",
      top: "11%",
    },
    {
      title: "Entombed",
      artist: "Deftones",
      albumCover: c3,
      left: "20%",
      top: "14%",
    },
    {
      title: "El Taponazo",
      artist: "El man es German",
      albumCover: c4,
      left: "25%",
      top: "17%",
    },
    {
      title: "Feliz me siento",
      artist: "Gunda Mercer y Su Salsa Fever",
      albumCover: c5,
      left: "30%",
      top: "20%",
    },
    {
      title: "Amor de ñeros",
      artist: "Solitario Soldado",
      albumCover: c6,
      left: "35%",
      top: "23%",
    },
    {
      title: "Qué Tal Si Eres Tu",
      artist: "Los Tigres del Norte",
      albumCover: c7,
      left: "40%",
      top: "26%",
    },
    {
      title: "Eres",
      artist: "Nando Nandez",
      albumCover: c8,
      left: "40%",
      top: "29%",
    },
    {
      title: "Si Tu No Estás",
      artist: "Nampa Basico, Soires Naes",
      albumCover: c9,
      left: "35%",
      top: "32%",
    },
    {
      title: "Sin Ti ",
      artist: "Antonio Cartagena",
      albumCover: c10,
      left: "30%",
      top: "35%",
    },
    {
      title: "Tu Aroma",
      artist: "Keenwan",
      albumCover: c11,
      left: "25%",
      top: "38%",
    },
    {
      title: "No Podras Escapar de Mi",
      artist: "Willie Gonzalez",
      albumCover: c12,
      left: "20%",
      top: "41%",
    },
    {
      title: "Amorsura",
      artist: "Clafseis",
      albumCover: c13,
      left: "15%",
      top: "44%",
    },
    {
      title: "Forever Yours",
      artist: "Brent Faiyaz",
      albumCover: c14,
      left: "10%",
      top: "47%",
    },
    {
      title: "Natural",
      artist: "Jason YWC",
      albumCover: c15,
      left: "5%",
      top: "50%",
    },
    {
      title: "¿? - Bonus Track",
      artist: "Troubless, Dj Secio",
      albumCover: c16,
      left: "5%",
      top: "53%",
    },
    {
      title: "Mi Amor",
      artist: "Dread Mar I",
      albumCover: c17,
      left: "10%",
      top: "56%",
    },
    {
      title: "Lonely Day",
      artist: "System Of A Down",
      albumCover: c18,
      left: "15%",
      top: "59%",
    },
    {
      title: "Finesse",
      artist: "Drake",
      albumCover: c19,
      left: "20%",
      top: "62%",
    },
    {
      title: "Uña y Mugre",
      artist: "Raitmen",
      albumCover: c20,
      left: "25%",
      top: "65%",
    },
    {
      title: "Si No Estás",
      artist: "Penyair",
      albumCover: c21,
      left: "30%",
      top: "68%",
    },
    {
      title: "La Constante",
      artist: "Bunbury",
      albumCover: c22,
      left: "35%",
      top: "71%",
    },
    {
      title: "Virgen",
      artist: "Adolecent's Orquesta",
      albumCover: c23,
      left: "40%",
      top: "74%",
    },
    {
      title: "Iris",
      artist: "The Goo Goo Dolls",
      albumCover: c24,
      left: "40%",
      top: "77%",
    },
    {
      title: "No Dejes Que...",
      artist: "Caifanes",
      albumCover: c25,
      left: "40%",
      top: "80%",
    },
    {
      title: "Almas Gemelas",
      artist: "King Kong Click",
      albumCover: c26,
      left: "45%",
      top: "85%",
    },
  ];
  
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
    <div className="w-[90%] max-w-[400px]">
      <h1 className="text-2xl sm:text-2xl font-bold -mb-4 mt-4 drop-shadow-lg text-white text-center">
        Algunas de nuestras canciones
      </h1>

      <div ref={containerRef}  className=" relative w-full h-[40rem] rounded-lg overflow-hidden mt-8 mb-12">
        {songs.map((song, index) => (
          <motion.div
            key={index}
            className="absolute" // Use absolute positioning
            style={{
              left: song.left,
              top: song.top,
            }}
            drag
            dragConstraints={containerRef} // Adjust to container size
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center gap-4 w-56 h-[4rem]">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={song.albumCover}
                  alt="Album cover"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-white font-medium text-sm truncate">
                  {song.title}
                </h2>
                <p className="text-white/70 text-xs truncate">{song.artist}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Button */}
      <div className="flex justify-center w-full mt-4 mb-4">
        <button
          className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
          onClick={() => navigate("/recap")}
        >
          <ArrowLeft /> Pagina anterior
        </button>
      </div>
    </div>
  </div>
  );
}

export default Music;
