# Feature: Integrate Faction Selectors

**ID:** 03-integrate-faction-selectors
**Status:** Done

## Description
As per Phase 1, Step 3 of `PLAN.md`.

This feature involves updating the main `index.astro` page to display two instances of the `FactionSelector.astro` component. It also includes defining the master list of factions to be used.

## Acceptance Criteria
- `src/pages/index.astro` is updated. (Completed)
- The page imports the `Faction` type and the `FactionSelector.astro` component. (Completed)
- A definitive list of `Faction` objects is created in the script section, using the faction images from `/public/content/factions/`. (Completed)
- Two `<FactionSelector />` components are rendered in the page body. (Completed)
- The page layout places the two selectors on opposite sides (e.g., left and right). (Completed)