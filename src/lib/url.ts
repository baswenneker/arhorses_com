// Prefix an internal path with the configured base, so links keep working
// both on the temporary github.io/arhorses_com/ address and on arhorses.com.
export function url(path: string): string {
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
