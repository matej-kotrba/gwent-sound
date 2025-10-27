# Gwent Sound App Development Plan

This document outlines the steps to develop the Gwent coin toss and faction selection application.

## Phase 1: Faction Selectors UI

**Goal:** Create the basic UI for selecting factions for two opposing sides.

1.  **Create a `Faction.ts` type definition:** In `src/`, create a file to define the structure of a faction object (e.g., `id`, `name`, `imagePath`).
2.  **Create a `FactionSelector.astro` component:**
    *   This component will display a list of available factions.
    *   It will receive the list of all factions as a prop.
    *   It will emit a custom event (e.g., `factionSelected`) with the chosen faction's ID when a user clicks on one.
3.  **Update `index.astro`:**
    *   Import and render two instances of the `FactionSelector.astro` component, one for each side of the page (e.g., left and right).
    *   Use Flexbox or CSS Grid to position them.
    *   Define the faction data (using the images from `public/content/factions`) and pass it to the selectors.

## Phase 2: State Management and Visual Feedback

**Goal:** Manage the selected factions and provide clear visual feedback for user choices.

1.  **Add Client-Side Script to `index.astro`:**
    *   Create state variables to hold the selection for `player1Faction` and `player2Faction`.
    *   Add event listeners to capture the `factionSelected` event from each `FactionSelector`.
    *   Update the state when a faction is selected.
2.  **Style the Faction Selectors:**
    *   Use Tailwind CSS to style the selectors.
    *   Apply a distinct visual style (e.g., a glowing border, increased opacity, or a background highlight) to the selected faction within each selector. This can be achieved by dynamically adding/removing CSS classes based on the current state.
    *   Ensure unselected factions are visually distinct (e.g., slightly desaturated or dimmed).

## Phase 3: Coin Toss Mechanism

**Goal:** Implement the coin toss button and logic.

1.  **Create a `Coin.astro` component:**
    *   This component will be responsible for the visual representation of the coin.
    *   It can have two faces, perhaps a generic Gwent-themed design.
    *   It will be hidden by default.
2.  **Add a "Toss Coin" Button to `index.astro`:**
    *   The button should be placed centrally on the page.
    *   It will be **disabled** by default.
    *   Use a client-side script to enable the button only when both `player1Faction` and `player2Faction` have been selected.
3.  **Implement Coin Toss Logic:**
    *   When the button is clicked, randomly choose between `player1Faction` and `player2Faction`.
    *   Store the winner in a new state variable, `winningFaction`.

## Phase 4: Animations and Effects

**Goal:** Make the experience beautiful and engaging with animations.

1.  **Coin Flip Animation:**
    *   In your `global.css` or within the `Coin.astro` component's `<style>` tag, create a CSS keyframe animation for a realistic coin flip (e.g., rotating on the Y and X axis).
    *   Trigger this animation when the "Toss Coin" button is clicked.
2.  **Reveal the Winner:**
    *   After the coin flip animation concludes, the `Coin.astro` component could change to display the emblem of the `winningFaction`.
    *   Alternatively, a larger visual effect can be triggered on the main page.

## Phase 5: Page Theming

**Goal:** The entire page should visually adapt to reflect the winning faction.

1.  **Create Faction Themes in `global.css`:**
    *   Define CSS variables or utility classes for each faction's color scheme (e.g., Monsters: red/black, Nilfgaard: yellow/black).
    *   These themes could affect background gradients, text colors, and border colors.
    *   Example:
        ```css
        :root {
            --bg-color: #222;
            --accent-color: #888;
        }
        .theme-monsters {
            --bg-color: #4c1d1d;
            --accent-color: #ef4444;
        }
        .theme-nilfgaard {
            --bg-color: #4c3d1d;
            --accent-color: #facc15;
        }
        ```
2.  **Apply Theme Dynamically:**
    *   In the `index.astro` client-side script, after the `winningFaction` is determined, add the corresponding theme class (e.g., `theme-monsters`) to the `<body>` or the main layout container. This will cause the page-wide styles to update.
