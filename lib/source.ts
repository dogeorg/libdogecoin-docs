import { createElement } from 'react';
import { docs } from 'fumadocs-mdx:collections/server';
import { type InferPageType, loader } from 'fumadocs-core/source';

function materialIconResolver(iconName: string | undefined) {
  if (!iconName || typeof iconName !== 'string') return undefined;
  return createElement('span', {
    key: 'icon',
    className: 'material-icons',
    style: { fontSize: '1rem', width: '1rem', height: '1rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' },
    'aria-hidden': true,
  }, iconName.trim());
}

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon: materialIconResolver,
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png'];
  return { segments, url: `/og/docs/${segments.join('/')}` };
}
