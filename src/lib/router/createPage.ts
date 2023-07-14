import fs from "fs/promises";
import path from "path";
import { getNameWithoutExtension } from "../../utils/utils";
import { Page } from "./router.types";
import { routerConstants } from "./routerConstants";
import axios, { AxiosResponse } from "axios";
import { FC } from "react";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

/**
 * Retrieves the page component and initial props for the given path name.
 * @param pathName - The path name for which to retrieve the page component.
 * @returns An object containing the page component and initial props.
 */
export async function getPageToRender(pathName: string) {
  let Component: FC<any> | undefined;
  let props: AxiosResponse | undefined;

  try {
    // Retrieve the matched page based on the path name
    const page = await getMatchedPage(pathName);

    if (page) {
      // Dynamically import the page component
      const module: Page = await import(`../../client/pages/${page}`);
      const pageComponent = module.default;
      // Check if the page component has a getInitialProps function
      if (module && module.getInitialProps) {
        // Retrieve the initial props for the component
        const { props: initialProps } = await module.getInitialProps(
          axiosInstance
        );
        props = initialProps;
      }

      Component = pageComponent;
    }
  } catch (error) {
    console.error("error!!", error.message);
  }
  // Return the page component and initial props
  return { Component, props };
}

/**
 * Retrieves the matched page based on the provided path name.
 * @param pathName - The path name for which to retrieve the matched page.
 * @returns The matched page if found, otherwise null.
 */
export async function getMatchedPage(pathName: string) {
  try {
    // Validate the path name
    if (!pathName) {
      throw Error(`Invalid Pathname at getMatchedPage`);
    }
    // Get the absolute path to the pages directory
    const pagesDir = path.join(__dirname, routerConstants.pagesDirPath);
    // Read the list of pages in the directory
    const pages = await fs.readdir(pagesDir);
    if (pathName === "/") {
      // Find the page with the name 'index'
      return pages.find(
        (page) => getNameWithoutExtension(page).toLowerCase() === "index"
      );
    }
    // Find the page with a name matching the path name (excluding the leading '/')
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
