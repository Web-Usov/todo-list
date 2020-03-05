import {
    types,
    destroy,
    resolveIdentifier,
    getSnapshot
} from "mobx-state-tree";
import TodoListItemModel, {
    TTodoListItemModel
} from "models/todo-list/todo-list-item.model";
import { v4 as uuid } from "uuid";
import { autorun } from "mobx";

const TodoListStore = types
    .model("TodoListStore", {
        tasks: types.optional(types.array(TodoListItemModel), [])
    })
    .actions(self => ({
        add: (task: Partial<TTodoListItemModel>) => {
            self.tasks.push({ ...task, id: uuid() });
        },
        remove: (id: string) => {
            const task = resolveIdentifier(TodoListItemModel, self.tasks, id);
            if (task) destroy(task);
        },
        flag: (id: string) => {
            const task = resolveIdentifier(TodoListItemModel, self.tasks, id);
            if (task) task.isDone = !task.isDone;
        },
        edit: (id: string, title: string) => {
            const task = resolveIdentifier(TodoListItemModel, self.tasks, id);
            if (task) task.title = title;
        }
    }))
    .actions(self => ({
        afterCreate() {
            autorun(() => {
                localStorage.setItem(
                    TodoListStore.name,
                    JSON.stringify(getSnapshot(self))
                );
            });
        }
    }));

const cachedState = localStorage.getItem(TodoListStore.name);
const initialState = cachedState ? JSON.parse(cachedState) : {};
export default TodoListStore.create(initialState);
