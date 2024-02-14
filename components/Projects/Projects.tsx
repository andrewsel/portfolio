import styles from "./Projects.module.css";
import { Tag, projectData } from "./projectData";

type Props = {
  tag?: Tag;
};

const Projects = ({ tag }: Props) => {
  const filteredProjects = tag
    ? projectData.filter((project) => (tag ? project.tags.includes(tag) : true))
    : projectData;

  return (
    <main className={styles.projects}>
      {filteredProjects.map((project) => (
        <div key={project.name} className={styles.project}>
          <img src={project.image} alt={project.name} className={styles.img} />
          <h2 className={styles.h2}>{project.name}</h2>
          <p className={styles.p}>{project.desc}</p>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <a key={tag} href={`/${tag}`}>
                #{tag}
              </a>
            ))}
          </div>
          {project.siteUrl && (
            <a
              className={styles.linkButton}
              href={project.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View site
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
                />
              </svg>
            </a>
          )}
        </div>
      ))}
    </main>
  );
};

export default Projects;
