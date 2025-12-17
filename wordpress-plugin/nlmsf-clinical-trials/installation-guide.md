# NLMSF Clinical Trials WordPress Plugin - Installation Guide

## Quick Installation for SiteGround

### Method 1: Upload via WordPress Admin (Recommended)

1. **Create Plugin ZIP File**
   - Compress the entire `nlmsf-clinical-trials` folder into a ZIP file
   - Make sure the main plugin file `nlmsf-clinical-trials.php` is in the root of the ZIP

2. **Upload to WordPress**
   - Log into your WordPress admin dashboard
   - Go to **Plugins** → **Add New**
   - Click **Upload Plugin**
   - Choose the ZIP file and click **Install Now**
   - Click **Activate Plugin**

3. **Use the Plugin**
   - Add `[nlmsf_clinical_trials]` shortcode to any page or post
   - The plugin will automatically fetch and display current LMS clinical trials

### Method 2: FTP Upload to SiteGround

1. **Access SiteGround File Manager**
   - Log into your SiteGround cPanel
   - Open **File Manager**
   - Navigate to `public_html/wp-content/plugins/`

2. **Upload Plugin Files**
   - Upload the entire `nlmsf-clinical-trials` folder
   - Ensure file permissions are set to 755 for folders and 644 for files

3. **Activate in WordPress**
   - Go to WordPress Admin → **Plugins**
   - Find "NLMSF Clinical Trials" and click **Activate**

## Shortcode Usage

### Basic Usage
```
[nlmsf_clinical_trials]
```
Displays 3 clinical trials with help section.

### Advanced Usage
```
[nlmsf_clinical_trials count="5" show_help="false"]
```
Displays 5 trials without the help section.

### Parameters
- `count` - Number of trials to display (default: 3)
- `show_help` - Show help section (default: true)

## Customization

### Custom CSS
Add custom styles to your theme's `style.css` or use the WordPress Customizer:

```css
/* Customize trial card colors */
.nlmsf-trial-card {
    background: #your-color !important;
}

/* Customize title gradient */
.nlmsf-section-title {
    background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%) !important;
}
```

### Theme Integration
For seamless integration, add the shortcode to:
- **Homepage**: Add to a text block or custom HTML widget
- **Clinical Trials Page**: Add directly to page content
- **Sidebar**: Use in a text widget
- **Template Files**: Use `do_shortcode('[nlmsf_clinical_trials]')` in PHP

## Troubleshooting

### Plugin Not Working
1. Check that WordPress version is 5.0 or higher
2. Ensure PHP version is 7.4 or higher
3. Verify plugin is activated in WordPress Admin

### No Trials Displaying
1. Check internet connection - plugin needs to access ClinicalTrials.gov
2. If API is down, fallback data should display
3. Check browser console for JavaScript errors

### Styling Issues
1. Clear any caching plugins
2. Check for theme CSS conflicts
3. Use browser developer tools to inspect elements

## Support

For technical support or customization requests, contact the NLMSF development team.

## File Structure
```
nlmsf-clinical-trials/
├── nlmsf-clinical-trials.php (Main plugin file)
├── assets/
│   ├── style.css (Plugin styles)
│   └── script.js (JavaScript functionality)
├── readme.txt (WordPress plugin readme)
└── installation-guide.md (This file)
```
