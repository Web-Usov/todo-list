export interface ITodoListItem {
    title: string;
    id: string;
    isDone: boolean;
}
export interface ITodoListItemCreate {
    title: string;
}

export interface ITodoListItemProps extends ITodoListItem {
    onDelete: () => void;
    onFlag: () => void;
    onEdit: (title: string) => void;
}

export interface ITodoListItemActionsProps {
    onFlag: () => void;
    onDelete: () => void;
    onEdit: (title: string) => void;
    isEdit: boolean;
    isDone: boolean;
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
