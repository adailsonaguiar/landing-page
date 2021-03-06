import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import { SectionAboutUsProp } from 'types/api'
import * as S from './styles'

const SectionAboutUs = ({ title, authors }: SectionAboutUsProp) => (
  <Container>
    <Heading reverseColor>{title}</Heading>
    <S.Content>
      {authors.map((profile) => (
        <ProfileCard key={profile.id} {...profile} />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
