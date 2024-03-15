import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import flight from '../store/flight'
import point from '../store/point'
import driver from '../store/driver'
import { StateConstants } from '../const/const'
import { Button } from 'primereact/button'
import DashboardTable from './tables/DashboardTable'
import CreateFlightForm from './forms/CreateFlightForm'
import { FlightTypeConstants } from '../const/const'

const Dashboard = observer(() => {
    // add api Error handling
    useEffect(() => {
        flight.fetchLastFlights()
        point.fetchPoints()
        driver.fetchDrivers()
    }, [])
    const [isOpenCreate, setIsOpenCreate] = useState(false)

    const [driverId, setDriverId] = useState()
    const [arrivalId, setArrivalId] = useState()
    const [departureId, setDepartureId] = useState()
    const [flightType, setFlightType] = useState(FlightTypeConstants.ORDER)

    const sendFlight = (item) => {
        item.currentState = StateConstants.ONTRAFFIC
        item.loadingEndTime = new Date()
        flight.updateFlight(item)
    }
    const acceptFlight = (item) => {
        item.unloadingStartTime = new Date()
        item.currentState = StateConstants.UNLOADING
        flight.updateFlight(item)
    }
    const unloadFlight = (item) => {
        item.unloadingEndTime = new Date()
        item.currentState = StateConstants.UNLOADED
        flight.updateFlight(item)
    }
    const closeFlight = (item) => {
        item.awayTime = new Date()
        // item.activeAttr = false;
        item.currentState = StateConstants.FINISHED
        item.endAttr = true
        flight.updateFlight(item)
    }

    const create = (driverId, arrivalId, departureId, flightType) => {
        const loadingStartTime = new Date().toLocaleString('en-US', {
            timezone: 'Europe/Moscow',
            hour12: false,
        })
        const creatorId = null

        flight.createFlight(
            driverId,
            arrivalId,
            departureId,
            flightType,
            loadingStartTime,
            creatorId
        )
        setIsOpenCreate(false)
    }
    const makeOptions = (arr) => {
        let items = []
        arr.map(
            (item) =>
                (items = [
                    ...items,
                    { key: item._id, code: item._id, name: item.name },
                ])
        )
        return items
    }
    const makeRadioOptions = (arr) => {
        let items = []
        for (var key in arr) {
            items = [...items, arr[key]]
        }
        return items
    }

    const driverOptions = makeOptions(driver.drivers)
    const pointOptions = makeOptions(point.points)
    const flightOptions = makeRadioOptions(FlightTypeConstants)
    const createFormProps = {
        driverId: driverId,
        arrivalId: arrivalId,
        departureId: departureId,
        flightType: flightType,
        driverOptions: driverOptions,
        pointOptions: pointOptions,
        flightOptions: flightOptions,
        isOpenCreate: isOpenCreate,
        actions: {
            setDriverId: (driverId) => setDriverId(driverId),
            setArrivalId: (arrivalId) => setArrivalId(arrivalId),
            setDepartureId: (departureId) => setDepartureId(departureId),
            setFlightType: (flightType) => setFlightType(flightType),
            create: (driverId, arrivalId, departureId, flightType) =>
                create(driverId, arrivalId, departureId, flightType),
            setIsOpenCreate: () => setIsOpenCreate(),
        },
    }
    const tableProps = {
        items: flight.flights,
        actions: {
            sendFlight: (item) => sendFlight(item),
            acceptFlight: (item) => acceptFlight(item),
            unloadFlight: (item) => unloadFlight(item),
            closeFlight: (item) => closeFlight(item),
        },
    }
    return (
        <div className="flex flex-column flex-grow-0 pt-3 pb-4">
            <div className="flex justify-content-center mt-1 mb-1 ">
                <Button
                    className="pt-2 pb-2 pr-6 pl-6"
                    onClick={() => setIsOpenCreate(true)}
                >
                    Добавить рейс
                </Button>
            </div>
            {flight.flights.length > 0 && (
                <DashboardTable props={{ ...tableProps }} />
            )}
            <CreateFlightForm props={{ ...createFormProps }} />
        </div>
    )
})

export default Dashboard
