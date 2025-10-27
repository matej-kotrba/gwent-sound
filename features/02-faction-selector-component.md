# Feature: Faction Selector Component

**ID:** 02-faction-selector-component
**Status:** Done

## Description
As per Phase 1, Step 2 of `PLAN.md`.

This feature involves creating a reusable `FactionSelector.astro` component. This component will display a list of available factions for the user to choose from.

## Acceptance Criteria
- A file named `FactionSelector.astro` exists in the `src/components/` directory. (Completed)
- The component imports the `Faction` type from `~/src/Faction.ts`. (Completed)
- The component defines and accepts a `factions` prop, which is an array of `Faction` objects. (Completed)
- The component iterates over the `factions` prop and renders each faction's image and name. (Completed)
- The component includes a client-side script to handle click events on factions. (Completed)