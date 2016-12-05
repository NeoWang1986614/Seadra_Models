export class BaseResponse {
    constructor(
        public code: number,
        public message: string) {}

    static fromJson(jsonObject: any): BaseResponse {
        if (null == jsonObject) {
            return null;
        }

        return new BaseResponse(jsonObject.code, jsonObject.message);
    }
}

export class CreateEntityResponse<T> {
    entity: T;
    error: BaseResponse;
    
    constructor(
        rawJsonObject: any,
        unmarshaler: (entityJson: any) => T
    ) { 
        this.entity = unmarshaler(rawJsonObject.create_entity);
        this.error = BaseResponse.fromJson(rawJsonObject.error);
    }
}

export class QueryEntityResponse<T> {
    entities: T[];
    error: BaseResponse;
    
    constructor(
        rawJsonObject: any,
        unmarshaler: (entityJson: any) => T
    ) {
        this.entities = fromJsonList(rawJsonObject.query_entities, unmarshaler);
        this.error = BaseResponse.fromJson(rawJsonObject.error);
    }
}

export class SingleEntityResponse<T> {
    entity: T;
    error: BaseResponse;
    
    constructor(
        rawJsonObject: any,
        unmarshaler: (entityJson: any) => T
    ) { 
        this.entity = unmarshaler(rawJsonObject.entity);
        this.error = BaseResponse.fromJson(rawJsonObject.error);
    }
}

export class UpdateEntityResponse<T> {
    entity: T;
    error: BaseResponse;

    constructor(
        rawJsonObject: any,
        unmarshaler: (entityJson: any) => T
    ) {
        this.entity = unmarshaler(rawJsonObject.update_entity);
        this.error = BaseResponse.fromJson(rawJsonObject.error);
    }
}

export class DeleteEntityResponse<T> { 
    entity: T;
    error: BaseResponse;

    constructor(
        rawJsonObject: any,
        unmarshaler: (entityJson: any) => T
    ) {
        this.entity = unmarshaler(rawJsonObject.delete_entity);
        this.error = BaseResponse.fromJson(rawJsonObject.error);
    }
}

export function toJsonList<T>(entities: T[], marshaler: (entity: T) => any): any[] {
    if (null == entities) {
        return null;
    }

    let out = new Array(entities.length);
    for (let i = 0; i < entities.length; i++) {
        out[i] = marshaler(entities[i]);
    }
    return out
}

export function fromJsonList<T>(jsonObjects: any[], unmarshaler: (jsonObject: any) => T): T[] {
    if (null == jsonObjects) {
        return null;
    }

    let out = new Array(jsonObjects.length);
    for (let i = 0; i < jsonObjects.length; i++) {
        out[i] = unmarshaler(jsonObjects[i]);
    }
    return out;
}

export function camelizedToUnderline(value: string): string {
    let out = "";
    let s = 0;
    let e = -1;
    for (let i = 0; i < value.length; i++ ) {
        let c = value[i];
        if ((c >= 'A') && (c <= 'Z')) {
            e = i;
            out += value.substring(s, e).toLowerCase();
            out += '_';
            s = i;
        }
    }
    out += value.substring(s, value.length);
    return out;
}
