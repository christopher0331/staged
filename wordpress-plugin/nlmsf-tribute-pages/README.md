# NLMSF Tribute Pages Manager

A custom WordPress plugin for managing tribute/memorial pages on nlmsf.org. This plugin allows the team to create, edit, and manage tribute pages with donor lists, biographies, and integrated donation forms.

## Features

- **Easy Tribute Management**: Create and edit tribute pages through an intuitive admin interface
- **Donor Tracking**: Add and manage donors for each tribute page
- **Image Uploads**: Upload tribute images directly from the admin interface
- **Custom URLs**: Each tribute page gets a unique, SEO-friendly URL (e.g., `/tribute/john-smith`)
- **Donation Integration**: Automatically includes Give donation form `[give_form id=4740]` on each tribute page
- **Publish Control**: Toggle tribute pages between published and draft status
- **Responsive Design**: Beautiful, mobile-friendly design for all devices

## Installation

### Step 1: Upload Plugin Files

1. Download or copy the `nlmsf-tribute-pages` folder
2. Upload it to your WordPress installation at: `/wp-content/plugins/nlmsf-tribute-pages/`

The folder structure should look like:
```
/wp-content/plugins/nlmsf-tribute-pages/
├── nlmsf-tribute-pages.php
├── assets/
│   ├── nlmsf-tribute-pages.js
│   └── nlmsf-tribute-pages.css
├── admin-interface.html
├── tribute-page-template.html
└── README.md
```

### Step 2: Activate the Plugin

1. Log into your WordPress admin dashboard
2. Go to **Plugins** → **Installed Plugins**
3. Find "NLMSF Tribute Pages Manager"
4. Click **Activate**

The plugin will automatically create the necessary database tables on activation.

## Usage

### Creating the Admin Interface Page

1. In WordPress, create a new page called "Tribute Pages Admin" (or similar)
2. Edit the page with Elementor
3. Add an **HTML widget**
4. Copy and paste the contents of `admin-interface.html` into the HTML widget
5. Publish the page

**Note:** This page should only be accessible to administrators. You may want to:
- Make it a private page
- Use a membership/role restriction plugin
- Or simply don't link to it publicly

### Creating Tribute Pages

#### Option 1: Individual Tribute Page

1. Create a new page in WordPress (e.g., "John Smith Tribute")
2. Edit with Elementor
3. Add an **HTML widget**
4. Copy the contents of `tribute-page-template.html` into the widget
5. **Important:** Update the `data-tribute-slug` attribute:
   ```html
   <div class="nlmsf-tribute-display" data-tribute-slug="john-smith">
   ```
   Replace `"john-smith"` with the actual slug from your admin interface
6. Publish the page

The page will automatically display:
- Tribute photo
- Person's name
- Biography
- Donation form
- List of donors

#### Option 2: Tribute Listing Page

To create a page showing all published tributes:

1. Create a new page (e.g., "Tributes")
2. Edit with Elementor
3. Add an **HTML widget**
4. Use the tribute listing template from `tribute-page-template.html` (uncomment the listing section)
5. Publish the page

### Managing Tribute Pages

#### Adding a New Tribute

1. Go to your admin interface page
2. Fill in the form:
   - **Name**: Person's full name
   - **URL Slug**: Auto-generates from name, or customize (used in page URLs)
   - **Biography**: Life story, accomplishments, memories
   - **Image**: Click "Upload Image" to add a photo
   - **Published**: Check to make it visible immediately
3. Click "Create Tribute Page"

#### Editing a Tribute

1. Go to your admin interface page
2. Find the tribute in the list
3. Click "Edit"
4. Make your changes
5. Click "Update Tribute Page"

#### Managing Donors

1. Go to your admin interface page
2. Find the tribute in the list
3. Click "Manage Donors"
4. Add donors by filling in:
   - **Donor Name**: Name of the donor
   - **Donation Amount**: Optional monetary amount
   - **Donation Date**: Date of donation
   - **Message**: Optional message from the donor
   - **Anonymous**: Check to hide donor name
5. Click "Add Donor"

You can add as many donors as needed. To remove a donor, click the trash icon next to their name.

#### Publishing/Unpublishing

Use the toggle switch next to each tribute to publish or unpublish it. Unpublished tributes won't show on the frontend.

#### Deleting a Tribute

1. Click the "Delete" button next to the tribute
2. Confirm the deletion
3. **Warning:** This will delete the tribute AND all associated donors permanently

## Database Tables

The plugin creates two tables:

### wp_nlmsf_tributes
Stores tribute page information:
- `id`: Unique identifier
- `name`: Person's name
- `slug`: URL-friendly slug
- `biography`: Life story/biography
- `image_url`: URL to tribute photo
- `display_order`: For custom ordering
- `is_published`: Published status (1 = published, 0 = draft)
- `created_at`: Creation timestamp
- `updated_at`: Last modified timestamp

### wp_nlmsf_tribute_donors
Stores donor information:
- `id`: Unique identifier
- `tribute_id`: Links to tribute
- `donor_name`: Name of donor
- `donation_amount`: Amount donated
- `donation_date`: Date of donation
- `is_anonymous`: Anonymous flag
- `message`: Donor's message
- `display_order`: For custom ordering
- `created_at`: Creation timestamp

## Donation Form Integration

The plugin automatically includes the Give donation form shortcode `[give_form id=4740]` on each tribute page. This form stays consistent across all tribute pages.

To change the form ID:
1. Edit `assets/nlmsf-tribute-pages.js`
2. Find the line with `[give_form id=4740]`
3. Change the ID to your desired form
4. Save the file

## Customization

### Styling

The plugin uses custom CSS that matches the NLMSF brand colors (purple gradient). To customize:

1. Edit `assets/nlmsf-tribute-pages.css`
2. Modify colors, fonts, spacing as needed
3. The main brand color is `#7e22ce` (purple)

### Layout

To modify the tribute page layout:
1. Edit the `renderTributePage()` function in `assets/nlmsf-tribute-pages.js`
2. Adjust the HTML structure as needed

## Troubleshooting

### Plugin Not Loading

If you see "Plugin Not Loaded" error:
1. Make sure the plugin is activated in WordPress
2. Clear your browser cache
3. Check browser console for JavaScript errors

### Images Not Uploading

1. Check WordPress media upload permissions
2. Ensure your server allows file uploads
3. Check file size limits in php.ini

### Donation Form Not Showing

1. Ensure the Give plugin is installed and active
2. Verify the form ID is correct (`4740`)
3. Check that the form exists in Give settings

### Shortcode Not Processing

WordPress shortcodes in HTML widgets may require:
1. Using the raw HTML directly in the page
2. Or using a plugin like "Insert HTML Snippet" that processes shortcodes

## Support

For issues or questions:
1. Check the browser console for JavaScript errors
2. Check WordPress debug log for PHP errors
3. Verify database tables were created properly
4. Contact your development team

## Version History

**Version 1.0.0**
- Initial release
- Tribute page creation and management
- Donor management
- Image upload support
- Frontend display with donation integration
- Admin interface

