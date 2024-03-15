import React, { useState } from 'react'
import { useEffect } from 'react'
import driver from '../store/driver'
import { observer } from 'mobx-react-lite'
import UpdateDriverModal from './UpdateDriverModal'
import CreateModelForm from './forms/CreateModelForm'
import { CreateModelFormConsts } from '../const/const'
import ModelTable from './tables/ModelTable'

const Drivers = observer(() => {
    useEffect(() => {
        driver.fetchDrivers()
    }, [])
    const [isOpenCreateForm, setIsOpenCreateForm] = useState(false)
    const [isOpenUpdate, setIsOpenUpdate] = useState(false)
    const [newDriver, setNewDriver] = useState(null)

    const [itemToUpdate, setItemToUpdate] = useState('')

    const createDriver = (name) => {
        driver.createDriver(name)
        setIsOpenCreateForm(false)
        setNewDriver('')
    }

    const update = (item) => {
        setItemToUpdate(item)
        setIsOpenUpdate(true)
    }

    const createFormProps = {
        header: CreateModelFormConsts.DRIVER.HEADER,
        visible: isOpenCreateForm,
        onHide: () => setIsOpenCreateForm(),
        inputPlaceholder: CreateModelFormConsts.DRIVER.INPUT_PLACEHOLDER,
        inputValue: newDriver,
        inputOnChange: (newDriver) => setNewDriver(newDriver),
        buttonLabel: CreateModelFormConsts.DRIVER.BUTTON_LABEL,
        buttonOnClick: (newDriver) => createDriver(newDriver),
        errorLabel: CreateModelFormConsts.DRIVER.ERROR_LABEL,
    }
    return (
        <div>
            <div>
                <h1>Водители:</h1>
            </div>
            <div>
                {driver.drivers.map((item) => (
                    <li key={item._id}>
                        <div>
                            <h3>{item.name}</h3>
                            <input
                                type="checkbox"
                                checked={item.banned}
                                disabled={true}
                            />
                            <button
                                onClick={() => driver.deleteDriver(item._id)}
                            >
                                X
                            </button>
                            <button onClick={() => update(item)}>U</button>
                        </div>
                    </li>
                ))}
            </div>

            <button onClick={() => driver.deleteAllDrivers()}>
                Удалить всех водителей
            </button>

            <div>
                <button onClick={() => setIsOpenCreateForm(true)}>
                    newform
                </button>
            </div>
            <div>
                <ModelTable prop />
            </div>
            <div>
                <CreateModelForm props={{ ...createFormProps }} />
            </div>
        </div>
    )
})

export default Drivers
