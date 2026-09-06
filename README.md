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

## Android app

The game is also packaged as an Android app with [Capacitor](https://capacitorjs.com/).
`index.html` stays the single source of truth — `npm run build:web` copies it into
`www/`, which Capacitor bundles into the app.

### Prerequisites

- Node.js 20+
- Android Studio with the Android SDK
- JDK 21 (Android Studio bundles one at
  `C:\Program Files\Android\openjdk\jdk-21.0.8`). Newer JDKs are not yet
  supported by this Gradle version — point `JAVA_HOME` at JDK 21 before building.

### Build a debug APK

```bash
npm install
npm run build:web
npx cap sync android

# from the android/ folder, with JAVA_HOME set to JDK 21
cd android
gradlew.bat assembleDebug
```

The APK lands at `android/app/build/outputs/apk/debug/app-debug.apk`.

### Open in Android Studio

```bash
npx cap open android
```

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The full game |
| `skydrop.html` | Earlier, smaller build |
| `skydrop demo.html` | Early demo build |
| `android/` | Capacitor Android project |
| `scripts/build-web.mjs` | Copies `index.html` into `www/` for packaging |
