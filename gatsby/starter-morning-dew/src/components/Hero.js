import React from 'react'
import { withPrefix } from 'gatsby'
import siteConfig from '../../data/siteConfig'
import styled from 'styled-components'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 2.2rem;
  margin: 10px 60px;
  color: #ff9f43;
  text-shadow: 1px 1px 4px #000;
`

const HeroDescription = styled.h2`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 1.6rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
`

class Hero extends React.Component {
  render() {
    const heroImg = this.props.heroImg || withPrefix(siteConfig.siteCover)
    const { title, description } = this.props

    return (
      <HeroContainer style={{ backgroundImage: `url("${heroImg}")` }}>
        <TitleContainer>
          <HeroTitle>{title}</HeroTitle>
          <HeroDescription>{description}</HeroDescription>
        </TitleContainer>
      </HeroContainer>
    )
  }
}

export default Hero
