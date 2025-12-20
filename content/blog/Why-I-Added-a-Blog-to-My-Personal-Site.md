---
title: "Why I Added a Blog to My Personal Site"
date: "2025-12-19"
tags: ["personal-site", "nextjs", "blog"]
---

I’ve had a personal website for a while now, but until recently it was mostly static: a short bio, a resume, and a portfolio. Useful, but finished. The problem with finished things is that they don’t really reflect how I actually work.

I decided to add a blog not because I want to become a “content creator,” but because I wanted a place to write things down publicly as I build, learn, and occasionally get stuck.

## Why add a blog at all?

Most of my day-to-day learning already ends up somewhere: scratch notes, README files, random Markdown docs, or half-forgotten Slack threads. A blog felt like a way to bring some of that together in one place.

Writing helps me think. It forces me to slow down and explain things clearly, even if the only guaranteed reader is future me. If something here ends up being useful to someone else, that’s a bonus.

## The constraints I cared about

I didn’t want this to turn into a side project that needed constant care. I set a few constraints up front:

- Static hosting only
- No database
- No CMS
- Markdown files in Git
- Fast builds

If posting ever felt like friction, I knew I just wouldn’t do it.

## How the blog is built

This site is built with Next.js using the App Router and statically exported. Blog posts live as Markdown files in the repo, and the site is generated at build time.

A few details I cared about more than I expected:

- Each post has proper metadata, including titles, descriptions, and canonical URLs
- Links generate clean previews when shared
- Everything works without a server

None of this is particularly novel, but it’s solid, predictable, and easy to maintain, which is exactly what I wanted.

## What I plan to write about

This blog will mostly be notes from things I’m already doing:

- Building and refining side projects
- Things I learn at work that are safe to share
- Homelab experiments and setup notes
- Small problems that took longer than they should have

I’m not aiming for a strict posting schedule. I’m aiming for consistency over time.

## What’s next for the blog

The blog is intentionally simple right now, but I already have a couple quality of life improvements in mind:

- Tag filtering (so you can click a tag and see related posts)
- Search (so you can quickly find older posts)

I haven’t built either of these yet, but they’re on my list as the number of posts grows.

## Closing thoughts

This blog exists mostly for me. It’s a place to document ideas, decisions, and lessons learned so I don’t have to relearn them later.

If you’re reading this and find something helpful here down the line, that’s great. If not, that’s fine too. It’s doing its job either way.
