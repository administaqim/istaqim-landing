export const APP_LINK_SCHEME = "istaqimapp";

export function buildCustomSchemeUrl(pathname: string, search = ""): string {
  const path = pathname.startsWith("/") ? pathname.slice(1) : pathname;
  return `${APP_LINK_SCHEME}://${path}${search}`;
}
