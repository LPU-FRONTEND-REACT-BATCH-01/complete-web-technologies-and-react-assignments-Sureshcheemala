import Card from "./Card"
import image1 from "./Assets/light-bulb-off.jpg"
import image2 from "./Assets/light-bulb-on.avif"

const Images = () => {
    let images = [image1, image2]

    return (
        <Card img src = {images} width = "200"></Card>
    )
}

export default Images