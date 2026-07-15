import Navbar from "../components/layout/Navbar";

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="pt-[88px] pb-8">{children}</main>
    </>
  );
}
