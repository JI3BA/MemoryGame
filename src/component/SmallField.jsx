import React, { useState, useEffect } from "react";
import bmw from '../img/BMW.svg'
import mercedes from '../img/Mercedes.svg'
import volkswagen from '../img/Volkswagen.svg'
import honda from '../img/Honda.svg'


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

  useEffect(() => {
    setCardContainer([...cards, ...cards].sort(() => 0.5 - Math.random()))
  }, [])

  useEffect(() => {
    if(move === 2){
      if(firstCard.id === secondCard.id){
        setDuplicate(duplicate + 1)
        setFirstCard(firstCard.classList.add('playing-card__image--opened'), firstCard.classList.remove('playing-card__image--active'), firstCard.previousElementSibling.classList.add('playing-card__back--opened'))
        setSecondCard(secondCard.classList.add('playing-card__image--opened'), secondCard.classList.remove('playing-card__image--active'), secondCard.previousElementSibling.classList.add('playing-card__back--opened'))   
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
    setTimeout(() => {
        if(duplicate === 4){
            alert('You win!')
        }
    }, 1000)
  }, [move, firstCard, secondCard, duplicate])




  const refreshField = () => {
    window.location.reload()
  }
  

  const handleClick = (e) => {
    if(move === 0){
      if(!e.target.nextElementSibling.classList.contains('playing-card__image--opened')){
      e.target.classList.add('playing-card__back--active')
      e.target.nextElementSibling.classList.add('playing-card__image--active')
      setFirstCard(e.target.nextSibling)
      setMove(move + 1)
      }
    }else if(move === 1){
      if(!e.target.nextElementSibling.classList.contains('playing-card__image--opened')){
      e.target.classList.add('playing-card__back--active')
      e.target.nextElementSibling.classList.add('playing-card__image--active')
      setSecondCard(e.target.nextSibling)
      setMove(move + 1)
      }
    }
  }
    return(
        <div className='wrapper'>
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
            <button className='btn-retry' onClick={refreshField}>Retry</button>
        </div>
    )
}

export default SmallField