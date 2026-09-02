# GEO-QUIZ — Map Quiz

A web-based geography quiz and survey built for the **MS1 "Survey in Action"** assignment in a Math and
Statistics course. It collects responses on U.S. and European geography in order to apply sampling methods
and bias analysis in a real-world setting.

**Live site:** https://quiz.spencer-anderson.com/

---

## Academic context (MS1 — Survey in Action)

This quiz is the data-collection tool for the *"Survey in Action — Collect, Analyze, and Present"*
assignment. That assignment asks students to:

- **Design and conduct a survey** on a topic relevant to public opinion or human behavior, targeting a
  defined population.
- **Collect responses** (minimum 30 participants) and **consider how the sample may be biased**.
- **Compare** the results against an existing online survey, then **analyze and present** the findings
  while reflecting on sampling, bias, and methodology.

GEO-QUIZ fulfils the **design, data-collection, and sampling** half of that workflow:

- **Survey design** — each participant answers 40 randomly selected questions (20 U.S., 20 Europe), with
  an optional **country-of-origin** field recorded so results can be grouped and compared by nationality.
- **Target population** — anyone who takes the quiz, with country of origin captured to examine
  self-selection and coverage bias across regions.
- **Data collection** — responses are stored in a Firebase Realtime Database for later analysis and for
  comparison against existing survey data.
- **Bias analysis** — because participation is self-selected, the sample is a **convenience sample**, not a
  random representative sample; this limitation is part of the assignment's reflection on accuracy and
  generalizability.

> Full assignment details, presentation requirements, and grading criteria are defined in the course
> assignment sheet ("Survey in Action", MS1).

## What it does

The quiz presents **40 questions — 20 about the U.S. and 20 about Europe**, randomly selected per session.
Using interactive maps, participants click the correct U.S. state or European country for each prompt. The
goal of the study is to compare participants' knowledge of states and European countries and test the notion
that *"Americans don't know European geography and vice versa."*

At the start of a session, participants can optionally provide a **name** and **country of origin** (the
origin field is recommended, as it drives the study's results). Responses are stored in a Firebase Realtime
Database so the results can later be analyzed.

## How it's built

- **Vanilla HTML + CSS + JavaScript** — no front-end framework. The interactive U.S. and Europe maps are
  embedded SVGs; clickable states/countries highlight on hover and register answers with immediate
  right/wrong feedback.
- **Firebase Hosting** — serves the site (`public/` directory), with a rewrite so visits land on
  `index.html`.
- **Firebase Realtime Database** — stores participant responses for the study.
- One-time setup config lives in `firebase-config.js`.

## Project files

```
public/
├── index.html          # the quiz app (start screen, maps, questions, scoring)
├── about.html          # study background and the team behind it
└── firebase-config.js  # Firebase project configuration
firebase.json           # Firebase Hosting + database rules
database.rules.json     # Realtime Database access rules (default deny)
package.json            # firebase dependency for hosting/deploy tooling
```

## Try it

Open the live site to take the quiz:

👉 **[https://quiz.spencer-anderson.com/](https://quiz.spencer-anderson.com/)**

---

### From the About page

> Hi I'm Spencer, a student at Modul University in Vienna, Austria. My project partner Ella and I are conducting a little study for a Math and Statistics class project. I was greatly invested and built this website (I'm relatively new to WEBDEV), so watch out for any bugs. The study is 40 questions, 20 for each the U.S. and Europe randomly chosen. The goal of the survey is to compare knowledge of states and European countries in order to test the notion that Americans don't know European geography and vice versa.
