import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

export default function ModelTable({ props }) {
    const testTemplate = (item) => {
        return <div>{item.name}</div>
    }

    return (
        <DataTable
            value={props.items}
            size="small"
            className="card"
        >
            {props.columns.map((col, i) => (
                <Column
                    key={col.field}
                    field={col.field}
                    header={col.header}
                />
            ))}
            <Column
                header={props.actionHeader}
                body={testTemplate}
            />
        </DataTable>
    )
}
