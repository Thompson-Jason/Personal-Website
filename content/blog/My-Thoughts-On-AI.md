---
title: "My Thoughts On AI In the Workplace"
date: "2026-10-01"
description: "AI can make software engineers faster, but its biggest risk is how confidently it can be wrong. This post looks at where AI helps, where trust becomes dangerous, and why engineers still need enough context to verify the work."
tags:
  [
    "AI",
    "Software Engineering",
    "Generative AI",
    "Developer Productivity",
    "Engineering Judgment",
  ]
postNumber: 2
---

Recently, we were handing off an application we built to a new team to continue working on and maintaining it. I was tasked with creating a Knowledge Transfer (KT) document for the system to help the new team get up to speed on what it was, what it was for, and how it worked.

This seemed like a perfect use for AI. There were a ton of files to go through, different code paths, and about a year and a half of Git history to understand.

Instead of spending time going through months-old notes, PRs, and commit messages to explain the context behind all the decisions we had made, Claude would be able to do all of that for me.

That would allow me to move on and work on other things. Instead of writing a KT document, I could be working on new features or designing the next project we were about to start building.

I thought Claude would be able to generate a good document given that it had access to all of the code and the entire Git history. I figured I would just need to polish whatever it gave me.

However, when I started reviewing the generated document before passing it off to the new team, I started to notice things that were wrong. It started with small things that were mostly right, but not quite.

If it had some context from outside the specific application, it probably would have gotten the right answer, so I didn't think much of it. I explained it away as a one-off error. I could see where it got confused, and a human could have made the same mistake, so I continued on.

As I kept reading, I started to find large sections that were completely wrong. The document discussed code paths that didn't exist, incorrectly explained how data was handled and stored, and was completely wrong about what a specific service in the codebase was doing and what its role was in the overall application.

When I started finding the larger mistakes, I lost complete faith in the summary and opted to throw it out and rewrite it. I didn't trust that anything was right, so the safer option seemed to be doing it myself, a decision that would have saved me time and effort if I had made it from the beginning.

Given that I had written almost every line in the repo, I was able to quickly identify these issues and correct them.

However, if I didn't have such a deep understanding of the codebase, or if I hadn't reviewed the output closely enough, I could have passed this document on to the new team and they would have taken it as fact.

Instead of starting with a new application with the head start the KT document was intended to give them, they would have been starting at less than zero. They not only wouldn't have known how the system worked, but what they thought they knew would have been wrong.

## Trust depends on understanding

The usefulness of AI varies drastically based on the knowledge of the person using it and their ability to recognize when it is wrong. I was able to identify the mistakes because I was so familiar with the system. If this task had been assigned to someone else, they might not have caught these errors because they don't know what they don't know.

What is especially dangerous is that all of the answers sounded plausible and made sense alongside the other information Claude was providing. Any engineer who was not experienced with the system wouldn't have had much reason to doubt what was being explained in the document.

If I wasn't the person who had designed the exact system it was incorrectly describing, this could have led the new team to develop a false understanding of the system with no reason to assume that what they knew was wrong.

The same situation could have happened if I trusted Claude a little more and didn't review the document at all. The main point of using Claude here was to save time. It allowed me to work on other things while Claude wrote the document in the background.

Given that saving time was the main reason for using Claude in the first place, it would have been easy to justify not taking the time to review the work and simply pass it on.

Even at a quick glance, the document was formatted nicely. It had graphs and code snippets, all of which helped make the document feel trustworthy. The authoritative presentation made me want to take the time savings I was looking for and move on, but that would have been a mistake.

**The more responsibility you give AI, the more knowledge and verification you need to provide.**

## Where AI helps me

I find myself using AI frequently for unit test generation. Claude usually gets most of the common test cases, but it can miss edge cases and the implementation may need some cleanup.

The time it saves me on repetitive test cases and test setup allows me to pay more attention to unusual scenarios that require additional context or domain knowledge.

You still need to understand the feature well enough to know what use cases have been missed and whether the tests that were written are actually meaningful. You also need to know whether the tests are testing actual behavior or simply mirroring the implementation.

If you don't have the necessary context or domain knowledge, having AI write the tests can lead to a similar sense of false confidence as the KT document. You can see all your tests passing and the pipeline green and assume that the feature is performing as intended, even though there may still be issues that the generated tests never accounted for.

I also tend to use AI frequently when a build pipeline fails. When a pipeline fails, there can be thousands of lines of logs to go through to find the actual error. I find myself turning to AI for this.

This is another use case where I feel AI is well suited: sifting through large amounts of raw information so I don't have to. Claude can sort through the logs and point out the specific error, allowing me to focus on solving the problem instead of finding the log entry that tells me what the problem is.

**These tasks work well for me because they allow me to delegate repetitive work, not engineering judgment.**

## When wrong looks right

A bad answer that looks bad is easy to recognize. A bad answer that looks correct is much more dangerous.

With the KT document, nothing stood out as being obviously wrong. If the output hadn't assumed what different paths did and had instead acknowledged its uncertainty, the errors would have been much easier to spot.

Answering a question confidently creates a certain level of trust, and if the user hasn't caught an issue before, that only adds to that trust. This can lead to a snowball effect where the user becomes more trusting over time and starts checking the output less closely, potentially leading to even bigger mistakes.

This is also an issue for junior engineers, or simply engineers who don't have enough experience with the service they are developing, because they might not catch something subtly wrong.

This is why you need to keep the work you are offloading to Claude, or other similar AI tools, to tasks that you understand well enough to verify the result. That understanding allows you to recognize when something is wrong and push back, especially if the tool is insisting that it is right.

## AI is a tool, not an authority

AI is powerful because it can do more than most tools, but that also makes blind trust in it much more dangerous.

It is a tool that can absolutely make engineers faster, but some of the time saved on implementation has to be reinvested in verification.

Blindly trusting AI and letting it make all the decisions in software engineering is an issue waiting to happen, as one bad decision early on can cascade into more and more mistakes.

**The danger isn't using AI. It is treating AI like an authority instead of a tool that requires verification.**

Most tools are useful because we can trust their output, but generative AI is different because it can present a wrong answer with confidence. A calculator is a great tool, but unlike AI, a calculator won't confidently tell you that `2 + 2 = 5`.

**The engineer still has to own the responsibility and judgment behind the work.**
