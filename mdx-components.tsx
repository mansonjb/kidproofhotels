import type { MDXComponents } from "mdx/types";

// Editorial styling is handled globally by the `.longform` class (globals.css),
// so we keep default MDX components. Overrides (callouts, inline Stay22, internal
// links) can be wired here later.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components };
}
