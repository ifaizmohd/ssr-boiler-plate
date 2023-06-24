import fs from "fs/promises";
import path from "path";
import { getNameWithoutExtension } from "../../utils/utils";
import { Page } from "./router.types";
import { routerConstants } from "./routerConstants";
import axios, { AxiosResponse } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export async function getPageToRender(pathName: string) {
  let component: Page;
  let initialProps: AxiosResponse;
  try {
    const page = await getMatchedPage(pathName);
    if (page) {
      component = await import(`../../client/pages/${page}`);
      if (component && component.getInitialProps) {
        const { props } = await component.getInitialProps(axiosInstance);
        initialProps = props;
      }
    }
  } catch (error) {
    console.error("error!!", error.message);
  }
  return { Component: component.default, props: initialProps };
}

export async function getMatchedPage(pathName: string) {
  try {
    if (!pathName) {
      throw Error(`Invalid Pathname at getMatchedPage`);
    }

    const pagesDir = path.join(__dirname, routerConstants.pagesDirPath);
    const pages = await fs.readdir(pagesDir);
    if (pathName === "/") {
      return pages.find(
        (page) => getNameWithoutExtension(page).toLowerCase() === "index"
      );
    }
    return pages.find(
      (page) =>
        getNameWithoutExtension(page).toLowerCase() ===
        pathName?.substring(1)?.toLowerCase()
    );
  } catch (error) {
    console.error("error occurred!!! ", error.message);
    return null;
  }
}
