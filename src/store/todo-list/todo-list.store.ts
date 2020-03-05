import {
    types,
    applySnapshot,
    destroy,
    resolveIdentifier
} from "mobx-state-tree";
import TodoListItemModel, {
    TTodoListItemModel
} from "models/todo-list/todo-list-item.model";
import { v4 as uuid } from "uuid";

const TodoListStore = types
    .model("TodoListStore", {
        tasks: types.optional(types.array(TodoListItemModel), [])
    })
    .actions(self => ({
        reset: () => {
            applySnapshot(self.tasks, []);
        },
        add: (task: Partial<TTodoListItemModel>) => {
            self.tasks.push({ ...task, id: uuid() });
        },
        remove: (id: string) => {
            const task = resolveIdentifier(TodoListItemModel, self.tasks, id);
            if (task) destroy(task);
        }
    }));

// const cachedState = localStorage.getItem(TodoListStore.name);
// const initialState = cachedState ? JSON.parse(cachedState) : {};
export default TodoListStore.create({});
