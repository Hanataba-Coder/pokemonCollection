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

export const FooterContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
`

export const FooterWrapper = styled.div`
    background: #e45656;
    height: 50px;
    &:hover{
      box-shadow: 0 2px 4px 0 #d9333387;
    }
`

export const AddBtn = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: #e45656;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  cursor: pointer;
`