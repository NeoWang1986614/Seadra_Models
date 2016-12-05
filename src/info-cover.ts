import { Publishment } from './publishment';

export class InfoCover {
    constructor(
        public items: Publishment[]
    ) { }

    static zero(): InfoCover {
        return new InfoCover(
            []
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new InfoCover(
            jsonObject.items
        );
    }

    static toJson(entity: InfoCover): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
            items: Publishment[];
        } = {
                items: entity.items
            };

        return jsonObject;
    }
}
