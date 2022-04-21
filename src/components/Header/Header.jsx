import React from 'react'
import maldiv from '../../images/maldiv.jpg';
import {HeaderConatiner, Container, ImageContainer ,Image, HeaderInfo, HTitle, HText, HButton} from './HeaderElements';
import SearchTrip from '../SearchTrip/SearchTrip';


function Header() {

    return (
        <HeaderConatiner id='home'>
            <Container>
                <ImageContainer>
                    <Image src={maldiv}/>
                </ImageContainer>
                <HeaderInfo>
                    <HTitle>
                        Book with us and Enjoy your journey 
                    </HTitle>
                    <HText>
                        We organize the vacation of your dreams in breathtaking places around the world.
                        choose one of our special destinations or offer your own
                    </HText>
                    <HButton to='destination'>Explore Offers</HButton>
                </HeaderInfo>
            </Container>

            {/* drodown menus */}
            <SearchTrip/> 
           
        </HeaderConatiner>
    )
}

export default Header
