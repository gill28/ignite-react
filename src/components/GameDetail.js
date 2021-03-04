import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useSelector} from 'react-redux'

const GameDetail = () => {
    const {screen, game} = useSelector((state) => state.detail)
    return (
        <CardShadow>
            <Detail>
                <Stats>
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating {game.rating}</p>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {game.platforms.map(data => (
                                <p key={data.platform.id}>{data.platform.name}</p>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <img src={game.background_image} alt="game"/>
                </Media>
                <Description>
                <p>{game.description}</p>
                </Description>
                <Gallery>
                    {screen.results.map(screen => (
                        <img key={screen.id} src={screen.image} alt="game" />
                    ))}
                </Gallery>
            </Detail>
        </CardShadow>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }
`
const Detail = styled(motion.div)`
width: 80%;
border-radius: 1rem;
padding: 2rem 2rem;
background: white;
position: absolute;
left: 10%;
color: black;
img  {
    width: 100%;
}
`

const Stats = styled(motion.div)`
display: flex;
align-items: center;
justify-content: space-between;
`

const Info = styled(motion.div)`
    text-align: center;
`
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {

    }
`

const Media = styled(motion.div)`
margin-top: 5rem;
img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
}
`
const Description = styled(motion.div)`
margin: 2rem 0rem;
`
const Gallery = styled(motion.div)`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 3fr));
grid-column-gap: 2rem;
grid-row-gap: 2rem;
`

export default GameDetail;