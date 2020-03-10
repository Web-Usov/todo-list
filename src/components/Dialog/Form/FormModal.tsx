import React, { ReactElement } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IconButton, styled } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

interface IProps {
    isOpen: boolean;
    title: string;
    form: ReactElement;
    handleSubmit?: () => void;
    handleClose?: () => void;
    withSendButton?: boolean;
    buttonSendText?: string;
}
const DialogTitleStyled = styled("div")({
    display: "flex",
    alignItems: "start"
});
export const FormModal = (props: IProps): ReactElement => {
    return (
        <Dialog
            open={props.isOpen}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitleStyled>
                <DialogTitle id="alert-dialog-title" style={{ flex: "auto" }}>
                    {props.title}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={props.handleClose}
                    style={{ margin: "10px" }}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </DialogTitleStyled>
            <DialogContent style={{ padding: "24px" }}>
                {props.form}
            </DialogContent>
            {props.withSendButton && (
                <DialogActions>
                    <React.Fragment>
                        <Button
                            onClick={props.handleSubmit}
                            variant="contained"
                            color="primary"
                            autoFocus
                        >
                            {props.buttonSendText || "Submit"}
                        </Button>
                    </React.Fragment>
                </DialogActions>
            )}
        </Dialog>
    );
};
