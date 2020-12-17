import styled from 'styled-components'

export const MainSectionContainer = styled.div`
    position: relative;
    height: calc(100% - 101px);
    overflow: auto;
    padding: 0 10px;
`

export const CardWrapper = styled.div`  
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
`