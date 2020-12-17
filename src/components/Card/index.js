import React from 'react'
import {CardWrapper, ContentWrapper, ImgWrapper, DetailWrapper, Guage, StatWrapper, WrapperButton, TextName, WeaknessWrapper} from './styled'
import CuteIcon from '../../cute.png'

const Card = ({data, hasAdd, addCollection, hasDelete, deleteCollection}) => {
    const calGauge = (guage, mode) => {
        switch (mode){
            case 1:
                return isNaN(guage) ? 0 : (guage > 100 ? 100 : guage)
            case 2:
                if(guage == 1 || guage == 2){
                    return guage*50
                }else{
                    return 0
                }
            case 3:
                return guage == 1 ? guage*100 : 0     
        }
    }

    const calDemage = (attack) => {
        let dm = 0;

        attack && attack.map(at => {

            return at.damage !== "" ? (dm += parseInt(at.damage.replace("/[+x*]/", ""))) : 0
        } )

        return dm
    }

    const calHappiness = (hp, attack, weak) => {
        const at = calDemage(attack)
        const result = ((hp / 10) + (at) / 10 + 10 - (weak)) / 5
        const finalResult = Array(Math.floor(result)).fill(null)

        return <div>{finalResult.map(e => <WeaknessWrapper><img style={{width: '100%'}} src={CuteIcon} /></WeaknessWrapper>)}</div>

    }

    calDemage(data.attacks && data.attacks)
    return (
        <CardWrapper>
            {hasAdd && <WrapperButton onClick={() => addCollection(data)} >Add</WrapperButton>}
            {hasDelete && <WrapperButton onClick={() => deleteCollection(data)} >X</WrapperButton>}
            <ContentWrapper hasAdd={hasAdd}>
                <ImgWrapper>
                 <img src={data.imageUrl} />
                </ImgWrapper>
                <DetailWrapper>
                    <TextName>{data.name}</TextName>
                    <StatWrapper>HP:<Guage hp={calGauge(data.hp, 1)}/></StatWrapper>
                    <StatWrapper>STR:<Guage hp={calGauge(data.attacks && data.attacks.length, 2)}/></StatWrapper>
                    <StatWrapper>WEAK:<Guage hp={calGauge(data.weaknesses && data.weaknesses.length, 3)}/></StatWrapper>
                    {
                        calHappiness(calGauge(data.hp, 1), (data.attacks ? data.attacks : 0), (data.weaknesses ? data.weaknesses.length : 0))
                    }
                </DetailWrapper>
            </ContentWrapper>
        </CardWrapper>
    )
}

export default Card
