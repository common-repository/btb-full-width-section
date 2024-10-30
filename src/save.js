/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @param {...any} root0
 * @param {...any} root0.attributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	const { bgImage, bgImageParalax, bgImageOverlay } = attributes;

	const styles = {};
	let classnames = 'alignfull';
	if ( bgImage && bgImage.url ) {
		styles.backgroundImage = `url(${ bgImage.url })`;
		classnames += ' with-background-image';
	}

	if ( bgImage && bgImageParalax ) {
		styles.backgroundAttachment = 'fixed';
	}

	if ( bgImage && bgImageOverlay ) {
		classnames += ' with-overlay';
	}

	return (
		<div
			{ ...useBlockProps.save( {
				className: classnames,
			} ) }
			style={ styles }
		>
			<InnerBlocks.Content />
		</div>
	);
}
