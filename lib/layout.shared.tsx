import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Zylora Docs',
      url: '/docs',
    },
    links: [
      {
        text: 'Dashboard',
        url: 'https://app.zylora.dev',
      },
      {
        text: 'zylora.dev',
        url: 'https://zylora.dev',
      },
    ],
    githubUrl: 'https://github.com/zylora-dev/zylora-docs',
  };
}
