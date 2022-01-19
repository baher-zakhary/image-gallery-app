import { NumberUtils } from "src/app/shared/utils";

export class Size {

    private static readonly imageSizes: Size[] = [new Size(150, 200), new Size(200, 150)];

    width: number;
    height: number;

    constructor(width?: number, height?: number) {
        this.width = width;
        this.height = height;
    }

    setRandomSize() {
        const randomIndex = NumberUtils.getRandomInt(0, 2);
        this.width = Size.imageSizes[randomIndex].width;
        this.height = Size.imageSizes[randomIndex].height;
    }
}