const githubLogo = 'data:image/png;base64,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'
export default githubLogo
