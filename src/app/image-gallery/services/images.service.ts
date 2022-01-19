import { Injectable } from "@angular/core";
import { NumberUtils } from "src/app/shared/utils";
import { Image, Size } from "../models";

@Injectable()
export class ImagesService {
    
    constructor() {

    }

    getImages(numberOfImages: number) {
        const images: Image[] = [];
        for (let i = 0; i < numberOfImages; i++) {
            const image = new Image(i);
            images.push(image);
        }
        return images;
    }

}