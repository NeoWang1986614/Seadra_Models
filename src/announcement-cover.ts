import { EntityIdUtil } from './entity-id';
import { fromJsonList, toJsonList } from './restful-crud';
import { Publishment } from './publishment';

export class AnnouncementCover {
    constructor(
        public items: Publishment[]
    ) { }

    static zero(): AnnouncementCover {
        return new AnnouncementCover(
            []
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new AnnouncementCover(
            fromJsonList(jsonObject.items, Publishment.fromJson)
        );
    }

    static toJson(entity: AnnouncementCover): any {
        if (null == entity) {
            return null;
        }

        let jsonObject = {
            items: toJsonList(entity.items, Publishment.toJson)
        };

        return jsonObject;
    }
}
