import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://id-news.vercel.app/",
    title: "ID News",
    description: "ID-news menyajikan berita terkini seputar investasi, bisnis, teknologi, selebriti, hiburan, lirik lagu dan informasi lainnya dari berbagai daerah seluruh Indonesia",
    author: "Putri Lestari",
    profile: "#",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Bangkok",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: false,
    editPost: {
      enabled: true,
      url: "#",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "#" },
    { name: "x",        url: "#" },
    { name: "linkedin", url: "#" },
    { name: "mail",     url: "#" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
