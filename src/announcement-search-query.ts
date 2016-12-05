import { EntityIdUtil } from './entity-id';
import { fromJsonList, toJsonList } from './restful-crud';

export class AnnouncementSearchQuery {
    constructor(
        public offset: number,
        public length: number
    ) { }

    static zero(): AnnouncementSearchQuery {
        return new AnnouncementSearchQuery(
            0,
            0
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new AnnouncementSearchQuery(
            jsonObject.offset,
            jsonObject.length
        );
    }

    static toJson(entity: AnnouncementSearchQuery): any {
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
