import React from 'react'
import {FooterContainer, FooterWrapper, AddBtn} from './styled'

const PokemonFooter = ({toggle}) => {
    return (
        <FooterContainer>
            <AddBtn onClick={toggle} >+</AddBtn>
            <FooterWrapper/>
        </FooterContainer>
    )
}

export default PokemonFooter
