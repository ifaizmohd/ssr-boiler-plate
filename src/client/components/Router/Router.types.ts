import { FC, ReactNode } from "react";

export interface RouterProps {
  path?: string;
  children: ReactNode;
}

export interface RouterProviderTypes {
  children: ReactNode;
}

export interface StaticRouterProps {
  path: string;
  context: RouterContext;
  children: ReactNode;
}

export interface RouterContext {
  component: FC;
}
