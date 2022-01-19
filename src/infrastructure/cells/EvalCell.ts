import ObjectGridCell from "../../domain/ObjectGridCell"
import ObjectGridCellMeta from "../../domain/ObjectGridCellMeta";
import ObjectGridEvalConfig from "../../domain/ObjectGridEvalConfig";


export default class EvalCell implements ObjectGridCell {
    public get isEmpty(): boolean {
        return false;
    }

    public constructor(
        private readonly expression: string,
    ) {
    }

    public eval(config: ObjectGridEvalConfig, meta: ObjectGridCellMeta): any {
        return eval(this.expression);
    }
}
