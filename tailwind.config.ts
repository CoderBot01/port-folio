const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-blue': '#00246B',
        'light-blue': '#CADCFC',
        'baby-blue': '#8AAAE5',
      },
    },
  },
  plugins: [addVariablesForColors],
};

// Define the types for the theme
type ThemeColors = Record<string, string>; // Adjust based on your color structure
type ThemeType = (key: string) => ThemeColors;

// Example theme object
const themeColors: ThemeColors = {
  primary: '#3498db',
  secondary: '#2ecc71',
  // Add other colors as needed
};

// Implement the theme function
const theme: ThemeType = (key) => {
  return themeColors[key] || {}; // Return the color or an empty object if not found
};

// Define the type for addBase
type AddBaseType = (styles: Record<string, any>) => void; // Adjust as needed

// Example implementation of addBase
const addBase: AddBaseType = (styles) => {
  // Implementation to apply base styles, e.g., injecting styles into a CSS-in-JS solution
  console.log("Applying styles:", styles);
};

function addVariablesForColors({ addBase, theme }: { addBase: AddBaseType; theme: ThemeType }) {
  const allColors = flattenColorPalette(theme("colors"));
  
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

// Example usage
addVariablesForColors({ addBase, theme });

module.exports = { addVariablesForColors };

