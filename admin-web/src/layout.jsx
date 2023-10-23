import { HeaderComponent } from "./shared/Components/Header";
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <section>
      <HeaderComponent />

      <Outlet />
    </section>
  );
}
