import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { SidebarTriggerPortal } from '@/components/layout/SidebarTriggerPortal';
import { SidebarFoundationLogo } from '@/components/layout/SidebarFoundationLogo';

export function baseOptions() {
  return {
    nav: {
      title: null,
      children: <SidebarTriggerPortal />,
    },
    sidebar: {
      collapsible: false,
      footer: <SidebarFoundationLogo />,
    },
    searchToggle: { enabled: true },
    themeSwitch: {
      enabled: true,
      mode: 'light-dark' as const,
    },
  };
}
