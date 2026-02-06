import { createElement } from 'react';
import { docs } from 'fumadocs-mdx:collections/server';
import { type InferPageType, loader } from 'fumadocs-core/source';

/**
 * Resolve icon string from MDX frontmatter or meta.json to Google Material Icons.
 * Set `icon: "rocket_launch"` (or any Material Icons name) in frontmatter, or use
 * ---[icon_name]Section Title--- in meta.json for separators.
 * See https://fonts.google.com/icons
 */
function materialIconResolver(iconName: string | undefined) {
  if (!iconName || typeof iconName !== 'string') return undefined;
  return createElement('span', {
    key: 'icon',
    className: 'material-icons',
    style: { fontSize: '1rem', width: '1rem', height: '1rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' },
    'aria-hidden': true,
  }, iconName.trim());
}

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon: materialIconResolver,
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  };
}
