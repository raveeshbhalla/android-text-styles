function getHexString(hex) {
	return "#".concat(hex.a.toString(16),
		hex.r.toString(16),
		hex.g.toString(16),
		hex.b.toString(16))
}

function getItems(style) {
	var array = []
	const fontFamily = {
		"@name": "android:fontFamily",
		"#text": style.fontFamily
	}

	const sFontFamily = {
		"@name": "app:fontFamily",
		"#text": style.fontFamily
	}

	const fontFace = {
		"@name": "android:fontStyle",
		"#text": style.fontFace
	}

	const sFontFace = {
		"@name": "app:fontStyle",
		"#text": style.fontFace
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
	array.push(sFontFamily, sFontFace, lineHeight, color, size)
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