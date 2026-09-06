# SkyDrop

A single-file browser game: jump from the plane, ride your parachute down, and
land dead-center on the target. 60 procedurally generated levels take you from a
calm fixed bullseye to a speeding train and a cargo ship at sea.

## Play

Open `index.html` in any modern browser — there is no build step and no
dependencies beyond a Google Fonts stylesheet.

```bash
# from this folder
start index.html      # Windows
open index.html       # macOS
xdg-open index.html   # Linux
```

## Controls

| Input | Action |
| --- | --- |
| `<-` / `->` or `A` / `D` | Steer left / right |
| On-screen arrow pads | Steer on touch devices |

Your chute opens automatically once you fall low enough. Steer onto the moving
target before you touch the ground — landing within the target's width clears the
level.

## Levels

Difficulty ramps across six vehicle types, each with faster motion, narrower
targets, and stronger wind drift:

1. Levels 1-8 — fixed target
2. Levels 9-18 — moving car
3. Levels 19-28 — delivery van
4. Levels 29-37 — long-haul truck
5. Levels 38-47 — speeding train
6. Levels 48-54 — bobbing boat
7. Levels 55-60 — cargo ship

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The full game |
| `skydrop.html` | Earlier, smaller build |
| `skydrop demo.html` | Early demo build |
