import styled from 'styled-components'

const COLORS = {
    Psychic: "#f8a5c2",
    Fighting: "#f0932b",
    Fairy: "#c44569",
    Normal: "#f6e58d",
    Grass: "#badc58",
    Metal: "#95afc0",
    Water: "#3dc1d3",
    Lightning: "#f9ca24",
    Darkness: "#574b90",
    Colorless: "#FFF",
    Fire: "#eb4d4b"
  }

  export const WrapperButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #dc7777;
  font-size: 20px;
  cursor: pointer;
  display: none;
`

export const CardWrapper = styled.div`
  background: #f3f4f7;
  position: relative;
  box-shadow: 0 2px 4px 0 #d5d6dc;

  &:hover{
    box-shadow: 0 2px 4px 0 #aeaeae;
    transition: 0.3s;

    ${WrapperButton}{
      display: block;
    }
  }
`

export const ContentWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: ${({hasAdd}) => hasAdd ? '1fr' : '2fr'} 5fr 1fr;
  grid-gap: 10px;
  width: 100%;
`

export const DetailWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`

export const ImgWrapper = styled.div`
  margin-right: 10px;
  width: 100%;

  & > img {
      width: 100%;
      object-fit: cover;
  }
`

export const StatWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Guage = styled.div`
  display: inline-block;
  width: 70%;
  height: 80%;
  border-radius: 10px;
  background: #e4e4e4;
  position: relative;
  &:hover{
    background: #d4d4d4;
  }

  &::before{
      width: ${({hp}) => hp ? `${hp}%` : '0%'};
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      background: #f3701a;
      height: 100%;
      border-radius: 10px;
  }
`

export const TextName = styled.div`
  font-family: 'Gaegu', cursive;
  font-size: 22px;
`

export const WeaknessWrapper = styled.div`
  display: inline-block;
  margin-right: 5px;
  width: 20px;
  height: 20px;
`