import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'], // Ensure Geist Sans is the default sans-serif
      },
      colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      typography: (theme: (arg0: string) => any) => ({ // Add typography styles
        DEFAULT: {
          css: {
            color: theme('colors.foreground'),
             h1: { color: theme('colors.primary') },
             h2: { color: theme('colors.primary') },
             h3: { color: theme('colors.primary') },
             h4: { color: theme('colors.primary') },
            a: {
              color: theme('colors.accent'),
              '&:hover': {
                color: theme('colors.accent.DEFAULT / 90%'), // Slightly adjust hover color if needed
              },
            },
            strong: { color: theme('colors.foreground') },
            blockquote: {
                color: theme('colors.muted.foreground'),
                borderLeftColor: theme('colors.accent'),
            },
             // Add more styles as needed
          },
        },
         dark: { // Optional: Dark mode styles for typography
          css: {
             color: theme('colors.foreground'), // Use dark mode foreground
             h1: { color: theme('colors.primary') }, // Use dark mode primary
             h2: { color: theme('colors.primary') },
             h3: { color: theme('colors.primary') },
             h4: { color: theme('colors.primary') },
            a: {
              color: theme('colors.accent'), // Use dark mode accent
              '&:hover': {
                color: theme('colors.accent.DEFAULT / 90%'),
              },
            },
            strong: { color: theme('colors.foreground') },
            blockquote: {
                color: theme('colors.muted.foreground'),
                borderLeftColor: theme('colors.accent'),
            },
          },
        },
      }),
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
        "fade-in": { // Keyframe for fade-in animation
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
        "fade-in": "fade-in 0.5s ease-out forwards", // Animation definition
  		}
  	}
  },
  plugins: [
      require("tailwindcss-animate"),
      require('@tailwindcss/typography'), // Add typography plugin
    ],
} satisfies Config;
