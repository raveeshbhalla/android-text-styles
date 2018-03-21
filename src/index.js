import {
    json2xml
} from "./json2xml";

import {
	formatStyles
} from "./androidify"

function layer(context, layer) {
	return {
		code: formatStyles(layer.textStyles),
		language: "json"
	}
}

function styleguideColors(context, layer) {
	return `Colors: ${layer.name}`
}

function styleguideTextStyles(context, textStyles) {
	return {
        code: json2xml(formatStyles(textStyles), " "),
        language: "xml",
    };
}

function exportStyleguideColors(context, layer) {
	return `${layer.name}`

}

function exportStyleguideTextStyles(context, textStyles) {
	return {
        code: json2xml(formatStyles(textStyles), " "),
        language: "xml",
        filename: "styles.xml"
    };
}

function comment(context, text) {

}

export default {
    layer,
    styleguideTextStyles,
    exportStyleguideTextStyles
};