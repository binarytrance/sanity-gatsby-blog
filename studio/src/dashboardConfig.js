export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60cf3c4e0d9f1265b99f84dd",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-o3dhmecq",
                  apiId: "50287303-50c9-4541-b1ec-27ada0c3ff0f",
                },
                {
                  buildHookId: "60cf3c4e2d18a1e56a85bc2d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-371bqvpn",
                  apiId: "4a6173f4-d91c-4bfe-a440-129596b22b8f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/binarytrance/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-371bqvpn.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
