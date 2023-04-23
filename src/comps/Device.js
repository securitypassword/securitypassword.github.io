export const isMobile = () => {
    const ratio = screen.width/screen.height
    return ratio < 1
}