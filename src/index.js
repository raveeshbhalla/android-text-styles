/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */

function layer(context, layer) {
	return {
		code: formatStyles(layer.textStyles),
		language: "json"
	}
}

function styleguideColors(context, layer) {
	return `Colors: ${layer.name}`
}

function formatStyles(textStyles) {
	var array = []
	for (let style of textStyles) {
		const object = {
        	"style": style.name,
        	"fontFamily": style.fontFamily,
        	"fontFace": style.fontFace
    	};
    	array.push(object)
	}
	return JSON.stringify(array)
}

function styleguideTextStyles(context, textStyles) {
	return {
        code: formatStyles(textStyles),
        language: "json"
    };
}

function exportStyleguideColors(context, layer) {
	return `${layer.name}`

}

function exportStyleguideTextStyles(context, textStyles) {
	return {
        code: formatStyles(textStyles),
        language: "json",
        filename: "styles"
    };
}

function comment(context, text) {

}

export default {
    layer,
    styleguideTextStyles,
    exportStyleguideTextStyles
};