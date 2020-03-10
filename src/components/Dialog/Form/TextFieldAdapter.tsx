import { FieldRenderProps } from "react-final-form";
import { TextFieldProps } from "@material-ui/core/TextField";
import React, { ReactElement } from "react";
import { TextField } from "@material-ui/core";

/**
 * Material UI Text Field Adapter for React Final Form Field
 * @param props
 * @constructor
 */
export const TextFieldAdapter = <TValues, V>(
    props: FieldRenderProps<TValues> & TextFieldProps
): ReactElement => {
    const { input, meta, helperText, onChange, ...otherProps } = props;
    const showSubmitError = meta.submitError && !meta.dirtySinceLastSubmit;
    const showError = (showSubmitError || meta.error) && meta.touched;

    const getHelperText = (): string => {
        return meta.touched
            ? meta.error || (showSubmitError && meta.submitError) || helperText
            : helperText;
    };

    const handleOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        input.onChange(event);
        onChange && onChange(event);
    };

    return (
        <TextField
            {...input}
            {...otherProps}
            error={showError}
            helperText={getHelperText()}
            onChange={handleOnChange}
        />
    );
};
