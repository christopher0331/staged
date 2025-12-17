=== NLMSF Clinical Trials ===
Contributors: nlmsf
Tags: clinical-trials, leiomyosarcoma, medical, health, cancer
Requires at least: 5.0
Tested up to: 6.4
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Display current leiomyosarcoma clinical trials from ClinicalTrials.gov with NLMSF styling.

== Description ==

The NLMSF Clinical Trials plugin fetches and displays current leiomyosarcoma clinical trials from the ClinicalTrials.gov API. It provides a clean, responsive interface that matches the NLMSF website design.

**Features:**
* Fetches real-time data from ClinicalTrials.gov API
* Displays recruiting LMS clinical trials
* Responsive design with NLMSF branding
* Fallback data if API is unavailable
* Easy shortcode implementation
* Click tracking for analytics
* Loading states and error handling

**Usage:**
Use the shortcode `[nlmsf_clinical_trials]` to display clinical trials anywhere on your site.

**Shortcode Parameters:**
* `count` - Number of trials to display (default: 3)
* `show_help` - Show help section (default: true)

**Examples:**
* `[nlmsf_clinical_trials]` - Display 3 trials with help section
* `[nlmsf_clinical_trials count="5"]` - Display 5 trials
* `[nlmsf_clinical_trials show_help="false"]` - Hide help section

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/nlmsf-clinical-trials` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. Use the `[nlmsf_clinical_trials]` shortcode in any post, page, or widget.

== Frequently Asked Questions ==

= How often is the clinical trials data updated? =
The plugin fetches data in real-time from ClinicalTrials.gov each time the page loads, ensuring the most current information is displayed.

= What happens if the API is unavailable? =
The plugin includes fallback data to ensure the component always displays useful information, even if the ClinicalTrials.gov API is temporarily unavailable.

= Can I customize the styling? =
Yes, the plugin uses CSS classes prefixed with `nlmsf-` that can be overridden in your theme's CSS file.

= Does it work with caching plugins? =
Yes, the plugin uses AJAX to fetch data dynamically, so it works with most caching plugins.

== Screenshots ==

1. Clinical trials display with loading state
2. Trial cards showing study information
3. Help section for user support
4. Responsive mobile view

== Changelog ==

= 1.0.0 =
* Initial release
* ClinicalTrials.gov API integration
* Responsive NLMSF-styled interface
* Shortcode functionality
* Error handling and fallback data

== Upgrade Notice ==

= 1.0.0 =
Initial release of the NLMSF Clinical Trials plugin.
