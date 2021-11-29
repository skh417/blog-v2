import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className='container'>
        <Link href='/'>
          <a>
            <h2>Simple-key Blog</h2>
          </a>
        </Link>
      </div>
    </header>
  );
}
