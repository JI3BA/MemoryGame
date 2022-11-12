import React, { useState, useEffect } from "react";
import bmw from '../img/BMW.svg'
import mercedes from '../img/Mercedes.svg'
import volkswagen from '../img/Volkswagen.svg'
import honda from '../img/Honda.svg'
import subaru from '../img/subaru.svg'
import seat from '../img/SEAT.svg'
import toyota from '../img/toyota.svg'
import dodge from '../img/dodge.svg'
import volvo from '../img/Volvo.svg'
import Timer from "./timer/Timer";
import '../styles/Field.css'
import Modal from "./Modal/Modal";
import Navbar from "./NavBar/Navbar";
import { useSelector } from "react-redux";

const cards = [
  {id: 1, path: bmw},
  {id: 2, path: mercedes},
  {id: 3, path: volkswagen},
  {id: 4, path: honda},
  {id: 5, path: subaru},
  {id: 6, path: seat},
  {id: 7, path: toyota},
  {id: 8, path: dodge},
  {id: 9, path: volvo}
]

const easyCards = cards.slice().splice(0,4)
const mediumCards = cards.slice().splice(0,6)
const hardCards = cards.slice().splice(0,9)



const SmallField = () => {
  const [move, setMove] = useState(0)
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)
  const [cardContainer, setCardContainer] = useState([])
  const [duplicate, setDuplicate] = useState(0)
  const [active, setActive] = useState(false)
  const [modal, setModal] = useState(false)

  const getLevelGame = useSelector(state => state.logIn.level)

  useEffect(() => {
    if(getLevelGame === 'Easy'){
      setCardContainer([...easyCards, ...easyCards].sort(() => 0.5 - Math.random()))
    }else if(getLevelGame === 'Average'){
      setCardContainer([...mediumCards, ...mediumCards].sort(() => 0.5 - Math.random()))
    }else if(getLevelGame === 'Hard'){
      setCardContainer([...hardCards, ...hardCards].sort(() => 0.5 - Math.random()))
    }
  }, [getLevelGame])

  useEffect(() => {
    if(move === 2){
      if(firstCard.id === secondCard.id){
        setDuplicate(duplicate + 1)
        setFirstCard(firstCard.classList.add('playing-card__image--opened'), 
                    firstCard.classList.remove('playing-card__image--active'),
                    firstCard.previousElementSibling.classList.add('playing-card__back--opened'))
        setSecondCard(secondCard.classList.add('playing-card__image--opened'),
                      secondCard.classList.remove('playing-card__image--active'),
                      secondCard.previousElementSibling.classList.add('playing-card__back--opened'))   
        setMove(0)
      }else if(firstCard.id !== secondCard.id){
        setTimeout(() => {
          setFirstCard(firstCard.previousElementSibling.classList.remove('playing-card__back--active'), 
                        firstCard.classList.remove('playing-card__image--active'))

          setSecondCard(secondCard.previousElementSibling.classList.remove('playing-card__back--active'),
                        secondCard.classList.remove('playing-card__image--active'))

          setMove(0)
        }, 1000)
        
      }
      
    }

    if((getLevelGame === 'Easy' && duplicate === 4) ||
       (getLevelGame === 'Average' && duplicate === 6) ||
       (getLevelGame === 'Hard' && duplicate === 9)){
        setActive(false)
        setModal(true)
    }
    
  }, [move, firstCard, secondCard, duplicate, getLevelGame])

  const handleClick = (e) => {
    if(move === 0){
      if(!e.target.nextElementSibling.classList.contains('playing-card__image--opened')){
        e.target.classList.add('playing-card__back--active')
        e.target.nextElementSibling.classList.add('playing-card__image--active')
        setFirstCard(e.target.nextSibling)
        setMove(move + 1)
        if(!active){
          setActive(true)
        }
      }
    }else if(move === 1){
      if(e.target.classList.contains('playing-card__image--active')){
        return
      }else if(!e.target.classList.contains('playing-card__image--opened')){
        e.target.classList.add('playing-card__back--active')
        e.target.nextElementSibling.classList.add('playing-card__image--active')
        setSecondCard(e.target.nextSibling)
        setMove(move + 1)
      }
    }
  }
    return(
      <div className="container">
        <div className='wrapper'>
          <Navbar />
          <div className={getLevelGame === 'Easy' ? "playing-container easy" 
                                                  : getLevelGame === 'Average' 
                                                  ? "playing-container medium"
                                                  : getLevelGame === 'Hard'
                                                  ? "playing-container hard"
                                                  : "playing-container"}>
            <Timer active={active}/>

            <div className={getLevelGame === 'Easy' ? "playing-field easy" 
                                                  : getLevelGame === 'Average' 
                                                  ? "playing-field medium"
                                                  : getLevelGame === 'Hard'
                                                  ? "playing-field hard"
                                                  : "playing-field"}>
              {cardContainer.map((item, index) => 
                  <div className='playing-card'
                      key={index}
                      onClick={handleClick}
                  >
                  <p id={item.id} className='playing-card__back' alt={index} />
                  <img src={item.path} id={item.id} className='playing-card__image' alt={index}/>
                  </div>
                  )
              }
            </div>
            <Modal active={modal} setActive={setModal}>
            </Modal>
          </div>
        </div>
      </div>
    )
}

export default SmallField