import { EntityIdUtil } from './entity-id';
import { Publishment } from './publishment';

export class TopicMoreSearch {

    constructor(
        public items: Publishment[]
    ) { }

    static zero(): TopicMoreSearch {
        return new TopicMoreSearch(
            []
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new TopicMoreSearch(
            jsonObject.items
        );
    }

    static toJson(entity: TopicMoreSearch): any {
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