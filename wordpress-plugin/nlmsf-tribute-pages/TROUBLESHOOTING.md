# Image Upload Troubleshooting Guide

## Common Issues and Solutions

### 1. "Failed to load resource: 403 Forbidden" Error

This is the most common issue and can be caused by several factors:

#### Solution A: Check User Permissions
Make sure the logged-in user has the `upload_files` capability:
1. Go to WordPress Admin → Users → All Users
2. Edit the user account
3. In "Role", ensure they have Administrator or Editor role
4. Save changes

#### Solution B: Check WordPress Upload Settings
1. Go to WordPress Admin → Settings → Media
2. Check "Uploading Files" setting
3. Ensure it's not set to "Disabled"

#### Solution C: Check File Permissions (Server Admin Required)
```bash
# Check uploads directory permissions
ls -la /path/to/wordpress/wp-content/uploads/

# Should show something like:
# drwxrwxr-x uploads/
```

If permissions are wrong:
```bash
# Fix permissions
chmod 755 /path/to/wordpress/wp-content/uploads/
chmod 644 /path/to/wordpress/wp-content/uploads/*
```

#### Solution D: Check PHP Settings
Your hosting provider may have restrictive PHP settings. Check these in php.ini:

```ini
# File upload settings
file_uploads = On
upload_max_filesize = 64M
post_max_size = 64M
max_execution_time = 300
max_input_time = 300
memory_limit = 256M

# Security settings (may need to be adjusted)
allow_url_fopen = On
```

#### Solution E: Check .htaccess Rules
Look for any security plugins or .htaccess rules that might block uploads:

```apache
# Look for rules like this in .htaccess and temporarily disable them:
# <Files "*.php">
#     Order Deny,Allow
#     Deny from all
# </Files>
```

### 2. "File size too large" Error

The plugin now limits uploads to 5MB. To change this:

1. Edit `assets/nlmsf-tribute-pages.js`
2. Find line: `if (file.size > 5 * 1024 * 1024)`
3. Change `5` to your desired size in MB
4. Also update your server's PHP settings accordingly

### 3. "Invalid file type" Error

The plugin only allows these image formats:
- JPG/JPEG
- PNG
- GIF
- WebP

To add more formats, edit the PHP file:
1. Open `nlmsf-tribute-pages.php`
2. Find the `$allowed_types` array in `handle_image_upload()`
3. Add your desired format

### 4. Upload Works But Image Doesn't Show

This usually means the image uploaded but the URL is incorrect:

1. Check the browser's Network tab to see if the image request returns 404
2. Verify the uploads directory is accessible via web browser
3. Check if there are any CDN or caching issues

### 5. WordPress Media Library Issues

If you can't upload to the regular WordPress Media Library either:

1. **Check Disk Space**: Ensure server has enough free space
2. **Check Server Logs**: Look for PHP errors in error logs
3. **Disable Plugins**: Temporarily disable all plugins except ours
4. **Switch Themes**: Try with a default WordPress theme

## Quick Diagnostic Steps

### Step 1: Test Basic WordPress Upload
1. Go to WordPress Admin → Media → Add New
2. Try uploading an image
3. If this fails, the issue is with WordPress, not our plugin

### Step 2: Check Plugin Logs
Open browser Developer Tools (F12) → Console tab and look for:
- JavaScript errors
- Network request failures
- Any messages from our plugin

### Step 3: Test with Small Image
Try uploading a very small image (under 100KB) to see if it's a size issue.

### Step 4: Check Network Tab
1. Open Developer Tools → Network tab
2. Try uploading an image
3. Look for the upload request and check its response

## Server-Specific Issues

### Shared Hosting
Many shared hosting providers have strict security rules. Contact your host about:
- File upload restrictions
- PHP execution time limits
- Memory limits

### VPS/Dedicated Servers
Check these server configurations:
```bash
# PHP-FPM settings
/etc/php/8.0/fpm/pool.d/www.conf

# Apache/Nginx upload limits
# Apache: LimitRequestBody
# Nginx: client_max_body_size
```

### Cloud Hosting (AWS, DigitalOcean, etc.)
Check security groups and firewall rules that might block file uploads.

## Alternative Solutions

If uploads still don't work, you can:

### Option 1: Manual Image URLs
1. Upload images to WordPress Media Library manually
2. Copy the image URL
3. Paste it directly into the "Image URL" field in the admin interface

### Option 2: Use External Image Hosting
Upload images to services like:
- imgur.com
- cloudinary.com
- amazonaws.com

Then use the external URL in the admin interface.

### Option 3: FTP Upload
1. Upload images via FTP to `/wp-content/uploads/`
2. Use the direct URL in the admin interface

## Getting Help

If none of these solutions work:

1. **Check with your hosting provider** about upload restrictions
2. **Contact your server administrator** if you have server access
3. **Try on a different hosting environment** to isolate the issue
4. **Check WordPress error logs** for specific error messages

## Plugin Updates

We've updated the plugin to:
- ✅ Try custom upload handler first (avoids 403 errors)
- ✅ Fall back to WordPress default upload
- ✅ Add file size validation (5MB limit)
- ✅ Better error messages
- ✅ File type validation
- ✅ Improved security with proper nonces

Make sure you're using the latest version of all plugin files.
