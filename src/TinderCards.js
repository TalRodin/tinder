import React, {useState} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'


function TinderCards() {
    const [people, setPeople] =useState([
        {
            name:'Elon Musk',
            url:"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
        },
        {
            name:'Jeff Bezos',
            url:"https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
        }
    ])
    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
       
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person)=>(
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipte={["up","down"]}
                    onSwipe={(dir)=>onSwipe(dir,person.name)}
                    onCardLeftScreen={()=>onCardLeftScreen(person.name)}
                    >
                        <div
                        style={{backgroundImage:`url(${person.url})`}}
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
               
                ))}
            </div>
        </div>
    )
}

export default TinderCards
