import { CardImage } from "./CardImage";

export default {
    title: 'Card Image',
    component: CardImage,
    layout: 'centered',
    tags: ['autodocs'],
}

export const Main = {
    args: {
        image: {
            width: 1636,
            height: 2545,
            path: '../public/images/1.jpg',
            alt: "street view"
        }
    }
}