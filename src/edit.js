/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	PanelRow,
	ResponsiveWrapper,
	Spinner,
	ToggleControl,
} from '@wordpress/components';
import { Fragment } from '@wordpress/element';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {...any} root0
 * @param {...any} root0.attributes
 * @param {...any} root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { bgImageId, bgImage, bgImageParalax, bgImageOverlay } = attributes;
	const instructions = (
		<p>
			{ __(
				'To edit the background image, you need permission to upload media.',
				'btb-full-width-section'
			) }
		</p>
	);

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

	const onUpdateImage = ( image ) => {
		setAttributes( {
			bgImageId: image.id,
			bgImage: image,
		} );
	};

	const onRemoveImage = () => {
		setAttributes( {
			bgImageId: undefined,
			bgImage: undefined,
		} );
	};

	return (
		<Fragment>
			<InspectorControls key="setting">
				<PanelBody
					title={ __( 'Background Image', 'btb-full-width-section' ) }
					initialOpen={ true }
				>
					<PanelRow className="wp-block-btb-full-width-section-example-image">
						<MediaUploadCheck fallback={ instructions }>
							<MediaUpload
								title={ __(
									'Background image',
									'btb-full-width-section'
								) }
								onSelect={ onUpdateImage }
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								value={ bgImageId }
								render={ ( { open } ) => (
									<Button
										className={
											! bgImageId
												? 'editor-post-featured-image__toggle'
												: 'editor-post-featured-image__preview'
										}
										onClick={ open }
									>
										{ ! bgImageId &&
											__(
												'Set background image',
												'btb-full-width-section'
											) }
										{ !! bgImageId && ! bgImage && (
											<Spinner />
										) }
										{ !! bgImageId && bgImage && (
											<ResponsiveWrapper
												naturalWidth={ bgImage.width }
												naturalHeight={ bgImage.height }
											>
												<img
													src={ bgImage.url }
													alt={ __(
														'Background image',
														'btb-full-width-section'
													) }
												/>
											</ResponsiveWrapper>
										) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
						{ !! bgImageId && bgImage && (
							<MediaUploadCheck>
								<MediaUpload
									title={ __(
										'Background image',
										'btb-full-width-section'
									) }
									onSelect={ onUpdateImage }
									allowedTypes={ ALLOWED_MEDIA_TYPES }
									value={ bgImageId }
									render={ ( { open } ) => (
										<Button onClick={ open } isDefault>
											{ __(
												'Replace background image',
												'btb-full-width-section'
											) }
										</Button>
									) }
								/>
							</MediaUploadCheck>
						) }
						{ !! bgImageId && (
							<MediaUploadCheck>
								<Button
									onClick={ onRemoveImage }
									isLink
									isDestructive
								>
									{ __(
										'Remove background image',
										'btb-full-width-section'
									) }
								</Button>
							</MediaUploadCheck>
						) }
					</PanelRow>
					{ !! bgImageId && (
						<PanelRow>
							<ToggleControl
								label={ __(
									'Paralax',
									'btb-full-width-section'
								) }
								help={
									bgImageParalax
										? __(
												'Has fixed background.',
												'btb-full-width-section'
										  )
										: __(
												'No fixed background.',
												'btb-full-width-section'
										  )
								}
								checked={ bgImageParalax }
								onChange={ ( bgImageParalaxValue ) => {
									setAttributes( {
										bgImageParalax: bgImageParalaxValue,
									} );
								} }
							/>
						</PanelRow>
					) }
					{ !! bgImageId && (
						<PanelRow>
							<ToggleControl
								label={ __(
									'Image Overlay',
									'btb-full-width-section'
								) }
								help={
									bgImageOverlay
										? __(
												'Has overlay.',
												'btb-full-width-section'
										  )
										: __(
												'No overlay.',
												'btb-full-width-section'
										  )
								}
								checked={ bgImageOverlay }
								onChange={ ( bgImageOverlayValue ) => {
									setAttributes( {
										bgImageOverlay: bgImageOverlayValue,
									} );
								} }
							/>
						</PanelRow>
					) }
				</PanelBody>
			</InspectorControls>
			<div
				{ ...useBlockProps( {
					className: classnames,
				} ) }
				style={ styles }
			>
				<InnerBlocks />
			</div>
		</Fragment>
	);
}
