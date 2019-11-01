module.exports = {
  title: 'ddx',
  description: 'Vue tooling for VS Code.',
  base: '/ddx/',
  markdown: {
    linkify: true
  },
  themeConfig: {
    repo: 'vuejs/ddx',
    editLinks: true,
    docsDir: 'docs',
    sidebar: [
      '/setup',
      {
        title: 'Features',
        collapsable: false,
        children: [
          '/highlighting',
          '/snippet',
          '/emmet',
          '/linting-error',
          '/formatting',
          '/intellisense',
          '/debugging',
          '/framework',
          '/interpolation'
        ]
      },
      '/FAQ',
      '/CONTRIBUTING',
      '/roadmap',
      '/CHANGELOG',
      '/credits'
    ]
  }
};
