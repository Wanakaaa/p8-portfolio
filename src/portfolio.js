const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'SC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Sarah Colin',
  role: 'Développeur Web',
  description:
    'À la suite de ma formation en Développement Web avec OpenClassroom, je vous présente ici mes projets.',
  resume: 'https://example.com',
  social: {
    linkedin: 'http://www.linkedin.com/in/sarah-colin-92201976',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Booki',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    // image: 
  },
  {
    name: 'Sophie Bluel',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Kasa',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'GitHub',
  'Node.js',
  'Express',
  'En rajouter/enlever ?'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'srh.colin@gmail.com',
}

export { header, about, projects, skills, contact }
