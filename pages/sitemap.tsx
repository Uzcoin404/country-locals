import type { NextPage } from 'next';
import Link from 'next/link';

/* eslint jsx-a11y/anchor-is-valid: "off" */
const Sitemap: NextPage = () => (
  <div className="py-56">
    <div className="container">
      <Link href="/">
        <a className="mb-3 block">Country Locals</a>
      </Link>
      <Link href="/home">
        <a className="mb-3 block">Old Home</a>
      </Link>
      <Link href="/one-day-workshop">
        <a className="mb-3 block">One Day WorkShop</a>
      </Link>
      <Link href="/prime-packs-gig">
        <a className="mb-3 block">Prime Packs Gig</a>
      </Link>
      <Link href="/new-profile">
        <a className="mb-3 block">New Profile</a>
      </Link>
      <Link href="/list-page">
        <a className="mb-3 block">List Page</a>
      </Link>
    </div>
  </div>
);

export default Sitemap;
