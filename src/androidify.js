function getHexString(hex) {
	return "#".concat(hex.a.toString(16),
		hex.r.toString(16),
		hex.g.toString(16),
		hex.b.toString(16))
}

function getItems(style) {
	const fontFamily = {
		"@name": "fontFamily",
		"#text": style.fontFamily
	}
	const fontFace = {
		"@name": "fontFace",
		"#text": style.fontFace
	}
	const lineHeight = {
		"@name": "android:lineHeight",
		"#text": style.lineHeight
	}

	const letterSpacing = {
		"@name": "android:letterSpacing",
		"#text": style.letterSpacing
	}

	const color = {
		"@name": "android:textColor",
		"#text": getHexString(style.color.toHex())
	}

	const size = {
		"@name": "android:textSize",
		"#text": style.fontSize
	}

	var array = []
	array.push(fontFamily, fontFace, lineHeight, letterSpacing, color, size)
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