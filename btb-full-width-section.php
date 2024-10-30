<?php
/**
 * Plugin Name:       BTB Full Width Section
 * Description:       Full width Section block.
 * Requires at least: 6.0
 * Requires PHP:      7.0
 * Version:           2.0.0
 * Author:            birkblauner
 * License:           GPLv2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       btb-full-width-section
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_btb_full_width_section_block_init() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'create_block_btb_full_width_section_block_init' );

/**
 * Set block translations
 */
function btb_full_width_section_block_translations() {
	wp_set_script_translations( 'btb-full-width-section-js', 'btb-full-width-section', plugin_dir_path( __FILE__ ) . 'languages' );
}

add_action( 'init', 'btb_full_width_section_block_translations' );
