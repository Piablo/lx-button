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
        <Container onClick={onClick} buttonStyle={buttonStyle}>{text}</Container>
    )
}

const Container = styled.div`
    width: 100%;
    background-color: white;
    height: 50px;
    border-radius: 15px;
    box-shadow: ${props => props.buttonStyle !== 'TEXT_ONLY'? '0 0 5px rgba(0,0,0, .3)': null};
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0,0,0, .5);
    font-weight: bold;
    cursor: pointer;
`
export default Button