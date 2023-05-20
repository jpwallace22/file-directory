const data = {
  name: "project",
  kind: "directory" as const,
  children: [
    {
      name: "src",
      kind: "directory" as const,
      children: [
        {
          name: "index.js",
          kind: "file" as const,
          size: "1KB",
          modified: "2022-03-08 11:30:00",
        },
        {
          name: "components",
          kind: "directory" as const,
          children: [
            {
              name: "Button.jsx",
              kind: "file" as const,
              size: "2KB",
              modified: "2022-03-07 15:00:00",
            },
            {
              name: "Card.jsx",
              kind: "file" as const,
              size: "3KB",
              modified: "2022-03-06 10:00:00",
            },
          ],
        },
        {
          name: "styles",
          kind: "directory" as const,
          children: [
            {
              name: "index.css",
              kind: "file" as const,
              size: "1KB",
              modified: "2022-03-07 09:00:00",
            },
            {
              name: "components.css",
              kind: "file" as const,
              size: "2KB",
              modified: "2022-03-06 12:00:00",
            },
          ],
        },
      ],
    },
    {
      name: "public",
      kind: "directory" as const,
      children: [
        {
          name: "index.html",
          kind: "file" as const,
          size: "1KB",
          modified: "2022-03-08 10:00:00",
        },
        {
          name: "favicon.ico",
          kind: "file" as const,
          size: "5KB",
          modified: "2022-03-07 16:00:00",
        },
      ],
    },
    {
      name: "package.json",
      kind: "file" as const,
      size: "1KB",
      modified: "2022-03-08 12:00:00",
    },
    {
      name: "README.md",
      kind: "file" as const,
      size: "2KB",
      modified: "2022-03-08 13:00:00",
    },
  ],
};

export default data;
