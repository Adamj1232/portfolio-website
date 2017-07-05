const linkedinLogo = 'data:image/png;base64,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'

export default linkedinLogo