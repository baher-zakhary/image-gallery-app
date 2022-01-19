import { Constants, UrlUtils } from "src/app/shared/utils";
import { Size, Color } from ".";

export class Image {
    id: number;
    url: string;
    size: Size;
    title: string;
    description: string;
    backgroundColor: Color;
    textColor: Color;

    constructor(id: number) {
        this.id = id;
        this.size = new Size();
        this.size.setRandomSize();
        this.title = this.getTitle();
        this.description = this.getDescription();
        this.backgroundColor = new Color();
        this.backgroundColor.setRandomColor();
        this.textColor = new Color();
        this.textColor.setRandomColor(this.backgroundColor.value);
        this.url = this.getImageUrl();
    }

    getTitle() {
        return 'image ' + (this.id + 1);
    }

    getTitleWithSize() {
        return `image ${this.id+1} ${this.size.width} x ${this.size.height}`;
    }

    getImageUrl() {
        return `${Constants.IMAGE_BASE_URL}/${this.size.width}x${this.size.height}/${this.backgroundColor.value}/${this.textColor.value}?text=${UrlUtils.getEncodedWithPlusesName(this.getTitleWithSize())}`;
    }

    getDescription() {
        return `${this.title} - Description is the pattern of narrative development that aims to make vivid a place, object, character, or group.
        Description is one of four rhetorical modes (also known as modes of discourse), along with exposition, argumentation, and narration.
        In practice it would be difficult to write literature that drew on just one of the four basic modes.`;
    }

}