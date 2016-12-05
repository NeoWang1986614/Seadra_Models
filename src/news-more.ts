import { EntityIdUtil } from './entity-id';
import { fromJsonList, toJsonList } from './restful-crud';

export class NewsMore {
    constructor(
    ) { }

    static zero(): NewsMore {
        return new NewsMore(
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new NewsMore(
        );
    }

    static toJson(entity: NewsMore): any {
        if (null == entity) {
            return null;
        }

        let jsonObject = {
        };

        return jsonObject;
    }
}
