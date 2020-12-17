import React, { useEffect, useState} from 'react'
import {ModalContainer, ContentWrapper, BGTrabsparent, SeachBox, SeachBoxWrapper, CardWrapper, SearchIcon, SelectOptionWrapper} from './styled'
import axios from 'axios'
import Card from '../Card'
import Search from '../../search.png'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_COLLECTION } from '../../redux/pokedex/type'

const PokeAddModal = ({show, close}) => {
    const collection = useSelector(state => state.pokemon.collection)
    const dispatch = useDispatch()

    const [PokeDex, setPokeDex] = useState([])
    const [Loading, setLoading] = useState(true)
    const [SearchText, setSearchText] = useState('')
    const [SearchType, setSearchType] = useState('')

    useEffect(() => {
        refetchPokemon()
    }, [SearchText, SearchType])

    const refetchPokemon = () => {
        setLoading(true)
          axios.get('http://localhost:3030/api/cards', {
            params: {
                limit:30,
                name:SearchText,
                type:SearchType
            }
          })
          .then(function (response) {
            setLoading(false)
            response.data ? setPokeDex(response.data.cards.filter(card => !collection.some(e => e.id === card.id))) : setPokeDex([])
            
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          });  
    }

    return (
        <ModalContainer show={show} >
            <ContentWrapper>
                <SeachBoxWrapper>
                    <SeachBox placeholder="Find Pokemon" onChange={(e) => setSearchText(e.target.value)}></SeachBox>
                    <SearchIcon> <img src={Search} /> </SearchIcon>
                </SeachBoxWrapper>
                <SelectOptionWrapper>
                    <select defaultValue="" onChange={(e) => setSearchType(e.target.value)} >
                        <option value="">All</option>
                        <option value="Psychic">Psychic</option>
                        <option value="Fighting">Fighting</option>
                        <option value="Fairy" selected>Fairy</option>
                        <option value="Normal" selected>Normal</option>
                        <option value="Grass" selected>Grass</option>
                        <option value="Metal" selected>Metal</option>
                    </select>
                </SelectOptionWrapper>
                <CardWrapper>
                {
                    Loading ? <div>Loading</div> : 
                    (PokeDex.length > 0 && PokeDex.map(data => 
                        <Card 
                            addCollection={(e) => {
                                dispatch({type: ADD_COLLECTION, payload: e})
                                setPokeDex(PokeDex.filter(card => card !== e))
                            }} 
                            hasAdd={true}
                            data={data} 
                        />))
                }
                </CardWrapper>
            </ContentWrapper>
            <BGTrabsparent onClick={close}/>
        </ModalContainer>
    )
}

export default PokeAddModal
