import { translations } from '@/locales/translations'

describe('Translations', () => {
  describe('Structure validation', () => {
    it('should have both en and pt languages', () => {
      expect(translations).toHaveProperty('en')
      expect(translations).toHaveProperty('pt')
    })

    it('should have all main sections in both languages', () => {
      const sections = ['nav', 'hero', 'about', 'projects', 'testimonials', 'experience', 'approach', 'footer']
      
      sections.forEach(section => {
        expect(translations.en).toHaveProperty(section)
        expect(translations.pt).toHaveProperty(section)
      })
    })
  })

  describe('Navigation translations', () => {
    it('should have all navigation items in English', () => {
      expect(translations.en.nav).toHaveProperty('about')
      expect(translations.en.nav).toHaveProperty('projects')
      expect(translations.en.nav).toHaveProperty('testimonials')
      expect(translations.en.nav).toHaveProperty('contact')
    })

    it('should have all navigation items in Portuguese', () => {
      expect(translations.pt.nav).toHaveProperty('about')
      expect(translations.pt.nav).toHaveProperty('projects')
      expect(translations.pt.nav).toHaveProperty('testimonials')
      expect(translations.pt.nav).toHaveProperty('contact')
    })

    it('should have non-empty navigation strings', () => {
      expect(translations.en.nav.about).toBeTruthy()
      expect(translations.en.nav.projects).toBeTruthy()
      expect(translations.pt.nav.about).toBeTruthy()
      expect(translations.pt.nav.projects).toBeTruthy()
    })
  })

  describe('Hero section translations', () => {
    it('should have all hero properties in both languages', () => {
      const heroProps = ['subtitle', 'title', 'description', 'cta']
      
      heroProps.forEach(prop => {
        expect(translations.en.hero).toHaveProperty(prop)
        expect(translations.pt.hero).toHaveProperty(prop)
        expect(translations.en.hero[prop as keyof typeof translations.en.hero]).toBeTruthy()
        expect(translations.pt.hero[prop as keyof typeof translations.pt.hero]).toBeTruthy()
      })
    })

    it('should have different content for EN and PT', () => {
      expect(translations.en.hero.title).not.toBe(translations.pt.hero.title)
      expect(translations.en.hero.description).not.toBe(translations.pt.hero.description)
    })
  })

  describe('Projects section translations', () => {
    it('should have matching number of projects in both languages', () => {
      expect(translations.en.projects.items.length).toBe(translations.pt.projects.items.length)
    })

    it('should have all required project properties', () => {
      translations.en.projects.items.forEach((project, index) => {
        expect(project).toHaveProperty('title')
        expect(project).toHaveProperty('description')
        expect(project.title).toBeTruthy()
        expect(project.description).toBeTruthy()

        const ptProject = translations.pt.projects.items[index]
        expect(ptProject).toHaveProperty('title')
        expect(ptProject).toHaveProperty('description')
        expect(ptProject.title).toBeTruthy()
        expect(ptProject.description).toBeTruthy()
      })
    })

    it('should have exactly 4 projects', () => {
      expect(translations.en.projects.items).toHaveLength(4)
      expect(translations.pt.projects.items).toHaveLength(4)
    })
  })

  describe('About section translations', () => {
    it('should have matching number of grid items in both languages', () => {
      expect(translations.en.about.gridItems.length).toBe(translations.pt.about.gridItems.length)
    })

    it('should have exactly 6 grid items', () => {
      expect(translations.en.about.gridItems).toHaveLength(6)
      expect(translations.pt.about.gridItems).toHaveLength(6)
    })

    it('should have all required grid item properties', () => {
      translations.en.about.gridItems.forEach((item, index) => {
        expect(item).toHaveProperty('title')
        expect(item).toHaveProperty('description')

        const ptItem = translations.pt.about.gridItems[index]
        expect(ptItem).toHaveProperty('title')
        expect(ptItem).toHaveProperty('description')
      })
    })
  })

  describe('Experience section translations', () => {
    it('should have matching number of experience items', () => {
      expect(translations.en.experience.items.length).toBe(translations.pt.experience.items.length)
    })

    it('should have exactly 4 experience items', () => {
      expect(translations.en.experience.items).toHaveLength(4)
      expect(translations.pt.experience.items).toHaveLength(4)
    })

    it('should have all required experience properties', () => {
      translations.en.experience.items.forEach((item, index) => {
        expect(item).toHaveProperty('title')
        expect(item).toHaveProperty('description')
        expect(item.title).toBeTruthy()
        expect(item.description).toBeTruthy()

        const ptItem = translations.pt.experience.items[index]
        expect(ptItem).toHaveProperty('title')
        expect(ptItem).toHaveProperty('description')
      })
    })
  })

  describe('Approach section translations', () => {
    it('should have matching number of approach items', () => {
      expect(translations.en.approach.items.length).toBe(translations.pt.approach.items.length)
    })

    it('should have exactly 3 approach items', () => {
      expect(translations.en.approach.items).toHaveLength(3)
      expect(translations.pt.approach.items).toHaveLength(3)
    })

    it('should have all required approach properties', () => {
      translations.en.approach.items.forEach((item, index) => {
        expect(item).toHaveProperty('title')
        expect(item).toHaveProperty('order')
        expect(item).toHaveProperty('description')
        expect(item.title).toBeTruthy()
        expect(item.order).toBeTruthy()
        expect(item.description).toBeTruthy()

        const ptItem = translations.pt.approach.items[index]
        expect(ptItem).toHaveProperty('title')
        expect(ptItem).toHaveProperty('order')
        expect(ptItem).toHaveProperty('description')
      })
    })
  })

  describe('Testimonials section translations', () => {
    it('should have matching number of testimonial items', () => {
      expect(translations.en.testimonials.items.length).toBe(translations.pt.testimonials.items.length)
    })

    it('should have all required testimonial properties', () => {
      translations.en.testimonials.items.forEach((item, index) => {
        expect(item).toHaveProperty('quote')
        expect(item).toHaveProperty('name')
        expect(item).toHaveProperty('title')
        expect(item.quote).toBeTruthy()
        expect(item.name).toBeTruthy()
        expect(item.title).toBeTruthy()

        const ptItem = translations.pt.testimonials.items[index]
        expect(ptItem).toHaveProperty('quote')
        expect(ptItem).toHaveProperty('name')
        expect(ptItem).toHaveProperty('title')
      })
    })
  })

  describe('Footer translations', () => {
    it('should have all required footer properties', () => {
      const footerProps = ['title', 'titleHighlight', 'titleEnd', 'description', 'cta', 'copyright']
      
      footerProps.forEach(prop => {
        expect(translations.en.footer).toHaveProperty(prop)
        expect(translations.pt.footer).toHaveProperty(prop)
      })
    })

    it('should have valid copyright year', () => {
      expect(translations.en.footer.copyright).toContain('2024')
      expect(translations.pt.footer.copyright).toContain('2024')
      expect(translations.en.footer.copyright).toContain('Arthur Camponez')
      expect(translations.pt.footer.copyright).toContain('Arthur Camponez')
    })
  })

  describe('Consistency checks', () => {
    it('should have titleEnd property in all sections that need it', () => {
      const sectionsWithTitleEnd = ['projects', 'experience', 'approach']
      
      sectionsWithTitleEnd.forEach(section => {
        expect(translations.en[section as keyof typeof translations.en]).toHaveProperty('titleEnd')
        expect(translations.pt[section as keyof typeof translations.pt]).toHaveProperty('titleEnd')
      })
    })

    it('should not have empty title or titleHighlight', () => {
      const sectionsWithTitle = ['projects', 'testimonials', 'experience', 'approach', 'footer']
      
      sectionsWithTitle.forEach(section => {
        const enSection = translations.en[section as keyof typeof translations.en] as any
        const ptSection = translations.pt[section as keyof typeof translations.pt] as any
        
        expect(enSection.title).toBeTruthy()
        expect(enSection.titleHighlight).toBeTruthy()
        expect(ptSection.title).toBeTruthy()
        expect(ptSection.titleHighlight).toBeTruthy()
      })
    })
  })
})
