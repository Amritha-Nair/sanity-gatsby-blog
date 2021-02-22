export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '60338723f3ce85fc9ba02382',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rbmbj4db',
                  apiId: '331dfe63-e968-4cdb-a239-ffcde38c1daf'
                },
                {
                  buildHookId: '6033872396063b3cccb7d69f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-xak8r9nd',
                  apiId: 'ccf82b48-3c39-44a3-9bdf-4bf5727d1d84'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Amritha-Nair/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-xak8r9nd.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
