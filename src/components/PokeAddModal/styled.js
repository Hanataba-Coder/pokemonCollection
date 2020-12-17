import styled from 'styled-components'
import Search from '../../search.png'

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

export const ModalContainer = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  display: ${({show}) => show ? 'block' : 'none'};
`

export const ContentWrapper = styled.div`
    z-index: 2; 
    position: absolute;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    border-radius: 5px;
    border: 1px solid #000;
    background: ${COLORS.Colorless};
    top: 50%;
    left: 50%;
    padding: 0 10px;
`

export const BGTrabsparent = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1; 
`

export const SeachBoxWrapper = styled.div`
    width: 100%;
    height: 50px;
    margin: 5px auto;
    border: 1px solid #000;
    border-radius: 2px;
    position: relative;
`

export const SeachBox = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 25px;
  font-family: 'Gaegu', cursive;
`
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  overflow: auto;
  height: calc(90% - 50px);
`

export const SearchIcon = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: calc(50% - 20px);
  right: 10px;

  img {
    width: 100%;
  }
`

export const SelectOptionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px 0;
`