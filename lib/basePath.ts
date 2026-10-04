/**
 * Prefix a path to a file in public/ with the GitHub Pages base path
 * (NEXT_PUBLIC_BASE_PATH, see next.config.mjs). Plain <a>/<video> URLs don't
 * get it automatically the way next/link and static imports do. Full URLs are
 * returned unchanged.
 */
export function withBasePath(src: string) {
  return src.startsWith('/') ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${src}` : src;
}
