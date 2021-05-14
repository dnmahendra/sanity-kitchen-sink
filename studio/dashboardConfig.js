export default {
  widgets: [
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
                  buildHookId: '609e61f8af8de3ca948b1f3b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-t2wjkn1x',
                  apiId: '9fc73079-76c2-45e3-9729-137ee9248034'
                },
                {
                  buildHookId: '609e61f8b27183efba7c35d4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-odbq8zah',
                  apiId: '4d5609ec-5ee0-46e7-b8bd-d24a262a66c2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dnmahendra/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-odbq8zah.netlify.app', category: 'apps'}
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
