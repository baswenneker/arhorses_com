// Prefix an internal path with the configured base, so links keep working
// whether the site is served from the domain root or from a sub-path.
export function url(path: string): string {
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
