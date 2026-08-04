import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="flex items-center justify-between h-18">
      <div>Designo</div>
      <div>
        <nav>
          <ul className="
            text-dark-grey
            text-[14px]
            uppercase
            tracking-[2px]
            flex
            gap-8
          ">
            <li><Link href="/">Our company</Link></li>
            <li><Link href="/">Locations</Link></li>
            <li><Link href="/">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
};
