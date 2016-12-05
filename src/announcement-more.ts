import { EntityIdUtil } from './entity-id';
import { fromJsonList, toJsonList } from './restful-crud';

export class AnnouncementMore {
    constructor(
    ) { }

    static zero(): AnnouncementMore {
        return new AnnouncementMore(
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new AnnouncementMore(
        );
    }

    static toJson(entity: AnnouncementMore): any {
        if (null == entity) {
            return null;
        }

        let jsonObject = {
        };

        return jsonObject;
    }
}
