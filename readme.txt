=== BTB Full Width Section ===
Contributors: birkblauner
Donate link: https://wordpressfoundation.org/donate/
Tags: block, design
Requires at least: 6.0
Tested up to: 6.0
Stable tag: 2.0.0
Requires PHP: 7.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Full width Section block.

== Description ==

A Full width Section block with background color or image. 

With image background can paralax effect enables and overlay enables for easier text read.

== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload the plugin files to the `/wp-content/plugins/btb-full-width-section` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress

== Frequently Asked Questions ==

= Can I customize sizing of the inner content width? =

Yes. There are custom variables on the block that defines the width and padding. 
Overwrite the following variables in your style.css
`.wp-block-btb-full-width-section` - The container class 
`--content-size` - The content size. Default is `650px` 
`--wide-size` - The wide content size. Default is `1000px` 
`--block-gap` - The gap between blocks. Default is `var(--wp--style--block-gap, 1.5rem)` 
`--outer-spacing` - The padding of the sides. Default is `max(1.25rem, 5vw)`

== Screenshots ==

1. A full width section with a frog image and a full width section with a red background.

== Changelog ==

= 2.0 =
* Danish Translations
* Added CSS variables for easier adaptation in themes

= 1.0 =
* Initial plugin

== Upgrade Notice ==

= 2.0 =
This version contains translations fixes and css variables for theme customization.