import { navItems, gridItems, projects, testimonials, companies, workExperience, socialMedia } from '@/data'

describe('Data exports', () => {
  describe('navItems', () => {
    it('should export navItems array', () => {
      expect(navItems).toBeDefined()
      expect(Array.isArray(navItems)).toBe(true)
    })

    it('should have required properties in each nav item', () => {
      navItems.forEach(item => {
        expect(item).toHaveProperty('name')
        expect(item).toHaveProperty('link')
        expect(typeof item.name).toBe('string')
        expect(typeof item.link).toBe('string')
      })
    })

    it('should have 4 navigation items', () => {
      expect(navItems).toHaveLength(4)
    })
  })

  describe('gridItems', () => {
    it('should export gridItems array', () => {
      expect(gridItems).toBeDefined()
      expect(Array.isArray(gridItems)).toBe(true)
    })

    it('should have 6 grid items', () => {
      expect(gridItems).toHaveLength(6)
    })

    it('should have required properties in each grid item', () => {
      gridItems.forEach(item => {
        expect(item).toHaveProperty('id')
        expect(item).toHaveProperty('title')
        expect(item).toHaveProperty('description')
        expect(item).toHaveProperty('className')
        expect(item).toHaveProperty('imgClassName')
        expect(item).toHaveProperty('titleClassName')
        expect(item).toHaveProperty('img')
        expect(item).toHaveProperty('spareImg')
      })
    })

    it('should have unique IDs', () => {
      const ids = gridItems.map(item => item.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })
  })

  describe('projects', () => {
    it('should export projects array', () => {
      expect(projects).toBeDefined()
      expect(Array.isArray(projects)).toBe(true)
    })

    it('should have 4 projects', () => {
      expect(projects).toHaveLength(4)
    })

    it('should have required properties in each project', () => {
      projects.forEach(project => {
        expect(project).toHaveProperty('id')
        expect(project).toHaveProperty('title')
        expect(project).toHaveProperty('des')
        expect(project).toHaveProperty('img')
        expect(project).toHaveProperty('iconLists')
        expect(project).toHaveProperty('link')
        expect(Array.isArray(project.iconLists)).toBe(true)
      })
    })

    it('should have valid URLs in project links', () => {
      projects.forEach(project => {
        expect(project.link).toMatch(/^https?:\/\//)
      })
    })

    it('should have unique project IDs', () => {
      const ids = projects.map(p => p.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })
  })

  describe('testimonials', () => {
    it('should export testimonials array', () => {
      expect(testimonials).toBeDefined()
      expect(Array.isArray(testimonials)).toBe(true)
    })

    it('should have required properties in each testimonial', () => {
      testimonials.forEach(testimonial => {
        expect(testimonial).toHaveProperty('quote')
        expect(testimonial).toHaveProperty('name')
        expect(testimonial).toHaveProperty('title')
        expect(typeof testimonial.quote).toBe('string')
        expect(typeof testimonial.name).toBe('string')
        expect(typeof testimonial.title).toBe('string')
      })
    })

    it('should have non-empty quotes', () => {
      testimonials.forEach(testimonial => {
        expect(testimonial.quote.length).toBeGreaterThan(0)
      })
    })
  })

  describe('companies', () => {
    it('should export companies array', () => {
      expect(companies).toBeDefined()
      expect(Array.isArray(companies)).toBe(true)
    })

    it('should have required properties in each company', () => {
      companies.forEach(company => {
        expect(company).toHaveProperty('id')
        expect(company).toHaveProperty('name')
        expect(company).toHaveProperty('nameImg')
      })
    })

    it('should have unique company IDs', () => {
      const ids = companies.map(c => c.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })
  })

  describe('workExperience', () => {
    it('should export workExperience array', () => {
      expect(workExperience).toBeDefined()
      expect(Array.isArray(workExperience)).toBe(true)
    })

    it('should have 4 work experiences', () => {
      expect(workExperience).toHaveLength(4)
    })

    it('should have required properties in each experience', () => {
      workExperience.forEach(experience => {
        expect(experience).toHaveProperty('id')
        expect(experience).toHaveProperty('title')
        expect(experience).toHaveProperty('desc')
        expect(experience).toHaveProperty('className')
        expect(experience).toHaveProperty('thumbnail')
      })
    })

    it('should have unique experience IDs', () => {
      const ids = workExperience.map(e => e.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })

    it('should have chronological IDs (1-4)', () => {
      const ids = workExperience.map(e => e.id)
      expect(ids).toEqual([1, 2, 3, 4])
    })
  })

  describe('socialMedia', () => {
    it('should export socialMedia array', () => {
      expect(socialMedia).toBeDefined()
      expect(Array.isArray(socialMedia)).toBe(true)
    })

    it('should have 3 social media items', () => {
      expect(socialMedia).toHaveLength(3)
    })

    it('should have required properties in each social media', () => {
      socialMedia.forEach(social => {
        expect(social).toHaveProperty('id')
        expect(social).toHaveProperty('img')
      })
    })

    it('should have unique social media IDs', () => {
      const ids = socialMedia.map(s => s.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })
  })

  describe('Data integrity', () => {
    it('should have consistent ID sequencing across all arrays', () => {
      const checkSequentialIds = (arr: any[], name: string) => {
        const ids = arr.map(item => item.id)
        const expected = Array.from({ length: arr.length }, (_, i) => i + 1)
        expect(ids).toEqual(expected)
      }

      checkSequentialIds(gridItems, 'gridItems')
      checkSequentialIds(projects, 'projects')
      checkSequentialIds(workExperience, 'workExperience')
      checkSequentialIds(socialMedia, 'socialMedia')
    })

    it('should not have empty strings in critical fields', () => {
      projects.forEach(project => {
        expect(project.title.trim()).not.toBe('')
        expect(project.des.trim()).not.toBe('')
        expect(project.link.trim()).not.toBe('')
      })

      workExperience.forEach(exp => {
        expect(exp.title.trim()).not.toBe('')
        expect(exp.desc.trim()).not.toBe('')
      })
    })

    it('should have valid image paths', () => {
      const allImages = [
        ...gridItems.map(i => i.img).filter(Boolean),
        ...projects.map(p => p.img),
        ...companies.map(c => c.nameImg),
        ...workExperience.map(e => e.thumbnail),
        ...socialMedia.map(s => s.img),
      ]

      allImages.forEach(img => {
        // Allow paths with or without leading slash
        expect(img).toMatch(/^\/?([\/\w.-]+)\.(png|svg|jpg|jpeg)$/i)
      })
    })
  })
})
