import React from 'react'
import {picture} from '../assets'
import {picture2} from '../assets'
import {picture3} from '../assets'
import {picture4} from '../assets'
import {picture5} from '../assets'
import {picture6} from '../assets'
import {picture7} from '../assets'
import {picture8} from '../assets'
import {picture9} from '../assets'
import {picture10} from '../assets'
import {picture11} from '../assets'

import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
       { Image: picture2, title: 'Abril 21, 2024', description: "Fuimos al estadio a estrenar la chaqueta que compramos juntos. Me acuerdo de que ese día jugamos contra el aBerica y ganamos 1-0, y también nos tomamos unas fotos con Monaguillo jsadjas"}
       ,{ Image: picture, title: 'Mayo 26, 2024', description: "Momento exacto en que me dijiste que sí. Estaba re nervioso e hice la de maña porque no sabía en qué momento decirlo jsdjasdj, pero cuando lo dije, hubo un momento de silencio y ya dijiste 'Sí, obviamente' y yo el más feli 🤍 "}
       ,{ Image: picture3, title: 'Junio 20, 2024', description: "De las primeras veces que subí a tu casa jsdjsadj, esa vez nos pusimos a joder con la cámara del TV y pareciamos como enanos ksdkasd"}
       ,{ Image: picture4, title: 'Julio 26, 2024', description: "Ese día cumplimos 2 meses y me acuerdo de que me regalaste a mi Batman chiquito y de que yo estaba re emocionado porque yo sabía que la camiseta te iba a gustar resto jsdja "}
       ,{ Image: picture5, title: 'Octubre 31, 2024', description: "Esa foto quedó chistosa porque me mordiste jsdja, me acuerdo de ese día y ay Dios mío, Anais jsddsa ,pero pues nada, ese día nos veíamos re goals mi vida."}
       ,{ Image: picture6, title: 'Diciembre 07, 2024', description: "Ush amor, considero que este día es el más marcado, pq ese día fuimos muy felices ambos, y también hicimos muchas cosas, armar mi árbol, hacer natilla, ir al parque para estar los dos, que mi familia entrara a tu casa WAOS."}
       ,{ Image: picture7, title: 'Diciembre 13, 2024', description: "Este día claramente fue re especial porque pasamos nuestra primera noche juntos jsdjsajda"}
       ,{ Image: picture8, title: 'Diciembre 15, 2024', description: "En mi cumpleaños me hiciste el ser más feliz del planeta, en serio que estoy inmensamente agradecido por lo feliz que me hiciste ese día y todos los días. TE AMO MI TODO 🤍"}
       ,{ Image: picture9, title: 'Diciembre 28, 2024', description: "Ese día 'celebramos' mes y fue como el último plan que hicimos por el año, ese día la pasamos muy chimbaa, todos lavados jsdjsajdja. Como me encanta ese video, te ves tan lindaaaa, Jesús credoo. ME ENCANTAS MAMASOTAA."}
       ,{ Image: picture10, title: 'Enero 01, 2025', description: "Iniciando el año juntos mi vida, también iniciamos a tomarnos fotos en el OldRoll y las fotos de Yupi jksdja. Me acordé qué para esas semanas culeamos restoooooooooooo sjdjsadja."}
       ,{ Image: picture11, title: 'Enero 03, 2025', description: "Jayyyy niña rayando el parque, rayamos un monton de cosas de las loks y tambien pusimos nuestras iniciales en varias laditos :D"}
      
      
      ]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Momentos especiales juntos!
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

export default Message