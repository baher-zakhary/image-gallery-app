import { NumberUtils } from "src/app/shared/utils";

export class Color {

    private readonly colors: string[] = ['000000', 'FF0000', '0000FF', 'FFFF00', '008000'];
    value: string;

    setRandomColor(colorToAvoid?: string) {
        const randomIndex = NumberUtils.getRandomInt(0, this.colors.length);
        const randomColor = this.colors[randomIndex];
        if (colorToAvoid && colorToAvoid === randomColor) {
            const newIndex = NumberUtils.nextIntCyclic(randomIndex, this.colors.length);
            this.value = this.colors[newIndex];
        } else {
            this.value = randomColor;
        }
    }
}