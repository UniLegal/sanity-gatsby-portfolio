export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc87b919cfc9fae908367c4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-wg7tyh48',
                  apiId: '5a7e5920-3732-4c9e-97a7-0e0fe5a16166'
                },
                {
                  buildHookId: '5fc87b91c7e527a5034260f4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-w9dfjdjt',
                  apiId: '2478c74e-e672-4295-845f-6078b7978720'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/UniLegal/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-w9dfjdjt.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
