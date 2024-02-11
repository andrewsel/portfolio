import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = ({ str }: { str: string }) => (
  <section className={styles.section}>
    <a href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
      </svg>
    </a>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4"
        d="m19 12l12 12l-12 12"
      />
    </svg>
    <p>Tag: #{str}</p>
  </section>
);

export default Breadcrumbs;
