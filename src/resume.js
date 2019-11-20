import React from 'react'

// TODO lookup JSX, its kind of like html in your javascript code
// JSX is supported in most places in this template in place of strings
const resume = {
  header: {
    name: 'Dallin Clayton',
    links: [
      {
        href: 'mailto:dallin.clayton@gmail.com',
        icon: 'far fa-envelope',
        text: 'dallin.clayton@gmail.com',
      },
      {
        href: 'https://github.com/MangoMoe',
        icon: 'fab fa-github',
        text: 'github.com/MangoMoe',
      },
      {
        href: 'https://linkedin.com/in/dallinclayton',
        icon: 'fab fa-linkedin',
        text: 'linkedin.com/in/dallinclayton',
      },
    ],
  },
  summary: [
    'Seeking {job type} position as a {position type} starting {month} {year}',
    'Graduating {month} {year} with a {degree} in {major}',
    '{number} years of {technical} experience',
    '{current position} at {current company}',
    'Skills: {comma separated list of skills}'
  ],
  // TODO duplicate these to make more
  sections: [
    {
      title: 'Education',
      subsections: [
        {
          title: <a href="{university homepage}" target="_blank" rel="noopener noreferrer">{'university name'}</a>,
          subtitle: '{year in school} - Expected Graduation Date: {month} {year}',
          details: [
            '{degree} of {major}',
            'Current GPA: {gpa}',
            'Completed Coursework: {class names of most notable classes}',
            'Activities: {club or other involvement}'
          ]
        }
      ]
    },
    {
      title: 'Experience',
      subsections: [
        {
          title: <a href="{company homepage}" target="_blank" rel="noopener noreferrer">{'company name'}</a>,
          subtitle: '{position} - {start date} to {end date}',
          details: [
            '2-3 verb-driven bullet points that highlight achievements in the form of quantifiable results',
            'Major technologies utilized during the project',
          ]
        },
      ]
    },
    {
      title: 'Service',
      subsections: [
        {
          title: <a href="{organization homepage}" target="_blank" rel="noopener noreferrer">{'organization name'}</a>,
          subtitle: '{position} - {start date} to {end date}',
          details: [
            '2-3 verb-driven bullet points that highlight achievements in the form of quantifiable results',
          ]
        },
      ]
    }
  ]
}

export default resume