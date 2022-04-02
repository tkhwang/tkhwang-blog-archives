import React from 'react'
import styled from 'styled-components'
import ukFlag from './uk-flag.png'
import frFlag from './fr-flag.png'
import korFlag from './kor-flag.png'
import usaFlag from './usa-Flag.png'

const FlagImage = styled.img`
  padding-right: 0.5rem;
  padding-bottom: 0.2rem;
`

class Flag extends React.Component {
  render() {
    const { language } = this.props
    const img = language === 'en' ? usaFlag : korFlag
    const alt = language === 'en' ? 'post in English' : 'korean post'

    return <FlagImage src={img} alt={alt} className="flag" />
  }
}

export default Flag
