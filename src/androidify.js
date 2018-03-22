function getHexString(hex) {
	return "#".concat(hex.a.toString(16),
		hex.r.toString(16),
		hex.g.toString(16),
		hex.b.toString(16))
}

function getRTLTextAlignment(alignment) {
	if (alignment === "center") {
		return "center"
	} else if (alignment === "left") {
		return "textStart"
	} else {
		return "textEnd"
	}
}

function getItems(style) {
	var array = []
	const fontFamily = {
		"@name": "app:fontFamily",
		"#text": style.fontFace
	}

	const fontStyle = {
		"@name": "android:textStyle",
		"#text": style.fontStyle
	}

	const lineHeight = {
		"@name": "android:lineHeight",
		"#text": style.lineHeight+"sp"
	}

	if (typeof style.letterSpacing != 'undefined') {
		const letterSpacing = {
		"@name": "android:letterSpacing",
		"#text": style.letterSpacing+"sp"
		}
		array.push(letterSpacing)
	}

	const color = {
		"@name": "android:textColor",
		"#text": getHexString(style.color.toHex())
	}

	const size = {
		"@name": "android:textSize",
		"#text": style.fontSize+"sp"
	}

	const align = {
		"@name": "android:textAlignment",
		"#text": getRTLTextAlignment(style.textAlign)
	}
	array.push(fontFamily, fontStyle, lineHeight, color, size, align)
	return array
}

function formatStyles(textStyles) {
	var styleArray = []
	for (let style of textStyles) {
		const styleNode = {
			"@name": style.name,
			"item": getItems(style)
		}
		styleArray.push(styleNode)
	}
	const resources = {
		"resources": {
			"style": styleArray
		}
	}
	return resources
}

export {
	formatStyles
}