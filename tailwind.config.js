/** @type {import('tailwindcss').Config} */

// Enhanced Purple Theme for Landing Page
const themeColors = {
  // Primary purple system
  primary: {
    50: "#FAF5FF",
    100: "#F3E8FF",
    200: "#E9D5FF",
    300: "#D8B4FE",
    400: "#C084FC",
    500: "#A855F7",
    600: "#9333EA",
    700: "#7C3AED",
    800: "#6B21A8",
    900: "#581C87",
    950: "#3B0764",
  },

  // Secondary blue system
  secondary: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
    950: "#172554",
  },

  // Neutral grays
  neutral: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0A0A0A",
  },

  // Semantic colors
  success: {
    50: "#ECFDF5",
    100: "#D1FAE5",
    200: "#A7F3D0",
    500: "#10B981",
    600: "#059669",
    700: "#047857",
    800: "#065F46",
  },

  danger: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    500: "#EF4444",
    600: "#DC2626",
    700: "#B91C1C",
    800: "#991B1B",
  },

  warning: {
    50: "#FFFBEB",
    100: "#FEF3C7",
    200: "#FDE68A",
    500: "#F59E0B",
    600: "#D97706",
    700: "#B45309",
    800: "#92400E",
  },

  info: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
  },
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  darkMode: "class",

  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      mono: ["JetBrains Mono", "Fira Code", "monospace"],
    },

    extend: {
      colors: {
        primary: themeColors.primary,
        secondary: themeColors.secondary,
        neutral: themeColors.neutral,
        success: themeColors.success,
        danger: themeColors.danger,
        warning: themeColors.warning,
        info: themeColors.info,

        // Semantic color aliases
        background: {
          primary: "#FFFFFF",
          secondary: "#F9FAFB",
          tertiary: "#F3F4F6",
          dark: "#0F172A",
          "dark-blue": "#1E293B",
        },

        border: {
          light: "#E5E7EB",
          medium: "#D1D5DB",
          dark: "#9CA3AF",
        },

        text: {
          primary: "#111827",
          secondary: "#374151",
          tertiary: "#6B7280",
          inverse: "#FFFFFF",
        },
      },

      spacing: {
        18: "4.5rem",
        88: "22rem",
        sidebar: "16rem",
        "sidebar-collapsed": "4rem",
      },

      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        card: "0 4px 6px -1px rgba(168, 85, 247, 0.1), 0 2px 4px -1px rgba(168, 85, 247, 0.06)",
        modal: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "purple-glow": "0 0 20px rgba(168, 85, 247, 0.3)",
      },

      animation: {
        "fade-in": "fadeIn 0.2s ease-in-out",
        "slide-in": "slideIn 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "bounce-subtle": "bounceSubtle 2s infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },

      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a855f7' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),

    function ({ addBase, addComponents, addUtilities }) {
      addBase({
        ":root": {
          "--color-primary-50": themeColors.primary[50],
          "--color-primary-100": themeColors.primary[100],
          "--color-primary-500": themeColors.primary[500],
          "--color-primary-600": themeColors.primary[600],
          "--color-primary-700": themeColors.primary[700],
          "--color-background-primary": "#FFFFFF",
          "--color-background-secondary": "#F9FAFB",
          "--color-text-primary": "#111827",
          "--color-text-secondary": "#374151",
          "--border-radius-default": "0.5rem",
          "--shadow-default":
            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        },

        html: {
          scrollBehavior: "smooth",
        },

        body: {
          backgroundColor: "#FFFFFF",
          color: "#111827",
          fontFamily: "Inter, system-ui, sans-serif",
          lineHeight: "1.6",
        },

        "*:focus-visible": {
          outline: "2px solid #A855F7",
          outlineOffset: "2px",
        },
      });

      addComponents({
        ".btn": {
          "@apply inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed":
            {},
        },

        ".btn-primary": {
          "@apply btn bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 focus:ring-primary-500 shadow-lg hover:shadow-purple-glow":
            {},
        },

        ".btn-secondary": {
          "@apply btn bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-50 focus:ring-primary-500 shadow-sm":
            {},
        },

        ".btn-ghost": {
          "@apply btn text-neutral-600 hover:bg-neutral-100 focus:ring-primary-500":
            {},
        },

        ".card": {
          "@apply bg-white rounded-lg border border-neutral-200 shadow-sm": {},
        },

        ".card-header": {
          "@apply px-6 py-4 border-b border-neutral-200": {},
        },

        ".card-body": {
          "@apply px-6 py-4": {},
        },

        ".card-footer": {
          "@apply px-6 py-4 border-t border-neutral-200 bg-neutral-50": {},
        },

        ".form-input": {
          "@apply block w-full px-3 py-2 border border-neutral-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 disabled:bg-neutral-50 disabled:text-neutral-500":
            {},
        },

        ".form-label": {
          "@apply block text-sm font-medium text-neutral-700 mb-1": {},
        },

        ".form-error": {
          "@apply text-sm text-danger-600 mt-1": {},
        },

        ".badge": {
          "@apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium":
            {},
        },

        ".badge-success": {
          "@apply badge bg-success-100 text-success-800": {},
        },

        ".badge-warning": {
          "@apply badge bg-warning-100 text-warning-800": {},
        },

        ".badge-danger": {
          "@apply badge bg-danger-100 text-danger-800": {},
        },

        ".badge-info": {
          "@apply badge bg-info-100 text-info-800": {},
        },

        ".sidebar": {
          "@apply fixed inset-y-0 left-0 z-50 w-sidebar bg-white border-r border-neutral-200 transform transition-transform duration-300 ease-in-out":
            {},
        },

        ".main-content": {
          "@apply flex-1 ml-sidebar min-h-screen bg-background-secondary": {},
        },

        ".page-header": {
          "@apply bg-white border-b border-neutral-200 px-6 py-4": {},
        },
      });

      addUtilities({
        ".animate-fade-in": {
          animation: "fadeIn 0.6s ease-out",
        },

        ".animate-slide-in": {
          animation: "slideIn 0.5s ease-out",
        },

        ".animate-slide-up": {
          animation: "slideUp 0.6s ease-out",
        },

        ".animate-slide-left": {
          animation: "slideLeft 0.6s ease-out",
        },

        ".animate-slide-right": {
          animation: "slideRight 0.6s ease-out",
        },

        ".animate-bounce-in": {
          animation: "bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        },

        ".animate-float-slow": {
          animation: "floatSlow 8s ease-in-out infinite",
        },

        ".animate-float-fast": {
          animation: "floatFast 4s ease-in-out infinite",
        },

        ".animate-glow": {
          animation: "glow 2s ease-in-out infinite alternate",
        },

        ".animate-shimmer": {
          animation: "shimmer 2.5s linear infinite",
        },

        ".animate-rotate-slow": {
          animation: "rotateSlow 20s linear infinite",
        },

        ".animate-rotate-fast": {
          animation: "rotateFast 10s linear infinite",
        },

        ".scrollbar-modern::-webkit-scrollbar": {
          width: "8px",
        },

        ".scrollbar-modern::-webkit-scrollbar-track": {
          "@apply bg-gray-100 rounded-full": {},
        },

        ".scrollbar-modern::-webkit-scrollbar-thumb": {
          "@apply bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full":
            {},
        },

        ".scrollbar-modern::-webkit-scrollbar-thumb:hover": {
          "@apply from-primary-600 to-secondary-600": {},
        },
      });
    },
  ],
};

module.exports.themeColors = themeColors;
