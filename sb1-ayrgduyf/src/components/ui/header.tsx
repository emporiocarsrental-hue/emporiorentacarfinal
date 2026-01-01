import { TopBar } from './topbar';
import { NavBar } from './navbar';

export function Header() {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-[100] bg-white shadow-md">
      <TopBar />
      <NavBar />
    </header>
  );
}
