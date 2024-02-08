import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  services: [
    {
      type: 'category',
      label: 'Media',
      link: {
        type: 'generated-index',
      },
      items: ['media/jellyfin', 'media/jellyseerr', 'media/metube'],
    },
    {
      type: 'category',
      label: 'Cloud',
      link: {
        type: 'generated-index',
      },
      items: ['cloud/nextcloud', 'cloud/onlyoffice', 'cloud/photoprism'],
    },
    {
      type: 'category',
      label: 'Other',
      link: {
        type: 'generated-index',
      },
      items: [
        'other/freshrss',
        'other/homer',
        'other/libreddit',
        'other/mealie',
        'other/speedtest',
        'other/uptime-kuma',
      ],
    },
  ],
  infrastructure: [
    'infra/intro',
    {
      type: 'category',
      label: 'Hosts',
      link: {
        type: 'generated-index',
      },
      items: ['infra/hosts/scariff', 'infra/hosts/exegol', 'infra/hosts/eadu', 'infra/hosts/mandalore'],
    },
    'infra/system',
    'infra/as-code',
  ],
  deployment: ['deployment/intro', 'deployment/requirements', 'deployment/pre-deployment', 'deployment/deploy'],
  about: ['about/contributing', 'about/credits', 'about/license'],
};

export default sidebars;
