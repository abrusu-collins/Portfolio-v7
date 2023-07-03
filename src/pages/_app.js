import NavBar from "@/components/Navbar";
import "../styles/index.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
