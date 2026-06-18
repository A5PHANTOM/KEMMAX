import { useEffect } from "react";

export interface PageMeta {
  title: string;
  description: string;
  ogImage?: string;
}

export function usePageMeta(meta: PageMeta) {
  useEffect(() => {
    const suffix = "KEMMAX | Cleanroom Solutions";
    const title = meta.title.includes("KEMMAX") ? meta.title : `${meta.title} | ${suffix}`;
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        if (name.startsWith("og:") || name.startsWith("twitter:")) {
          el.setAttribute("property", name);
        } else {
          el.setAttribute("name", name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", meta.description);
    setMeta("og:title", title);
    setMeta("og:description", meta.description);
    setMeta("og:image", meta.ogImage || "/logo.png");
    setMeta("og:url", window.location.href);
    setMeta("og:type", "website");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", meta.description);
    setMeta("twitter:image", meta.ogImage || "/logo.png");
  }, [meta.title, meta.description, meta.ogImage]);
}
