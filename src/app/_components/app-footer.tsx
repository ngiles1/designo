import Link from "next/link";

export default function AppFooter() {
  return (
    <footer>
      <div>
        <div>Designo</div>
        <nav>
          <ul>
            <li><Link href="/">Our company</Link></li>
            <li><Link href="/">Locations</Link></li>
            <li><Link href="/">Contact</Link></li>
          </ul>
        </nav>
      </div>

      <div>
        <div>
          <div>
            <div>Designo Central Office</div>
            <div>3886 Wellington Street</div>
            <div>Toronto, Ontario, M9C 3J5</div>
          </div>

          <div>
            <div>Contact Us (Central Office)</div>
            <div>P: +1 253-863-8967</div>
            <div>M: contact@designo.co</div>
          </div>
        </div>

        <div>
          <nav>
            <ul>
              <li><a href="/">A</a></li>
              <li><a href="/">B</a></li>
              <li><a href="/">C</a></li>
              <li><a href="/">D</a></li>
              <li><a href="/">E</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
};
