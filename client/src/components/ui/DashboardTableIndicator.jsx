import { DashIndicatorStateConstants } from '../../const/const'

export default function DashboardTableIndicator({ props }) {
    const isActive = () => props.activeStates.includes(props.currentState)
    const isIdle = () => props.idleStates.includes(props.currentState)
    const isInactive = () => props.inactiveStates.includes(props.currentState)
    return (
        <div
            className="flex flex-column align-items-center m-1"
            style={{
                color:
                    (isActive() && 'lightgreen') ||
                    (isIdle() && 'orange') ||
                    (isInactive() && 'lightgray'),
                // backgroundColor: "beige",
            }}
        >
            <div>
                <span
                    className="pi pi-flag-fill"
                    style={{ fontSize: '1.4rem' }}
                />
            </div>
            <div style={{ fontSize: '0.8rem' }}>
                <span>
                    {(isActive()
                        ? DashIndicatorStateConstants.WORK
                        : undefined) ||
                        (isIdle()
                            ? DashIndicatorStateConstants.IDLE
                            : undefined) ||
                        (isInactive()
                            ? DashIndicatorStateConstants.AWAY
                            : undefined)}
                </span>
            </div>
        </div>
    )
}
