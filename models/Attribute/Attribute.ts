import AttributeType from "./Attribute.enum";

export default class Attribute {
    private type: AttributeType;

    private value: number;

    constructor(type: AttributeType, value: number) {
        this.type = type;
        this.value = value;
    }

    getType(): AttributeType {
        return this.type;
    }

    setType(value: AttributeType) {
        this.type = value;
    }

    getValue(): number {
        return this.value;
    }

    setValue(value: number) {
        this.value = value;
    }
}