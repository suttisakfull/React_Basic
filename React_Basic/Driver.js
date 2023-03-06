import React from 'react';

const Driver = (props) => {
    const { data, deleteDriver, editDriver} = props;

    // Ref จะใช้เพื่ออ้างอิงค่า input ใน element พวก input box
    // กรณีที่เราสร้าง obj เพื่อเก็บค่าข้อมูลที่ user กรอกมาใน inputbox
    // การใช้ ref ถ้าค่าใน input box เปลี่ยนหรือแก้ ค่าใน obj จะเปลี่ยนหรือแก้ไขตามด้วย
    const updatedNameInput = React.createRef();
    
    const onDeleteDriver = () => {
        deleteDriver();
    }

    const onEditDriver = () => {
        const editData = {
            rank: data.rank,
            driver: data.driver,
            editingStatus: !data.editingStatus
        }
        editDriver(data.rank, editData)
    }

    const onConfirmEdit = () => {
        const editData = {
            rank: data.rank,
            driver: updatedNameInput.current.value,
            editingStatus: false
        }
        editDriver(data.rank, editData)
    }

    const onCancelEdit = () => {
        const editData = {
            rank: data.rank,
            driver: data.driver,
            editingStatus: false
        }
        editDriver(data.rank, editData)
    }

    const editForm = (
        <div className="row">
            <div className="input-group mb-3">
                <input
                    type="text"
                    name="updateName"
                    className="from-control col-6"
                    defaultValue={data.driver}
                    ref={updatedNameInput}
                />
                <button
                    onClick={onCancelEdit.bind()}
                    className="btn btn-outline-primary btn-sm ml-1 col-3"
                >Cancel</button>
                <button
                    onClick={onConfirmEdit.bind()}
                    className="btn btn-primary btn-sm ml-1 col-3">
                OK</button>
            </div>
        </div>
    )

    return (
        <div className="card">
                <div className="card-header text-center">
                    <button
                        onClick={onEditDriver}
                        className="btn btn-outline-success btn-sm mr-1"
                    >Edit</button>
                    <button
                        onClick={onDeleteDriver}
                        className="btn btn-outline-danger btn-sm ml-1">
                    Delete</button>
                </div>
                <div className="card-body">
                    <dl className="row">
                        <dt className="col-6">Rank : </dt>
                        <dd className="col-6">{props.data.rank}</dd>
                        <dt className="col-6">Driver : </dt>
                        <dd className="col-6">{props.data.driver}</dd>
                    </dl>
                    {
                        props.data.editingStatus ?
                        editForm : null
                    }
                </div>
        </div>
    )
}

export default Driver;
