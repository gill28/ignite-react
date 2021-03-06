import React, { useEffect } from 'react'
//Redux
import GameDetail from '../components/GameDetail'
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
// Components
import Game from '../components/Game'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useLocation} from 'react-router-dom'

const Home = () => {
    // Get current locaiton
    const location = useLocation();
    const pathId = location.pathname.split('/')[2]
    ///Fetch Games
   const dispatch = useDispatch();
   useEffect(() => {
       dispatch(loadGames())
   }, [dispatch])
   const {popular, newGames, upcoming} = useSelector((state) => state.games)

    return (
        <GameList>
        {pathId &&  <GameDetail /> }
            <h1>Upcoming Games</h1>
            <Games>
                {upcoming.map(game => (
                    <Game name={game.name} released={game.released} id={game.id} 
                        image={game.background_image}
                        key={game.id}
                    />
                )
                )}
            </Games>
            <h1>Popular Games</h1>
            <Games>
                {popular.map(game => (
                    <Game name={game.name} released={game.released} id={game.id} 
                        image={game.background_image}
                        key={game.id}
                    />
                )
                )}
            </Games>
            <h1>New Games</h1>
            <Games>
                {newGames.map(game => (
                    <Game name={game.name} released={game.released} id={game.id} 
                        image={game.background_image}
                        key={game.id}
                    />
                )
                )}
            </Games>
        </GameList>
    );
}

const GameList = styled(motion.div)`
padding: 0rem 5rem;
h2 {
    padding: 5rem 0rem;
}
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
`;

export default Home;