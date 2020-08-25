export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: {
    url: string
    alternativeText: string
  }
}

export type SectionTechProp = {
  title: string
  techIcons: [
    {
      icon: {
        url: string
        alternativeText: string
      }
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

export type SectionAboutUsProp = {
  title: string
  authors: [
    {
      id: string
      photo: {
        url: string
        alternativeText: string
      }
      name: string
      role: string
      socialLinks: [
        {
          id: string
          title: string
        }
      ]
    }
  ]
  description
}

export type SectionReviewsProp = {
  title: string
  reviews: [
    {
      id: string
      name: string
      text: string
      photo: {
        url: string
        alternativeText: string
      }
    }
  ]
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
