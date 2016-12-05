import { Publishment } from './publishment';

export class InfoMore {
    constructor(
    ) { }

    static zero(): InfoMore {
        return new InfoMore(
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new InfoMore(
        );
    }

    static toJson(entity: InfoMore): any {
        if (null == entity) {
            return null;
        }

        let jsonObject: {
        } = {
            };

        return jsonObject;
    }
}
