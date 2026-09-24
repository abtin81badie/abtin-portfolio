import { useSyncExternalStore } from "react";

// Minimal hash router: "#/admin" and "#/preview" are app routes, while plain
// anchors like "#projects" keep working as in-page links. Hash routing is
// what makes client-side routes work on GitHub Pages without a server.

const subscribe = (callback: () => void) => {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
};

const getRoute = () => {
  const hash = window.location.hash;
  return hash.startsWith("#/") ? hash.slice(1) : "/";
};

export function useHashRoute(): string {
  return useSyncExternalStore(subscribe, getRoute, () => "/");
}

export const navigate = (route: string) => {
  window.location.hash = route;
};
