import fs from "fs/promises";
import path from "path";

export async function router() {
  try {
    const pages = await getPages();
    console.log("pages - ", pages);
    const component = await import(`../../client/pages/${pages[0]}`);
    console.log("component - ", component);
    component.getServerSideProps();
  } catch (error) {
    console.error("error!!", error.message);
  }
}

export async function getPages() {
  try {
    const pagesDirPath = "../src/client/pages/";
    const pagesDir = path.join(__dirname, pagesDirPath);
    return await fs.readdir(pagesDir);
  } catch (error) {
    console.error("error occurred!!! ", error.message);
    return null;
  }
}
