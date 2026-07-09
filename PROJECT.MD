Instructions:

Software Developer Activity
For this activity, you will build a small, reusable UI feature using React. The primary goal is to demonstrate how you approach building components intended for use within a design system — specifically how you structure component APIs, apply design tokens, and balance flexibility with simplicity.

You will create a reusable React Card component and render three to five sample product cards in a demo. Each card represents a product with an image, title, price, and short description. Styling must use the provided design tokens, exposed as CSS custom properties and applied using standard CSS. Your implementation should use semantic HTML and follow accessibility best practices. TypeScript is expected throughout.

const theme = {
colors: {
primary: '#0066CC',
text: {
primary: '#1a1a1a',
secondary: '#666666',
},
background: {
base: '#ffffff',
hover: '#f5f5f5',
},
border: '#e0e0e0',
focus: '#0066CC',
},
spacing: {
xs: '4px',
sm: '8px',
md: '16px',
lg: '24px',
},
shadows: {
subtle: '0 1px 3px rgba(0, 0, 0, 0.1)',
medium: '0 4px 6px rgba(0, 0, 0, 0.15)',
focus: '0 0 0 3px rgba(0, 102, 204, 0.1)',
},
borderRadius: '8px',
transitions: '200ms ease-in-out',
};

Requirements

Card Component Architecture
• Design a flexible, composable Card structure
• Accept image, imageAlt, title, price, description, and link as props
• Apply design tokens via CSS custom properties
• Use semantic HTML elements with a proper heading hierarchy
• Define TypeScript types for all props; use generics where meaningful
• Keep the prop API clear and minimal
Accessibility
• Apply ARIA labels where appropriate
• Make focus states clearly visible using the focus shadow token
• Support full keyboard navigation
• Ensure color contrast compliance using the provided token colors
Product List Component
• Renders 3-5 Card components in a list with varied content
• Demonstrates the extensibility and flexibility of your Card architecture

Styling
• Apply all token values through CSS custom properties
• Include a hover state on the card and shadows
• Make the layout responsive: single column on mobile, multiple columns on desktop
Jest Tests
• Jest test case coverage