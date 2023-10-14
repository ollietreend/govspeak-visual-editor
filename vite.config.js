import { viteStaticCopy } from 'vite-plugin-static-copy'

export default {
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/govuk-frontend/govuk/assets/*',
          dest: 'assets'
        }
      ]
    })
  ],
}
