import { Constants, UrlUtils } from "src/app/shared/utils";
import { Size, Color } from ".";

export class Image {
    id: number;
    url: string;
    size: Size;
    description: string;
    backgroundColor: Color;
    textColor: Color;

    constructor(id: number) {
        this.id = id;
        this.size = new Size();
        this.size.setRandomSize();
        this.description = this.getDescription();
        this.backgroundColor = new Color();
        this.backgroundColor.setRandomColor();
        this.textColor = new Color();
        this.textColor.setRandomColor(this.backgroundColor.value);
        this.url = this.getImageUrl();
    }

    getDescription() {
        return 'image ' + (this.id + 1);
    }

    getDescriptionWithSize() {
        return `image ${this.id+1} ${this.size.width} x ${this.size.height}`;
    }

    getImageUrl() {
        return `${Constants.IMAGE_BASE_URL}/${this.size.width}x${this.size.height}/${this.backgroundColor.value}/${this.textColor.value}?text=${UrlUtils.getEncodedWithPlusesName(this.getDescriptionWithSize())}`;
    }


}