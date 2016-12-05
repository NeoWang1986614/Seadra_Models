import { EntityIdUtil } from './entity-id';
import { fromJsonList, toJsonList } from './restful-crud';

export class NewsSearchQuery {
    constructor(
        public offset: number,
        public length: number
    ) { }

    static zero(): NewsSearchQuery {
        return new NewsSearchQuery(
            0,
            0
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new NewsSearchQuery(
            jsonObject.offset,
            jsonObject.length
        );
    }

    static toJson(entity: NewsSearchQuery): any {
        if (null == entity) {
            return null;
        }

        let jsonObject = {
            offset: entity.offset,
            length: entity.length
        };

        return jsonObject;
    }
}
