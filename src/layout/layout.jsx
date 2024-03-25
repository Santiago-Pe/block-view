// Layout.js

import PropTypes from "prop-types";
import { Header, Footer } from "../components";
import styles from "./layout.module.css";

function Layout({ children }) {
  return (
    <section className={`${styles.Layout} relative`}>
      <Header />
      <main
        className={`${styles.Content} d-flex justify-content-center align-items-center`}
      >
        {children}
      </main>
      <Footer />
    </section>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
