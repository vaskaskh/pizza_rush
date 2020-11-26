import React from 'react'
import { FeatureButton, FeatureContainer, FeatureHeader } from './Feature.elements'

const Feature = () => {
    return (
        <>
            <FeatureContainer>
                <FeatureHeader>
                <h1>Pizza of the Day</h1>
                </FeatureHeader>
                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad debitis id cum ullam nulla, officiis, deleniti eligendi amet aliquam quos dolorum veritatis, dolorem repellendus repudiandae magnam distinctio sunt quaerat facilis.</p>

                <FeatureButton>Try Now</FeatureButton>
            </FeatureContainer>   
        </>
    )
}

export default Feature
