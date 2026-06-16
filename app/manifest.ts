import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f4d39",
    icons: []
  };
}
