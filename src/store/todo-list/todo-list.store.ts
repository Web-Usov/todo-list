import {
    types,
    destroy,
    resolveIdentifier,
    getSnapshot
} from "mobx-state-tree";
import TaskModel, { TTaskModel } from "models/todo-list/todo-list-item.model";
import { v4 as uuid } from "uuid";
import { autorun } from "mobx";

const TodoListStore = types
    .model("TodoListStore", {
        tasks: types.optional(types.array(TaskModel), [])
    })
    .views(self => ({
        get completedTasks(): TTaskModel[] {
            return self.tasks.filter(t => t.isDone);
        }
    }))
    .actions(self => ({
        add: (task: Partial<TTaskModel>) => {
            self.tasks.push({ ...task, id: uuid() });
        },
        remove: (id: string) => {
            const task = resolveIdentifier(TaskModel, self.tasks, id);
            if (task) destroy(task);
        },
        flag: (id: string) => {
            const task = resolveIdentifier(TaskModel, self.tasks, id);
            if (task) task.isDone = !task.isDone;
        },
        edit: (id: string, title: string) => {
            const task = resolveIdentifier(TaskModel, self.tasks, id);
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
