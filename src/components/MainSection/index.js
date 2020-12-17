import React from 'react'
import {MainSectionContainer, CardWrapper} from './styled'
import Card from '../Card'
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_COLLECTION } from '../../redux/pokedex/type'

const MainSection = () => {
    const collection = useSelector(state => state.pokemon.collection)
    const dispatch = useDispatch()

    return (
        <MainSectionContainer>
            <CardWrapper>
                {
                    collection.map(e => <Card data={e} hasDelete={true} deleteCollection={(e) => dispatch({type: DELETE_COLLECTION, payload: e})} />)
                }
            </CardWrapper>
        </MainSectionContainer>
    )
}

export default MainSection
