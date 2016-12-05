import { EntityIdUtil } from './entity-id';
import { fromJsonList, toJsonList } from './restful-crud';
import { Publishment } from './publishment';

export class NewsCover {
    constructor(
        public items: Publishment[]
    ) { }

    static zero(): NewsCover {
        return new NewsCover(
            []
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new NewsCover(
            fromJsonList(jsonObject.items, Publishment.fromJson)
        );
    }

    static toJson(entity: NewsCover): any {
        if (null == entity) {
            return null;
        }

        let jsonObject = {
            items: toJsonList(entity.items, Publishment.toJson)
        };

        return jsonObject;
    }
}
