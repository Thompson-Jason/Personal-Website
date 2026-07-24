import fs from "node:fs";
import path from "node:path";

const blogDir = path.join(process.cwd(), "content", "blog");
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const title = args.filter((arg) => arg !== "--dry-run").join(" ").trim();

if (!title) {
  console.error('Usage: npm run blog:draft -- "Post Title"');
  process.exit(1);
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getNextPostNumber() {
  if (!fs.existsSync(blogDir)) {
    return 1;
  }

  return fs
    .readdirSync(blogDir)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const content = fs.readFileSync(path.join(blogDir, filename), "utf8");
      const match = content.match(/^postNumber:\s*(\d+)\s*$/m);
      return match ? Number(match[1]) : 0;
    })
    .reduce((max, current) => Math.max(max, current), 0) + 1;
}

const slug = slugify(title);

if (!slug) {
  console.error("Could not create a valid slug from that title.");
  process.exit(1);
}

const date = new Date().toISOString().slice(0, 10);
const filename = `${slug}.draft.md`;
const filePath = path.join(blogDir, filename);
const postNumber = getNextPostNumber();

if (fs.existsSync(filePath)) {
  console.error(`Draft already exists: ${path.relative(process.cwd(), filePath)}`);
  process.exit(1);
}

const draft = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
description: ""
postNumber: ${postNumber}
tags: []
---

Write your post here.
`;

if (dryRun) {
  console.log(draft);
} else {
  fs.mkdirSync(blogDir, { recursive: true });
  fs.writeFileSync(filePath, draft);
  console.log(`Created ${path.relative(process.cwd(), filePath)}`);
}
