import React, { useState, ReactElement } from "react";

type TFormModalHook<T> = [
    boolean,
    string,
    ReactElement,
    (values?: T) => void,
    (
        title: string,
        content: ReactElement,
        send: (values?: T) => void,
        cancel?: () => void
    ) => void,
    () => void
];
export const useFormModal = <TValues>(): TFormModalHook<TValues> => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<ReactElement>(
        React.createElement(React.Fragment)
    );
    const [send, setSend] = useState<(values?: TValues) => void>(() => {});
    const [cancel, setCancel] = useState<() => void>(() => {});

    const openDialog = (
        title: string,
        content: ReactElement,
        send: (values?: TValues) => void,
        cancel?: () => void
    ): void => {
        setTitle(title);
        setContent(content);
        setSend(() => send);
        if (cancel) setCancel(() => cancel);
        setOpen(true);
    };

    const closeDialog = (): void => {
        setOpen(false);
        if (cancel) cancel();
    };

    return [isOpen, title, content, send, openDialog, closeDialog];
};
