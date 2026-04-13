import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "renierj.dev",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter Tight",
        body: "Inter Tight",
        code: "JetBrains Mono",
      },
    colors: {
        lightMode: {
        light: "#E4BC90",
        lightgray: "#D7AA7A",
        gray: "#B57E4F",
        darkgray: "#5A4334",
        dark: "#1E1A17",
        secondary: "#C26F35",
        tertiary: "#9F5634",
        highlight: "rgba(194, 111, 53, 0.16)",
        textHighlight: "#FAE1A0",
    },
        darkMode: {
          light: "#0B0E14",
          lightgray: "#13192A",
          gray: "#3d3d3dff",
          darkgray: "#B9C3DE",
          dark: "#B9C3DE",
          secondary: "#8AA6F9",
          tertiary: "#acaeffff",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#E8E4D8",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.ObsidianBases(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "rose-pine-dawn",
          dark: "nord",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
        Plugin.BasePage(),
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

