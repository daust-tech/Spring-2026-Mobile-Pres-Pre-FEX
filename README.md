# 🌍 Countries App — Nativewind Demo

A React Native app built with Expo demonstrating how to use **Nativewind** 
— Tailwind CSS for React Native — through a real 2-screen countries explorer app.

---

## 👩‍💻 Author
Malika — Mobile Development Course

## 📌 Topic
**Nativewind** — Configure a React Native app and style it with the Nativewind 
library, with a theme switcher supporting 2 themes (light & dark).

---

## 📱 What the App Does

The app has 2 screens:

- **Screen 1 — Country List:** Displays a scrollable list of countries. 
Each card shows the flag, name, capital, and region. Tap a country to see more.
- **Screen 2 — Country Detail:** Shows full information about the selected country 
(capital, population, region, language, currency, area, description).

Both screens share a Header component with a built-in light/dark theme switcher.

---

## 🎨 What is Nativewind?

Nativewind is a library that brings **Tailwind CSS utility classes** to React Native.

Normally in React Native you style components like this:
```jsconst styles = StyleSheet.create({
card: {
backgroundColor: '#f3f4f6',
padding: 16,
borderRadius: 12,
}
})
<View style={styles.card}>

With Nativewind you write this instead:
```jsx<View className="bg-gray-100 p-4 rounded-xl">
````
Just like on the web. No StyleSheet. No separate objects.
Just className directly on your components.

🌗 Theme Switcher
The app uses Nativewind's built-in dark mode system:

useColorScheme() from Nativewind manages the current theme
setColorScheme("dark") / setColorScheme("light") switches themes globally
Components use dark: prefix classes to define their dark mode styles:

<View className="bg-white dark:bg-gray-900">
  <Text className="text-gray-900 dark:text-white">
    Hello
  </Text>
</View>
````
One tap on the button in the header switches the entire app instantly.

⚙️ Setup Steps

Install dependencies:

npm install nativewind
npm install --save-dev tailwindcss
npx tailwindcss init

2. `tailwind.config.js` — add content paths and nativewind preset
3. `babel.config.js` — add `jsxImportSource: "nativewind"`
4. `metro.config.js` — wrap config with `withNativeWind`
5. `global.css` — add Tailwind directives
6. Import `global.css` in `app/_layout.tsx`

---

## 📁 Project Structureapp/
_layout.tsx          → Root layout, imports global.css
index.tsx            → Screen 1: Country list
country/
[id].tsx           → Screen 2: Country detailscomponents/
Header.tsx           → Shared header with theme switcherdata/
countries.ts         → Hardcoded country data

---

## 🔍 Findings

- **Nativewind v4 is cleaner:** No babel plugin needed, just `jsxImportSource`
- **`dark:` prefix is powerful:** One class handles both themes automatically
- **`useColorScheme()` from Nativewind:** Controls theme globally with one function
- **No StyleSheet anywhere:** The entire app is styled purely with `className`
- **Cache matters:** Always run `npx expo start --clear` after config changes
- **`contentContainerClassName` exists:** FlatList has its own Nativewind prop

---

## 🚀 How to Run

```bashnpx expo start --clear
