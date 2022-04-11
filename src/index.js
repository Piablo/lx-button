import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const getConfig = () => {
    const config ={ 
        buttonStyle: ['PRIMARY', 'TEXT_ONLY']
    }
    return config
}

const Button = (props) => {
    const text = props.children
    const {
        onClick,
        config,
    } = props

    const [buttonStyle, setButtonStyle] = useState('TEXT_ONLY')

    useEffect(() => {
        if(config){
            checkButtonStyleConfig(config)
        }
    }, [config])

    const checkButtonStyleConfig = (config) => {
        const buttonStyledHolder = (config && config.buttonStyle) || null
        if(buttonStyledHolder){
            setButtonStyle(buttonStyledHolder)
        }
    }
    return(
        <Container onClick={onClick} buttonStyle={buttonStyle}>
            <ButtonContainer buttonStyle={buttonStyle}>{text}</ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-top: 2px;
    padding-bottom: 2px;
    
`
const ButtonContainer = styled.div`
    background-color: #d5d6d8;
    background-color: ${props => props.buttonStyle === 'PRIMARY'? '#d5d6d8': 'white'};
    width: calc(100% - 4px);
    margin: auto;
    height: 54px;
    border-radius: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.buttonStyle === 'PRIMARY'? 'white': 'black'};
    font-weight: bold;
    cursor: pointer;
`
export default Button