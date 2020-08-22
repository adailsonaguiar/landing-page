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

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProp
  sectionConcepts: SectionConceptsProp
  sectionModules: SectionModulesProp
}
