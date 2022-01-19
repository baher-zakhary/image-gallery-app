export class UrlUtils {
    
    static getEncodedWithPlusesName(name) {
        return name.replace(/\s/g, '+');
    }
}