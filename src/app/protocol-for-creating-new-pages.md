# Protocol for Creating New Pages in NLMSF

This document outlines the standardized approach for creating new pages in the NLMSF project, based on the successful implementation of pages like the Get Involved and Financial Assistance pages.

## File Structure

For each new page, create the following directory structure:
```
src/app/[page-name]/wordpress/
```

Within this directory, create these files:
1. `hero.html` - Contains the hero section HTML for Elementor
2. `content.html` - Contains the main content section HTML for Elementor
3. `sidebar.html` - Contains the sidebar section HTML for Elementor
4. `styles.css` - Contains all the CSS styles for the page

## Design Principles

### CSS Implementation

1. **Direct Color Values**
   - Use direct color values instead of CSS variables
   - Example: `color: #3b82f6;` instead of `color: var(--blue-500);`
   
2. **Gradient Backgrounds for Titles**
   - Apply gradient backgrounds to titles for visual appeal
   - Example:
     ```css
     .hero-title {
         background-image: linear-gradient(135deg, #a855f7, #3b82f6);
         -webkit-background-clip: text;
         background-clip: text;
         color: transparent;
     }
     ```

3. **Multiple Color Sections**
   - Use different colors for different sections to create visual interest
   - Recommended color palette:
     - Purple: `#a855f7` (hover: `#7e22ce`)
     - Blue: `#3b82f6` (hover: `#1d4ed8`)
     - Teal: `#14b8a6` (hover: `#0f766e`)
     - Amber: `#f59e0b` (hover: `#b45309`)

4. **Interactive Elements**
   - Add hover effects to all interactive elements
   - Use transform and shadow effects for depth
   - Example:
     ```css
     .action-card:hover {
         transform: translateY(-5px);
         box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
     }
     ```

5. **National Focus Elements**
   - Include nationally-relevant CTAs and support sections
   - Avoid location-specific content or promotions
   - Example:
     ```css
     .national-support {
         background-color: #faf5ff;
         border-left: 4px solid #a855f7;
     }
     ```

6. **Responsive Design**
   - Ensure all elements are responsive
   - Include media queries for different screen sizes
   - Example:
     ```css
     @media (max-width: 768px) {
         .content-container {
             flex-direction: column;
         }
     }
     ```

### HTML Structure

#### Hero Section (`hero.html`)

**Background Style:**
- Hero section should have a light blue background (#f0f7ff)
- This creates a clean, professional appearance while maintaining visual interest
- Use gradient text for the title to add visual appeal

```html
<!-- Hero Section -->
<div class="nlmsf-hero-section">
  <div class="nlmsf-hero-container">
    <div class="nlmsf-hero-content">
      <div class="nlmsf-resource-tag">Resource Category</div>
      <h1 class="nlmsf-hero-title">Page Title</h1>
      <p class="nlmsf-hero-subtitle">
        Description text that provides context about the page content and its purpose. Keep this concise but informative.
      </p>
    </div>
  </div>
</div>
```

```css
/* Example hero styling */
.nlmsf-hero-section {
  background: #f0f7ff;
  padding: 3rem 1.5rem;
  text-align: center;
}

.nlmsf-hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.nlmsf-hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
}

.nlmsf-resource-tag {
  display: inline-block;
  background-color: #e0f2fe;
  color: #2b82ea;
  font-weight: 500;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  margin-bottom: 1.5rem;
  transition: background-color 0.2s ease;
}

.nlmsf-resource-tag:hover {
  background-color: #bae6fd;
}

.nlmsf-hero-title {
  background: linear-gradient(to right, #2b82ea, #6a3ea1);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.nlmsf-hero-subtitle {
  color: #4b5563;
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}
```

#### Content Section (`content.html`)
```html
<!-- Main content sections -->
<div class="section-header">
    <h2>Section Title</h2>
</div>

<!-- Content blocks, cards, etc. -->
<div class="action-cards">
    <!-- Action cards here -->
</div>

<!-- Optional content blocks based on page requirements -->
<!-- For example: FAQ, related content, etc. -->
```

#### Sidebar Section (`sidebar.html`)
```html
<!-- Sidebar navigation -->
<div class="sidebar">
    <div class="sidebar-section">
        <h3 class="sidebar-title">
            <span class="sidebar-icon"></span>
            <span>Page Navigation</span>
        </h3>
        
        <ul class="nav-links">
            <li>
                <a href="#section-id" class="nav-link">
                    <span class="nav-icon"></span>
                    <span>Section Title</span>
                </a>
            </li>
            <!-- Additional nav links -->
            <!-- Additional page-specific navigation items as needed -->
            <!-- Example: Testimonials, FAQ, etc. -->
        </ul>
    </div>
    
    <div class="sidebar-cta">
        <h4>Call to Action Title</h4>
        <p>Brief message or call-to-action description.</p>
        <a href="/link" class="cta-button">Action Button</a>
    </div>
</div>
```

## Implementation Process

1. **Study Existing Pages**
   - Review similar pages in the project for design patterns
   - Note color schemes and component structures

2. **Create CSS File First**
   - Implement all styles with direct color values
   - Include all necessary component styles
   - Ensure responsive design with media queries

3. **Create HTML Blocks**
   - Split content into hero, main content, and sidebar
   - Use appropriate icons and classes
   - Focus on nationally-relevant content

4. **Test Responsiveness**
   - Verify that all elements display correctly on different screen sizes
   - Check that hover effects and interactions work as expected

## National Focus Elements

Always maintain a national focus in all pages:

1. **Nationwide Relevance**
   - Ensure all content is relevant to visitors from across the country
   - Avoid location-specific content or promotions that aren't nationally applicable
   - When including local examples, present them as representative cases rather than targeted content

2. **Inclusive Call-to-Actions**
   - When using CTAs, ensure they're accessible to all visitors nationwide
   - Use inclusive language that doesn't assume geographic proximity
   - Resources sections are optional and should only be included when specifically relevant to the page content

## Example Implementation

See the following pages for reference implementations:
- Financial Assistance page
- Get Involved page
- Co-Survivor Tips page

These pages demonstrate the proper implementation of the design principles and HTML structure outlined in this protocol.
