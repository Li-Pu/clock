module.exports = {
    theme: {
        extend: {
            backgroundImage: {
                'image-inherit': 'inherit',
            },
            animation: {
                'color-rotate-infinite': 'colorRotate 1.5s linear infinite',
            },
            keyframes: {
                'colorRotate': {
                    '100%': { filter: 'hue-rotate(360deg)' },
                }
            }
        }
    }
}