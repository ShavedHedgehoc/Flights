import React from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Dialog } from 'primereact/dialog'
import { useFormik } from 'formik'
import { classNames } from 'primereact/utils'

export default function CreateModelForm({ props }) {
    const formik = useFormik({
        initialValues: {
            value: '',
        },
        validate: (data) => {
            let errors = {}

            if (!data.value) {
                errors.value = props.errorLabel
            }

            return errors
        },
        onSubmit: () => {
            formik.resetForm()
            props.buttonOnClick(props.inputValue)
        },
    })

    const isFormFieldInvalid = (name) =>
        !!(formik.touched[name] && formik.errors[name])

    const getFormErrorMessage = (name) => {
        return isFormFieldInvalid(name) ? (
            <small className="p-error">{formik.errors[name]}</small>
        ) : (
            <small className="p-error">&nbsp;</small>
        )
    }
    const inputTextChange = (e) => {
        props.inputOnChange(e.target.value)
        formik.setFieldValue('value', e.target.value)
    }

    const dialogOnHide = () => {
        props.onHide(false)
        formik.resetForm()
    }

    return (
        <Dialog
            header={props.header}
            visible={props.visible}
            onHide={dialogOnHide}
            style={{ width: '20vw' }}
            breakpoints={{ '960px': '75vw', '641px': '100vw' }}
        >
            <form
                id="main"
                className=" form flex flex-column align-items-stretch  gap-4"
                onSubmit={formik.handleSubmit}
            >
                <div
                    id="bottom"
                    className="flex flex-column flex-1 justify-content-end gap-2"
                >
                    <div
                        id="name_input"
                        className="flex flex-column flex-1 justify-content-end gap-2"
                    >
                        <InputText
                            placeholder={props.inputPlaceholder}
                            value={props.inputValue}
                            onChange={inputTextChange}
                            className={classNames({
                                'p-invalid': isFormFieldInvalid('value'),
                            })}
                        />
                    </div>
                    <div id="error">{getFormErrorMessage('value')}</div>
                    <div
                        id="submit"
                        className="flex"
                    >
                        <Button
                            type="submit"
                            className="w-full justify-content-center"
                        >
                            {props.buttonLabel}
                        </Button>
                    </div>
                </div>
            </form>
        </Dialog>
    )
}
