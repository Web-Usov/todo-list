export interface ITodoListItem {
    title: string;
    id: string;
    description?: string;
    isDone?: boolean;
}
export interface ITodoListItemProps extends ITodoListItem {
    onAdd: (task: ITodoListItemCreate) => void;
    onDelete: (id: string) => void;
}
export interface ITodoListItemCreate {
    title: string;
    description?: string;
}
export interface ITodoListProps {
    items: ITodoListItem[];
    onAdd: (task: ITodoListItemCreate) => void;
    onDelete: (id: string) => void;
}
