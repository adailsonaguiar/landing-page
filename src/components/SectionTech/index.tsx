import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { SectionTechProp } from 'types/api'
import { getImageUrl } from 'utils/getImageUrl'

const SectionTech = ({ title, techIcons }: SectionTechProp) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ icon, title }, index) => (
          <S.Icon key={index}>
            <S.Icons
              src={getImageUrl(icon.url)}
              alt={icon.alternativeText}
              loading="lazy"
            />
            <S.IconsName>{title}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
