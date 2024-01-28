import Link from 'next/link';

const TopBar = () => {
  return (
    <div>
      <h1>My Next.js App</h1>
      <nav>
        <Link className={"p-24"} href="/">
          Home
        </Link>
        <Link className={"p-24"} href="/tab1">
          Tab 1
        </Link>
        <Link className={"p-24"} href="/tab2">
          Tab 2
        </Link>
      </nav>
    </div>
  );
};

export default TopBar;