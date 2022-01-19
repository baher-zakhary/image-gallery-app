import { Injectable } from "@angular/core";
import { NumberUtils } from "src/app/shared/utils";
import { Image, Size } from "../models";

@Injectable()
export class ImagesService {

    private readonly imageSizes: Size[] = [new Size(150, 200), new Size(200, 150)];
    
    constructor() {

    }

    getImages(numberOfImages: number) {
        const images: Image[] = [];
        for (let i = 0; i < numberOfImages; i++) {
            const sizeIndex = NumberUtils.getRandomInt(0, 2);
            const image = new Image(i, this.imageSizes[sizeIndex]);
            images.push(image);
        }
        return images;
    }

}