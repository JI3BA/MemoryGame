import React, { useState, useEffect } from "react";
import bmw from '../img/BMW.svg'
import mercedes from '../img/Mercedes.svg'
import volkswagen from '../img/Volkswagen.svg'
import honda from '../img/Honda.svg'
import Timer from "./timer/Timer";
import '../styles/Field.css'
import Modal from "./Modal/Modal";
import Navbar from "./NavBar/Navbar";
import { useDispatch, useSelector } from "react-redux";

const cards = [
    {id: 1, path: bmw},
    {id: 2, path: mercedes},
    {id: 3, path: volkswagen},
    {id: 4, path: honda}
]

const SmallField = () => {
  const [move, setMove] = useState(0)
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)
  const [cardContainer, setCardContainer] = useState([])
  const [duplicate, setDuplicate] = useState(0)
  const [active, setActive] = useState(false)
  const [modal, setModal] = useState(false)

  const dispatch = useDispatch()
  const getTime = useSelector(state => state.time)
  const users = useSelector(state => state.users.time)


  useEffect(() => {
    setCardContainer([...cards, ...cards].sort(() => 0.5 - Math.random()))
  }, [])

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

    if(duplicate === 4){
        setActive(false)
        setModal(true)
        dispatch({type: "ADD_USER", payload: `${getTime.minute}:${getTime.second}:${getTime.msecond}`})
    }
  }, [move, firstCard, secondCard, duplicate])

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
          <div className="playing-container">
            <Timer active={active}/>

            <div className='playing-field'>
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