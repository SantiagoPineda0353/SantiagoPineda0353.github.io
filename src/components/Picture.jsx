import React from 'react'
import { picture12 } from '../assets'
import { picture13 } from '../assets'
import { picture14 } from '../assets'
import { picture15 } from '../assets'
import { picture16 } from '../assets'
import { picture17 } from '../assets'
import { picture18 } from '../assets'
import { picture6 } from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: picture12, title: 'Primer més', description: "N0 podia faltar la foto que más usamos ksdkad"},   
    { Image: picture13, title: 'Enero 2, 2025', description: "Namorado de esa foto"},
    { Image: picture14, title: 'Octubre 10, 2024', description: "La vez que me quede dormido y comencé a silbar jsdjsajd"},   
    { Image: picture15, title: 'Febrero 02, 2025', description: "Nos vemos felices y lindos en esa foto :D"},
    { Image: picture16, title: 'Enero 10, 2025', description: "Tú no tiene flow maa"},   
    { Image: picture17, title: 'Diciembre 24, 2024', description: "Feliz navidad :D"},
    { Image: picture6, title: 'Diciembre 07, 2024', description: "Considero que es la foto más linda que tenemos y más por todo lo que hicimos ese día"},   
    { Image: picture18, title: 'Fecha y lugar por definir', description: "USTED Y YO CUANDO Y DONDE????????"},

  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Algunas de nuestras fotos
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Pagina anterior
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture