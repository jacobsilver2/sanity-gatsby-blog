export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5de321b307c9687d093dabc9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xi455hdd',
                  apiId: '19e6dd5c-a11b-4cf3-ac8f-1b8046d303f7'
                },
                {
                  buildHookId: '5de321b363eafda350c632cf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-e7d6ywjz',
                  apiId: 'a1a7f77b-382f-4704-9366-b6a941783540'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jacobsilver2/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-e7d6ywjz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
