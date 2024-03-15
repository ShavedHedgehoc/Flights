import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { StateConstants, DashButtonLabelConstants } from '../../const/const'
import DashboardTableCard from '../ui/DasboardTableCard'
import DashboardTableButton from '../ui/DashBoardTableButton'
import DashboardTableIndicator from '../ui/DashboardTableIndicator'

export default function DashboardTable({ props }) {
    const driverBodyTemplate = (item) => {
        return <div className="">{item.driverId.name}</div>
    }
    const indicatorBodyTemplate = (item) => {
        return (
            <DashboardTableIndicator
                props={{
                    currentState: item.currentState,
                    activeStates: [
                        StateConstants.LOADING,
                        StateConstants.ONTRAFFIC,
                        StateConstants.UNLOADING,
                    ],
                    idleStates: [StateConstants.UNLOADED],
                    inactiveStates: [StateConstants.FINISHED],
                }}
            />
        )
    }
    const arrivalBodyTemplate = (item) => {
        return (
            <DashboardTableCard
                props={{
                    currentState: item.currentState,
                    arrivalName: item.arrivalId.name,
                    departureName: item.departureId.name,
                    startTime: item.loadingStartTime,
                    endTime: item.loadingEndTime,
                    flightType: item.flightType,
                    activeStates: [StateConstants.LOADING],
                    visibleStates: [
                        StateConstants.LOADING,
                        StateConstants.ONTRAFFIC,
                        StateConstants.UNLOADING,
                        StateConstants.UNLOADED,
                        StateConstants.FINISHED,
                    ],
                }}
            />
        )
    }
    const loadCompletedTemplate = (item) => {
        return (
            <DashboardTableButton
                props={{
                    label: DashButtonLabelConstants.COMPLETE_LOAD,
                    currentState: item.currentState,
                    action: () => props.actions.sendFlight(item),
                    visibleStates: [StateConstants.LOADING],
                    away: false,
                }}
            />
        )
    }
    const transitBodyTemplate = (item) => {
        return (
            <DashboardTableCard
                props={{
                    currentState: item.currentState,
                    arrivalName: item.arrivalId.name,
                    departureName: item.departureId.name,
                    startTime: item.loadingEndTime,
                    endTime: item.unloadingStartTime,
                    flightType: item.flightType,
                    activeStates: [StateConstants.ONTRAFFIC],
                    visibleStates: [
                        StateConstants.ONTRAFFIC,
                        StateConstants.UNLOADING,
                        StateConstants.UNLOADED,
                        StateConstants.FINISHED,
                    ],
                }}
            />
        )
    }
    const transitCompletedTemplate = (item) => {
        return (
            <DashboardTableButton
                props={{
                    label: DashButtonLabelConstants.ACCEPT_DEPARTURE,
                    currentState: item.currentState,
                    action: () => props.actions.acceptFlight(item),
                    visibleStates: [StateConstants.ONTRAFFIC],
                    away: false,
                }}
            />
        )
    }
    const departureBodyTemplate = (item) => {
        return (
            <DashboardTableCard
                props={{
                    currentState: item.currentState,
                    arrivalName: item.arrivalId.name,
                    departureName: item.departureId.name,
                    startTime: item.unloadingStartTime,
                    endTime: item.unloadingEndTime,
                    flightType: item.flightType,
                    activeStates: [StateConstants.UNLOADING],
                    visibleStates: [
                        StateConstants.UNLOADING,
                        StateConstants.UNLOADED,
                        StateConstants.FINISHED,
                    ],
                }}
            />
        )
    }
    const unloadCompletedTemplate = (item) => {
        return (
            <DashboardTableButton
                props={{
                    label: DashButtonLabelConstants.COMPLETE_UNLOAD,
                    currentState: item.currentState,
                    action: () => props.actions.unloadFlight(item),
                    visibleStates: [StateConstants.UNLOADING],
                    away: false,
                }}
            />
        )
    }
    const closeFlightTemplate = (item) => {
        return (
            <DashboardTableButton
                props={{
                    label: DashButtonLabelConstants.SEND_AWAY,
                    currentState: item.currentState,
                    action: () => props.actions.closeFlight(item),
                    visibleStates: [StateConstants.UNLOADED],
                    away: true,
                }}
            />
        )
    }
    const awayBodyTemplate = (item) => {
        return (
            <DashboardTableCard
                props={{
                    currentState: item.currentState,
                    arrivalName: item.arrivalId.name,
                    departureName: item.departureId.name,
                    startTime: item.unloadingStartTime,
                    endTime: item.unloadingEndTime,
                    flightType: item.flightType,
                    activeStates: [],
                    visibleStates: [StateConstants.FINISHED],
                }}
            />
        )
    }
    return (
        <DataTable
            value={props.items}
            size="small"
            className="card ui-datatable"
        >
            <Column
                body={driverBodyTemplate}
                style={{ width: '15vw' }}
            ></Column>
            <Column
                body={indicatorBodyTemplate}
                style={{ width: '5vw' }}
            ></Column>
            <Column
                body={arrivalBodyTemplate}
                style={{ width: '15vw' }}
            ></Column>
            <Column
                body={loadCompletedTemplate}
                style={{ width: '5vw' }}
            ></Column>
            <Column
                body={transitBodyTemplate}
                style={{ width: '15vw' }}
            ></Column>
            <Column
                body={transitCompletedTemplate}
                style={{ width: '5vw' }}
            ></Column>
            <Column
                body={departureBodyTemplate}
                style={{ width: '15vw' }}
            ></Column>
            <Column
                body={unloadCompletedTemplate}
                style={{ width: '5vw' }}
            ></Column>
            <Column
                body={awayBodyTemplate}
                style={{ minWidth: '15vw' }}
            ></Column>
            <Column
                body={closeFlightTemplate}
                style={{ width: '5vw' }}
            ></Column>
        </DataTable>
    )
}
