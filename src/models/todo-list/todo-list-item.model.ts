import { Instance, types } from "mobx-state-tree";
const TodoListItemModel = types.model({
    id: types.identifier,
    title: types.optional(types.string, ""),
    description: types.optional(types.string, ""),
    isDone: types.optional(types.boolean, false)
});

export type TTodoListItemModel = Instance<typeof TodoListItemModel>;

export default TodoListItemModel;
