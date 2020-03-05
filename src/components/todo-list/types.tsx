export interface ITodoListItem {
    title: string;
    id: string;
    isDone?: boolean;
}
export interface ITodoListItemProps extends ITodoListItem {
    onDelete: (id: string) => void;
    onFlag: (id: string) => void;
    isEdit?: boolean;
    onEdit?: (title?: string) => void;
}
export interface ITodoListItemCreate {
    title: string;
}
export interface ITodoListProps {
    items: ITodoListItem[];
    onAdd: (task: ITodoListItemCreate) => void;
    onDelete: (id: string) => void;
    onFlag: (id: string) => void;
    onEdit: (id: string, title: string) => void;
}

export interface ITodoListActionsProps {
    onAdd: (task: ITodoListItemCreate) => void;
}
