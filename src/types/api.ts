export type Image = {
  alternativeText: string
  url: string
}

export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type SectionTechProp = {
  title: string
  techIcons: [
    {
      icon: Image
      title: string
    }
  ]
}

export type SectionConceptsProp = {
  title: string
  concepts: [
    {
      title: string
    }
  ]
}

export type SectionModulesProp = {
  title: string
  modules: [
    {
      title: string
      subtitle: string
      description: string
    }
  ]
}

export type SectionAgendaProp = {
  title: string
  description: string
}

export type PricingBoxProp = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SocialLink = {
  id: string
  title: string
  url: string
}

export type Author = {
  id: string
  description: string
  photo: Image
  name: string
  role: string
  socialLinks: SocialLink[]
}
export type SectionAboutUsProp = {
  title: string
  authors: Author[]
}

export type Review = {
  id: string
  name: string
  text: string
  photo: Image
}

export type SectionReviewsProp = {
  title: string
  reviews: Review[]
}

export type SectionFaqProp = {
  title: string
  questions: [
    {
      id: string
      question: string
      answer: string
    }
  ]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProp
  sectionConcepts: SectionConceptsProp
  sectionModules: SectionModulesProp
  sectionAgenda: SectionAgendaProp
  pricingBox: PricingBoxProp
  sectionAboutUs: SectionAboutUsProp
  sectionReviews: SectionReviewsProp
  sectionFaq: SectionFaqProp
}
