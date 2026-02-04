'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { SidebarCollapseTrigger, useSidebar } from 'fumadocs-ui/components/sidebar/base';

const SIDEBAR_TRIGGER_SLOT_ID = 'sidebar-trigger-slot';

export function SidebarTriggerPortal() {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const slot = document.getElementById(SIDEBAR_TRIGGER_SLOT_ID);
    if (!slot) return;

    // Clear any existing portaled content so we never have duplicates
    slot.innerHTML = '';
    const container = document.createElement('div');
    container.setAttribute('data-sidebar-trigger-portal', '');
    slot.appendChild(container);
    setPortalTarget(container);

    return () => {
      if (slot.contains(container)) {
        slot.removeChild(container);
      }
      slot.innerHTML = '';
      setPortalTarget(null);
    };
  }, []);

  if (!portalTarget) return null;

  return createPortal(<SidebarTriggerButton />, portalTarget);
}

function SidebarTriggerButton() {
  const { collapsed } = useSidebar();
  return (
    <SidebarCollapseTrigger className="libdoge-top-nav-menu-trigger" aria-label="Toggle sidebar">
      <span className="material-icons" aria-hidden>
        {collapsed ? 'menu' : 'close'}
      </span>
    </SidebarCollapseTrigger>
  );
}

export { SIDEBAR_TRIGGER_SLOT_ID };
