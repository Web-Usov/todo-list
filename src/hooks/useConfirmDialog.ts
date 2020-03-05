import { useState } from "react";

type TConfirmDialogHook = [
    boolean,
    string,
    string,
    () => void,
    (
        title: string,
        content: string,
        confirm: () => void,
        cancel?: () => void
    ) => void,
    () => void
];

export const useConfirmDialog = (): TConfirmDialogHook => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [confirm, setConfirm] = useState<() => void>(() => {});
    const [cancel, setCancel] = useState<() => void>(() => {});

    const openDialog = (
        title: string,
        content: string,
        confirm: () => void,
        cancel?: () => void
    ): void => {
        setTitle(title);
        setContent(content);
        setConfirm(() => confirm);
        if (cancel) setCancel(() => cancel);
        setOpen(true);
    };

    const closeDialog = (): void => {
        setOpen(false);
        if (cancel) cancel();
    };

    return [isOpen, title, content, confirm, openDialog, closeDialog];
};
