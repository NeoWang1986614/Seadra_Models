import { EntityIdUtil } from './entity-id';
import { Publishment } from './publishment';

export class ShufflingFigure {

    constructor(
        public items: Publishment[]
    ) { }

    static zero(): ShufflingFigure {
        return new ShufflingFigure(
            []
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new ShufflingFigure(
            jsonObject.items
        );
    }

    static toJson(entity: ShufflingFigure): any {
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