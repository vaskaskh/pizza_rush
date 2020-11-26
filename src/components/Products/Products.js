import React from 'react';
import { ProductWrapper,ProductCard, ProductHeading, ProductImg, ProductTitle, ProductDesc, ProductPrice, ProductButton, ProductContainer, ProductInfo, ProductName, ViewLink } from './Products.elements';

const Products = ({heading, data, scrollId, linkTo}) => {
    return (
        <>
            <ProductContainer>
                <ProductName>
    <ProductHeading id={scrollId} style={{paddingTop: "50px"}} >{heading}</ProductHeading>
    <ViewLink to='/all'>{linkTo}</ViewLink>
                </ProductName>
                    <ProductWrapper>
                        {data.map((product)=>(
                            <ProductCard
                                key={product.id}
                                >
                                <ProductImg src={product.img} alt={product.alt} style={{cursor: "pointer"}}/>
                                <ProductInfo>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductDesc>{product.desc}</ProductDesc>
                        <ProductPrice>{product.price}</ProductPrice>
                        <ProductButton onClick={console.log('hello add to cart')}>{product.button}</ProductButton>
                                </ProductInfo>
                            </ProductCard>
                        ))}
                    </ProductWrapper>
            </ProductContainer>   
        </>
    )
}

export default Products
