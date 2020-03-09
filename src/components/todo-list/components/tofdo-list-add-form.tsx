import React, { ReactElement } from "react";
import { Form, Field } from "react-final-form";

const TodoListAddForm = (): ReactElement => {
    return (
        <Form
            onSubmit={handleSubmit}
            render={({ handleSubmit, submitError }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <Field<string>
                            label="Email"
                            name="email"
                            type="text"
                            autoFocus
                            component={TextFieldAdapter}
                            value={loginPayload.email}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            className={classNames.validatingField}
                        />
                        <Field<string>
                            label="Password"
                            name="password"
                            type="password"
                            component={TextFieldAdapter}
                            value={loginPayload.password}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            className={passwordClassNames.passwordField}
                        />
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                            >
                                Sign in
                            </Button>
                            <LinkButton onClick={handleForgot}>
                                Forgot password?
                            </LinkButton>
                        </div>
                    </form>
                );
            }}
        />
    );
};
