import { EntityIdUtil } from './entity-id';
import { Publishment } from './publishment';

export class TodayRecommended {

    constructor(
        public items: Publishment[]
    ) { }

    static zero(): TodayRecommended {
        return new TodayRecommended(
            []
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new TodayRecommended(
            jsonObject.items
        );
    }

    static toJson(entity: TodayRecommended): any {
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