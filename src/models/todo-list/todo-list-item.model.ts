import { Instance, types } from "mobx-state-tree";
const TaskModel = types.model({
    id: types.identifier,
    title: types.optional(types.string, ""),
    isDone: types.optional(types.boolean, false)
});

export type TTaskModel = Instance<typeof TaskModel>;

export default TaskModel;
