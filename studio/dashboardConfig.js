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
                  buildHookId: '6191c54179018ca2b58bff32',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ih7a9osz',
                  apiId: '3830010a-a577-4021-9395-3730f1366aad'
                },
                {
                  buildHookId: '6191c54279018cac518c003a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-396krxfx',
                  apiId: '90234027-a986-4ae2-bbb7-71f95d5761ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/georgethedeveloper77/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-396krxfx.netlify.app',
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
