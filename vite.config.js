import { viteStaticCopy } from 'vite-plugin-static-copy'

export default {
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        includePaths: [
          'node_modules/govuk-frontend',
          'node_modules/govuk_publishing_components/app/assets/stylesheets',
        ]
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/govuk-frontend/govuk/assets/*',
          dest: 'assets'
        },
        {
          src: 'node_modules/govuk_publishing_components/app/assets/images/govuk_publishing_components/*',
          dest: 'assets/govuk_publishing_components'
        }
      ]
    })
  ],
}
