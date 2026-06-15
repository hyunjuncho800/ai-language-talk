---
name: CocoTalk Design System
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#414751'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ed'
  outline: '#727782'
  outline-variant: '#c1c6d3'
  surface-tint: '#075fab'
  primary: '#075fab'
  on-primary: '#ffffff'
  primary-container: '#5d9cec'
  on-primary-container: '#003260'
  inverse-primary: '#a4c9ff'
  secondary: '#006d43'
  on-secondary: '#ffffff'
  secondary-container: '#93f3bb'
  on-secondary-container: '#007146'
  tertiary: '#825500'
  on-tertiary: '#ffffff'
  tertiary-container: '#cd8d24'
  on-tertiary-container: '#472c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004884'
  secondary-fixed: '#95f6be'
  secondary-fixed-dim: '#7adaa3'
  on-secondary-fixed: '#002111'
  on-secondary-fixed-variant: '#005231'
  tertiary-fixed: '#ffddb3'
  tertiary-fixed-dim: '#ffb951'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#633f00'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  stack-xs: 4px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
  stack-xl: 40px
  stack-xxl: 64px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 120px
  max-width: 1280px
---

## Brand & Style
The brand personality is rooted in empathy, safety, and encouragement. This design system serves parents and specialists navigating the delicate journey of child language development. The emotional response should be one of "gentle clarity"—reducing the anxiety often associated with developmental milestones through a soft, organic aesthetic.

The visual style is **Modern-Organic with Soft-Tactile influences**. It avoids the clinical coldness of traditional medical apps, instead opting for a "nursery-modern" look. This is achieved through generous whitespace, rounded geometry, and a palette that feels like a warm embrace. UI elements should feel soft to the touch, using subtle depth to guide the eye without overwhelming the user.

## Colors
The color strategy uses a base of **Ivory (#F9F7F2)** and **Light Beige (#FDFBF7)** to create a low-contrast, calming environment. 

- **Primary (Warm Blue):** Used for primary actions and progress indicators. It represents trust and calm communication.
- **Secondary (Mint Green):** Used for "success" states and developmental "on-track" indicators.
- **Tertiary (Soft Amber):** Used for "attention required" or "pending" status, providing warmth without the alarm of harsh yellows.
- **Traffic Light System:** For developmental tracking, use a muted palette of the Green (on track), Amber (monitoring), and a Soft Red (support needed) to remain informative but non-threatening.

## Typography
The typography system prioritizes legibility and a friendly "voice." 

- **Plus Jakarta Sans** is used for headlines. Its slightly rounded terminals and open apertures feel modern yet approachable.
- **Be Vietnam Pro** is used for body text and labels. It offers exceptional readability at smaller sizes while maintaining a warm, contemporary character.
- **Scale:** Font sizes are intentionally bumped up (18px for standard body) to accommodate parents who may be viewing the screen while distracted or in low-light environments (e.g., late-night logging).

## Layout & Spacing
The layout follows a **Fluid Grid** model with high internal padding to prevent visual clutter.

- **Desktop:** 12-column grid with wide 120px side margins to keep content centered and focused.
- **Mobile:** Single column with 20px margins. 
- **Spacing Rhythm:** We use a base-8 scale but emphasize the larger increments (24px, 40px, 64px) to create "breathing room." Information is grouped into distinct modules (cards) to prevent a "wall of text" effect. Layouts should never feel cramped; if in doubt, increase the `stack-xl` padding.

## Elevation & Depth
Depth is used sparingly to suggest "softness" and physical layering.

- **Surface Strategy:** The main background is the darkest surface (`#F9F7F2`). Content "floats" on top of this in pure white or light beige cards.
- **Shadows:** Use extremely diffused, low-opacity shadows (e.g., `y: 4, blur: 20, color: rgba(58, 53, 48, 0.05)`). Shadows should look like ambient light hitting a soft surface, not a harsh drop.
- **Tonal Layers:** Use subtle inner glows or 1px strokes in a slightly darker neutral tone to define card boundaries without creating hard edges.

## Shapes
The shape language is organic and friendly. 

- **Standard Elements:** Buttons and input fields use a minimum of 12px (`rounded-lg`) corner radius.
- **Containers:** Large cards and feature blocks should use 24px (`rounded-xl`) to emphasize a safe, non-sharp environment.
- **Interactive States:** Use "squircle" inspirations where possible—avoiding perfect circles unless for icons, preferring highly rounded rectangles that feel hand-molded.

## Components

### Buttons & Inputs
- **Primary Buttons:** Large (min 48px height for touch-target safety), with 24px corner radius. Use the primary warm blue with white text.
- **Inputs:** Soft-beige backgrounds with a 1px border that shifts to blue on focus. Always include clear, persistent labels and helpful micro-copy.

### Cards
- White backgrounds with `rounded-xl` (24px) corners. 
- Cards should have generous internal padding (min 24px) to ensure content never feels pressured.

### Status Badges (Traffic Lights)
- **Developmental Markers:** Use pill-shaped badges.
- **Green (Progress):** Light mint background with dark green text.
- **Amber (Observation):** Light peach background with dark amber text.
- **Red (Action):** Soft rose background with dark red text.
- Always accompany colors with an icon (Check, Eye, or Alert) to ensure accessibility for colorblind users.

### Interactive Progress Rings
- Use for language milestone tracking. Thick, rounded stroke caps in primary blue against a soft beige track.

### Accessibility Targets
- All interactive elements must maintain a minimum 44x44pt touch area, even if the visual element is smaller.