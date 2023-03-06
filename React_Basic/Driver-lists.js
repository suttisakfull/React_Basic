import React, { useState } from 'react'
import Driver from './Driver';

const DriverLists = () => {
    const [driversState, setDriversState] = useState (
        {
            drivers : [
                {rank:1, driver:'Alexander Albon', editingStatus: false},
                {rank:2, driver:'Max Verstappen', editingStatus: false},
                {rank:3, driver:'George Russell', editingStatus: false},
                {rank:4, driver:'Pierre Gasly', editingStatus: false},
                {rank:5, driver:'Lando Norris', editingStatus: false},
            ]
        }
    )

    const deleteItemHandler = (deleteKey) => {
        const data = [...driversState.drivers]
        const deleteIndex = data.findIndex((item) => {
            return item.rank === deleteKey
        })
        data.splice(deleteIndex, 1);
        setDriversState({
            drivers: data
        })
    }

    const editItemHandler = (editKey, data) => {
        const drivers = [...driversState.drivers]
        const editingIndex = drivers.findIndex((item) => {
            return item.rank === editKey;
        })
        drivers[editingIndex] = data;
        setDriversState({
            drivers: drivers
        })
    }

    return (
        <div className="row">
            {driversState.drivers.map((item) => {
                return (
                    <div key={item.rank} className="col-lg-3 col-sm-4 mt-2">
                        <Driver
                            data = {item}
                            deleteDriver = {deleteItemHandler.bind(this, item.rank)}
                            editDriver = {editItemHandler.bind(this)}
                        />
                    </div>
                )
            })}
        </div>
    )
}
export default DriverLists
