import { Constants, UrlUtils } from "src/app/shared/utils";
import { Size } from "./size";


export class Image {
    id: number;
    url: string;
    size: Size;
    description: string;

    constructor(id: number, size: Size) {
        this.id = id;
        this.size = size;
        this.description = this.generateDescription();
        this.url = this.getImageUrl();
    }

    generateDescription() {
        return 'image ' + (this.id + 1);
    }

    generateDescriptionWithSize() {
        return `image ${this.id+1} ${this.size.width} x ${this.size.height}`;
    }

    getImageUrl() {
        return `${Constants.IMAGE_BASE_URL}/${this.size.width}x${this.size.height}?text=${UrlUtils.getEncodedWithPlusesName(this.description)}`;
    }
}