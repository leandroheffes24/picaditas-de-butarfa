export const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement
    const hash = target.hash
    const newHash = hash.slice(1)

    e.preventDefault()
    const section = document.getElementById(newHash)
    if(section){
        const top = section.getBoundingClientRect().top + window.scrollY - 100
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        })
    }
}