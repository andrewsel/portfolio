import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Projects from "@/components/Projects/Projects";
import { Tag } from "@/components/Projects/projectData";

export async function generateStaticParams() {
  return Object.values(Tag).map((tag) => ({ tag }));
}

type Params = {
  params: {
    tag: Tag;
  };
};

const TagPage = ({ params: { tag } }: Params) => {
  return (
    <>
      <Breadcrumbs str={tag} />
      <Projects tag={tag} />
    </>
  );
};

export default TagPage;
