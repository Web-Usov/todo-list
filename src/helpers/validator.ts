import { SubmissionErrors } from "final-form";
import {
    FIELD_CANT_CONTAINS_ONLY_SPACES,
    REQUIRED_FIELD
} from "helpers/constants";
import { ITodoListItemCreate } from "components/TodoList/types";
export const createTaskValidator = (
    values: ITodoListItemCreate
): SubmissionErrors => {
    const errors: SubmissionErrors = {};
    if (!values.title) {
        errors.title = REQUIRED_FIELD;
    }
    if (values.title && !values.title.trim()) {
        errors.title = FIELD_CANT_CONTAINS_ONLY_SPACES;
    }
    return errors;
};
