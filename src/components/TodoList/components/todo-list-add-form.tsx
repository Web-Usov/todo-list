import React, { ReactElement, useState } from "react";
import { Form, Field } from "react-final-form";
import { Button, makeStyles } from "@material-ui/core";
import { createTaskValidator } from "helpers/validator";
import { ITodoListItemCreate } from "../types";
import { SubmissionErrors } from "final-form";
import { TextFieldAdapter } from "components/Dialog";

interface ITodoListAddFormProps {
    onAdd: (values: ITodoListItemCreate) => void;
}
const useStules = makeStyles({
    titleInput: {
        height: "76px",
        marginBottom: "20px"
    }
});

const TodoListAddForm = ({ onAdd }: ITodoListAddFormProps): ReactElement => {
    const [values, setValues] = useState<ITodoListItemCreate>({
        title: ""
    });
    const handleSubmit = async (): Promise<void | SubmissionErrors> => {
        onAdd(values);
    };
    const handleChange = (property: keyof ITodoListItemCreate): Function => (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setValues({ ...values, [property]: event.target.value });
    };
    const classes = useStules();
    return (
        <Form<ITodoListItemCreate>
            onSubmit={handleSubmit}
            validate={createTaskValidator}
            initialValues={values}
            render={({ handleSubmit }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <Field<string>
                            label="Title"
                            name="title"
                            type="text"
                            component={TextFieldAdapter}
                            value={values.title}
                            onChange={handleChange("title")}
                            fullWidth
                            className={classes.titleInput}
                        />

                        <Button
                            type="submit"
                            color="primary"
                            variant="contained"
                        >
                            Create
                        </Button>
                    </form>
                );
            }}
        />
    );
};
export default TodoListAddForm;
