# NLMSF Tribute Pages - Quick Start Guide

## Installation (One Time)

1. Upload the `nlmsf-tribute-pages` folder to `/wp-content/plugins/`
2. Activate the plugin in WordPress admin
3. Done! Database tables are created automatically

## Setup Admin Page (One Time)

1. Create a new WordPress page: "Tribute Admin"
2. Edit with Elementor
3. Add HTML widget
4. Copy/paste contents from `admin-interface.html`
5. Publish (keep private!)

## Adding a Tribute Page

### Step 1: Create the Tribute in Admin
1. Go to your Tribute Admin page
2. Fill in:
   - Name: "John Smith"
   - Slug: Auto-fills as "john-smith"
   - Biography: Write their story
   - Click "Upload Image" for photo
3. Click "Create Tribute Page"

### Step 2: Create the Public Page
1. Create new WordPress page: "John Smith Tribute"
2. Edit with Elementor
3. Add HTML widget
4. Copy/paste from `tribute-page-template.html`
5. **IMPORTANT:** Change this line:
   ```html
   <div class="nlmsf-tribute-display" data-tribute-slug="TRIBUTE-SLUG-HERE">
   ```
   To:
   ```html
   <div class="nlmsf-tribute-display" data-tribute-slug="john-smith">
   ```
6. Publish!

## Adding Donors

1. Go to Tribute Admin page
2. Find the tribute
3. Click "Manage Donors"
4. Fill in donor info:
   - Name
   - Amount (optional)
   - Date (optional)
   - Message (optional)
   - Check "Anonymous" if needed
5. Click "Add Donor"
6. Repeat as needed!

## Common Tasks

### Edit a Tribute
- Tribute Admin → Find tribute → Click "Edit"

### Remove a Donor
- Tribute Admin → "Manage Donors" → Click trash icon

### Hide a Tribute Temporarily
- Tribute Admin → Toggle "Published" switch off

### Change Donation Form
- Edit `assets/nlmsf-tribute-pages.js`
- Find `[give_form id=4740]`
- Change ID number

## Troubleshooting

**"Plugin Not Loaded" error:**
- Activate the plugin in WordPress

**Tribute page is blank:**
- Check the slug matches in both admin and page template

**Donors not showing:**
- Make sure you clicked "Add Donor" in the modal
- Refresh the page

**Image upload fails (403 error):**
- Use the manual URL option instead:
  1. Go to WordPress Admin → Media → Add New
  2. Upload your image there
  3. Copy the image URL
  4. Paste it in the "Paste image URL here" field in the admin interface

## Need Help?
Check the full README.md for detailed documentation.

