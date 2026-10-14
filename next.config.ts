import type { NextConfig } from "next";

// When building for GitHub Pages (static export), set GITHUB_PAGES=1
// This switches from standalone server mode to static HTML export
const isGithubPages = process.env.GITHUB_PAGES === "1";
// LOCAL PREVIEW ONLY: set KYP_LEGACY_BASE_PATH=1 to serve this app under
// /legacy on a separate port so it can be embedded side-by-side with the
// new KYP USMLE preview. Uncommitted local change; default behavior is
// completely unchanged (no env var -> no basePath, identical to before).
const isLegacyPreview = process.env.KYP_LEGACY_BASE_PATH === "1";
// LOCAL PREVIEW ONLY: set KYP_USMLE_PREVIEW=1 on the MAIN preview server.
// Adds the approved comparison-workflow entry points WITHOUT touching any
// page code:  /?topic=<slug>  ->  /usmle/<slug>,
//             /?view=compare&topic=<slug>  ->  /usmle/compare?topic=<slug>,
//             /legacy/*  ->  proxied to the legacy preview server
// (KYP_LEGACY_BASE_PATH=1 on a separate port). Uncommitted local change;
// default behavior is completely unchanged (no env var -> nothing happens).
const isUsMLEPreview = process.env.KYP_USMLE_PREVIEW === "1";
const legacyOrigin = process.env.KYP_LEGACY_ORIGIN ?? "http://127.0.0.1:3101";
const repoName = "know-your-pill-2026";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : "standalone",
  basePath: isGithubPages
    ? `/${repoName}`
    : isLegacyPreview
      ? "/legacy"
      : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  images: isGithubPages ? { unoptimized: true } : undefined,
  trailingSlash: isGithubPages ? true : false,
  // Static export mode: only .tsx/.jsx files are treated as pages, so
  // route.ts API handlers are excluded from the export build. Standalone
  // mode keeps the default extensions so all 9 API routes are built.
  ...(isGithubPages ? { pageExtensions: ["tsx", "jsx"] } : {}),
  // Fail the build on TypeScript errors — never suppress them.
  typescript: { ignoreBuildErrors: false },
  reactStrictMode: false,
  // Never advertise the framework via the X-Powered-By response header.
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages
      ? `/${repoName}`
      : isLegacyPreview
        ? "/legacy"
        : "",
    // Phase 7: the export build uses trailingSlash: true (see below), and
    // Next normalizes canonical/OG metadata URLs to that form. Structured
    // data (JSON-LD, sitemap) must emit the same form so the URLs never
    // contradict each other — resolved via absoluteUrl() in
    // src/lib/kyp/site-url.ts.
    NEXT_PUBLIC_TRAILING_SLASH: isGithubPages ? "1" : "",
  },
  // LOCAL PREVIEW ONLY (KYP_USMLE_PREVIEW=1): the approved comparison
  // workflow entry points. /legacy/* is proxied to the legacy preview
  // server; /?topic=... and /?view=compare&topic=... redirect into the
  // USMLE section of THIS site. Inactive by default — production behavior
  // is byte-identical without the env var.
  ...(isUsMLEPreview
    ? {
        async rewrites() {
          return {
            beforeFiles: [
              { source: "/legacy", destination: `${legacyOrigin}/legacy` },
              { source: "/legacy/:path*", destination: `${legacyOrigin}/legacy/:path*` },
            ],
          };
        },
      }
    : {}),
  // Security headers (server modes only — GitHub Pages serves static files
  // and applies its own response headers).
  // LOCAL PREVIEW: skipped when isLegacyPreview so the side-by-side compare
  // iframe in the new KYP USMLE preview is allowed to embed this app
  // (X-Frame-Options: DENY would otherwise block it). Preview-only.
  ...(isGithubPages || isLegacyPreview
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "X-Frame-Options", value: "DENY" },
                {
                  key: "Referrer-Policy",
                  value: "strict-origin-when-cross-origin",
                },
                {
                  key: "Permissions-Policy",
                  value: "camera=(), microphone=(), geolocation=(), payment=()",
                },
                {
                  key: "X-DNS-Prefetch-Control",
                  value: "off",
                },
              ],
            },
          ];
        },
        // Redirect legacy .html routes to canonical clean URLs
        // (only works in standalone mode, not static export — GitHub Pages
        // handles 404s via the _not-found page which now shows useful links)
        // LOCAL PREVIEW (KYP_USMLE_PREVIEW=1): also adds the approved
        // comparison-workflow entry points — /?topic=<slug> jumps to that
        // USMLE note and /?view=compare&topic=<slug> opens the same-site
        // comparison page. The incoming query string is forwarded by
        // Next.js on redirect, so `topic` reaches the compare page.
        redirects: async () => [
          ...(isUsMLEPreview
            ? [
                {
                  source: "/",
                  has: [
                    { type: "query", key: "view", value: "compare" },
                    { type: "query", key: "topic", value: "(?<topic>[^/]+)" },
                  ],
                  destination: "/usmle/compare",
                  permanent: false,
                },
                {
                  source: "/",
                  has: [{ type: "query", key: "topic", value: "(?<topic>[^/]+)" }],
                  destination: "/usmle/:topic",
                  permanent: false,
                },
              ]
            : []),
          { source: "/psychiatric.html", destination: "/#library", permanent: true },
          { source: "/pain-management.html", destination: "/#library", permanent: true },
          { source: "/antibiotics.html", destination: "/#library", permanent: true },
          { source: "/substance-use.html", destination: "/#substances", permanent: true },
          { source: "/medicine.html", destination: "/#library", permanent: true },
          { source: "/cocaine.html", destination: "/#substances", permanent: true },
          { source: "/nicotine.html", destination: "/#substances", permanent: true },
          { source: "/amphetamine.html", destination: "/#substances", permanent: true },
          { source: "/benzodiazepines.html", destination: "/#substances", permanent: true },
          { source: "/barbiturate.html", destination: "/#substances", permanent: true },
          { source: "/inhalants.html", destination: "/#substances", permanent: true },
          { source: "/lsd.html", destination: "/#substances", permanent: true },
          { source: "/pcp.html", destination: "/#substances", permanent: true },
          { source: "/acute-intoxication.html", destination: "/#substances", permanent: true },
          { source: "/withdrawal-state.html", destination: "/#substances", permanent: true },
        ],
      }),
};

export default nextConfig;
