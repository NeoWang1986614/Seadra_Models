import { EntityIdUtil } from './entity-id';
import { Publishment } from './publishment';

export class TopicCover {

    constructor(
        public items: Publishment[]
    ) { }

    static zero(): TopicCover {
        return new TopicCover(
            []
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new TopicCover(
            jsonObject.items
        );
    }

    static toJson(entity: TopicCover): any {
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