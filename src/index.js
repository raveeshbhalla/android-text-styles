import {
    json2xml
} from "./json2xml";

import {
	formatStyles
} from "./androidify"

function layer(context, layer) {

}

function styleguideColors(context, colors) {
	return `Colors: ${layer.name}`
}

function styleguideTextStyles(context, textStyles) {
	return {
        code: json2xml(formatStyles(textStyles), " "),
        language: "xml",
    };
}

function exportStyleguideColors(context, colors) {
	return `${layer.name}`

}

function exportStyleguideTextStyles(context, textStyles) {
	return {
        code: json2xml(formatStyles(textStyles), " "),
        language: "xml",
        filename: "textstyles.xml"
    };
}

function comment(context, text) {

}

export default {
    layer,
    styleguideTextStyles,
    exportStyleguideTextStyles
};