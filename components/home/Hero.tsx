'use client';

import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="libdoge-hero-section">
      <div className="libdoge-hero-content-wrapper">
        {/* Text on the left (like radiodoge) */}
        <div className="libdoge-hero-text">
          <h1 className="libdoge-hero-title">Dogecoin building blocks</h1>
          <p className="libdoge-hero-subtitle">
            Libdogecoin is a complete implementation of the Dogecoin Protocols, as a C library (and
            series of bindings to popular languages) which will allow anyone to build a Dogecoin
            compliant product, without needing to worry about the deeper, complicated specifics of
            the crypto functions. Libdogecoin is here to make crypto development simple, clean, and
            fun!
          </p>
          <div className="libdoge-hero-buttons">
            <Link href="/docs/getting-started" className="libdoge-hero-btn libdoge-btn-primary">
              <span className="material-icons">rocket_launch</span>
              Getting started
            </Link>
            <a
              href="https://github.com/dogecoinfoundation/libdogecoin"
              target="_blank"
              rel="noreferrer"
              className="libdoge-hero-btn libdoge-btn-outline"
            >
              <span className="material-icons">code</span>
              Get Code
            </a>
          </div>
        </div>

        {/* Image + animation on the right (can sit behind text to fit all content) */}
        <div className="libdoge-hero-image">
          <Image
            src="/img/hero-swiss-knife.png"
            alt="Swiss-knife style tool illustration (purple)"
            width={440}
            height={330}
            className="libdoge-hero-img"
            priority
          />
          <div className="libdoge-block-rig" aria-hidden="true">
            <div className="libdoge-block libdoge-b1" />
            <div className="libdoge-block libdoge-b2" />
            <div className="libdoge-block libdoge-b3" />
            <div className="libdoge-block libdoge-b4" />
            <div className="libdoge-block libdoge-b5" />
            <div className="libdoge-block libdoge-b6" />
          </div>
        </div>
      </div>
    </section>
  );
}
