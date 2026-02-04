'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SIDEBAR_TRIGGER_SLOT_ID } from './SidebarTriggerPortal';

export function TopNav() {
  return (
    <nav className="libdoge-top-nav">
      <div className="libdoge-top-nav-container">
        <div id={SIDEBAR_TRIGGER_SLOT_ID} className="libdoge-top-nav-menu-slot" />
        <div className="libdoge-top-nav-logo">
          <Link href="/" className="libdoge-top-nav-logo-link">
            <Image
              src="/img/libdogecoin-logo-purple.png"
              alt="libdogecoin"
              width={40}
              height={40}
              className="libdoge-logo-icon"
            />
            <span className="libdoge-logo-text">libdogecoin</span>
          </Link>
        </div>
        <div className="libdoge-top-nav-actions">
          <a
            href="https://github.com/dogecoinfoundation/libdogecoin/tree/0.1.5-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="libdoge-top-nav-link"
            title="View source code"
            aria-label="View source on GitHub"
          >
            <span className="material-icons">code</span>
          </a>
          <a
            href="https://github.com/dogeorg/libdogecoin-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="libdoge-top-nav-link"
            title="Edit this site"
            aria-label="Edit documentation"
          >
            <span className="material-icons">edit</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
