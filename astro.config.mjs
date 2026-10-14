// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Academic Block Writer',
      social: {
        github: 'https://github.com/',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Overview', link: '/' },
          ],
        },
      ],
    }),
  ],
});
