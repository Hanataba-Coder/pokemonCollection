import React, {useState} from 'react'
import {MainScreenContainer} from './styled'
import PokemonHeader from '../../components/PokemonHeader'
import MainSection from '../../components/MainSection'
import PokemonFooter from '../../components/PokemonFooter'
import PokeAddModal from '../../components/PokeAddModal'

const MainScreen = () => {
    const [IsModal, setIsModal] = useState(false)

    return (
        <MainScreenContainer>
            <PokemonHeader/>
            <MainSection/>
            <PokemonFooter toggle={() => setIsModal(!IsModal)} />
            {IsModal && <PokeAddModal show={IsModal} close={() => setIsModal(false)}/>}
        </MainScreenContainer>
    )
}

export default MainScreen
