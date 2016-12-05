import { Publishment } from './publishment';

export class VideoRecommended {
    constructor(
        public items: Publishment[]
    ) { }

    static zero(): VideoRecommended {
        return new VideoRecommended(
            []
        );
    }

    static fromJson(jsonObject: any) {
        if (null == jsonObject) {
            return null;
        }

        return new VideoRecommended(
            jsonObject.items
        );
    }

    static toJson(entity: VideoRecommended): any {
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
