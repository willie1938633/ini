let inFrame

try {
    inFrame = window !== top
} catch (e) {
    inFrame = true
}

if (!inFrame && !navigator.userAgent.includes("Firefox")) {
    const popup = open("about:blank", "_blank")
    if (!popup || popup.closed) {
        alert("Allow popups and redirects to hide this from showing up in your history.")
    } else {
        const doc = popup.document
        const iframe = doc.createElement("iframe")
        const style = iframe.style
        const link = doc.createElement("link")

        const name = localStorage.getItem("name") || "Clever | Portal";
        const icon = localStorage.getItem("icon") || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFg0lEQVR4AZWXBXPrVhCF3R/1/kD0wA1Tw8zwmJmZmXG4zMzMzMxtDDJLQWV7Vtd3Vup14WXmjJzE9rdn74IUIaI7lu79YEHL9h9/LN9ge2VrXfK1BloNrYJWQsuLWgaNOxCuY9AoNAIN4W+DuA5A/VBfUT34ezeuXbh2ulTea3stYz/8uHT92wuYHWF4dH1GwBrOYNYKBzLgAh4WuAUpOH7vdQBXYA0v68C1jeVStDPtcRARdi5wdu0EnTOcwUpLlWtLOx92GA6xcwdwpwgPOoc6HQVvd/0ArFZcW1xqGf7hx0j5hlTptK/QcKfonOEOxM4dds6StLOQcoFDgAMMuYDj2goxvNnxVd5he5EiWOArlSyd9qW+JO2QpN1hcEnn1t+cW0i7H0BLMYC7oEaHJIBVJQpuqQPpYnPEOeBN67O05VSMjl2L0YkbMTpwKU5rDyaodjwrZ96u085g37WGQ64KwEg7wOJcpV07X4ggDl6N0XufpshxJ2l6eoamZ2ZoZmbWv05NTVPBcenVt5O0/kCc4exanDc5kAKXNUD1CEC7Vs6dQLVr50qDu2z69KuUD/U8j/7th/8/OTlFz76SoLrBjMAhDbca8Le6YABy5uE+R9o3nEhQLJk3wPPz8/7f5ubmcJ03ApmdnaNPv0hSRVcu6FypTiki1S5nbo3rM3epf6dNEwmBa4ec7p9+y9Mzrybp8ReS9M6HKcoXXEBn/cD4ZxLvOXdzgp2b8FqoBgHImZtptxDAB1/YBvy7n1GAxxNkdYeHTONYlm7eG6NczqUpHNU9j8TEuaQdcBZeV+sA4FwKTve5Q7suxPmLBI40f/19mppWZaXPA9Wu+3x8c5Lue/QPWtSc52rXBRd0DjhUxQGYBQe40qvvhd1zYS3dnQScwXDkO4fadKXjbyWqXeBuCG5VuhSR2R4erzXLc5TLu6HUv/qOreFF5zLbpdVkyGi4Ve8azssqoQpkwBivQ2q8rjyQDKWfe/30rZjMdnO8mnB95gG4VeUW4VA5AjC3mlos28/EaFoC8F9vPR6X2S5pNyfcv5y5wKGoDmDY3OfbT8eNALadSAgcgnN15s1uwLnArTq3NPxOlg4guM8HZJ+vOpDgXg8dwdmbMTnzFsdIu9XoAh5MO4OVLAMOLeYAFFz2ea/aanXLshgs4SJ8/V0brmWfa/jtpt1i+BJoUQEBSNplnxcHzBvvp4w2XLEjqZwbreaWhgMscHHOshZxBgZUylkKLvt83/kJqQOVBTWIRjPmmWs4wAMrbHr59Ri1D6Y1nCw/7do5tLBAZRYC4LRb6uYRckN9vrCzQJ9+mTJH8Y8Z2rw/jjNXcC42htd2ZOnijTjZacdfRN9+n6H2XgTB8CXiHHDIUQHIbZS+cw3fTIxssilpF3jBGMvox1+wjF5K0qNPJ+jN91KUzbooVllGvCW//Nqm5o60ds5pBxgqY6EG2LlKu4abfb7lcAKuCv+yjr2S/+NB9iAW0qLyPMOVrIIPt1QQOgA3sFikx4MTbmxTir76Lk3TcGju/jCY05/LO3T5eoysJQWBa+ciBNAld6867dY/9PmSpgKduDCBm4w0ue6UX6CcchYHxvufz/+hx+LUP2LrtAfgBZ16CSB45rJUgoslsM8DrdYxnKbt+2N0/OwEnYD2HpmgpWsTFK3Oc7WbcEm7vOYaMPY5wGHnPN0CrVZTYsiU6z4vSJ/7rQYQJI7ltVakvDflmftcnJeecAxW+1yPV+3aKp12U/h7RYXtRfhBUWa7uc+lzxkscOWc4QCYQ0bgknqjBlpa8GjGD4jRzozHaTfh/7LPjfFaKMLlzE1JMNEoHk6Xvr1APZ4jCH5QLG+3PZy5pL3W3GoAG2kvfealz7683PbYOcOZ/RfJ4CctxXwj/wAAAABJRU5ErkJggg==";
        
        doc.title = name;
        link.rel = "icon";
        link.href = icon;
        
        iframe.src = location.href
        style.position = "fixed"
        style.top = style.bottom = style.left = style.right = 0
        style.border = style.outline = "none"
        style.width = style.height = "100%"

        doc.head.appendChild(link);
        doc.body.appendChild(iframe)
        location.replace("https://clever.com/in/clark/student/portal")
    }
}
