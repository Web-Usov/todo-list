import React, { ReactElement } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography, styled } from "@material-ui/core";

interface IProps {
    isOpen: boolean;
    title: string;
    dialogContent: string;
    handleConfirm?: () => void;
    handleCancel?: () => void;
}

const Title = styled(Typography)({
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
});

export const ConfirmDialog = (props: IProps): ReactElement => {
    return (
        <Dialog
            open={props.isOpen}
            onClose={props.handleCancel}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle disableTypography id="alert-dialog-title">
                <Title variant="h6">{props.title}</Title>
            </DialogTitle>
            <DialogContent>
                <DialogContentText
                    id="alert-dialog-description"
                    align={"center"}
                >
                    {props.dialogContent}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <React.Fragment>
                    <Button onClick={props.handleCancel} variant="contained">
                        Cancel
                    </Button>
                    <Button
                        onClick={props.handleConfirm}
                        variant="contained"
                        color="primary"
                        autoFocus
                    >
                        Confirm
                    </Button>
                </React.Fragment>
            </DialogActions>
        </Dialog>
    );
};
