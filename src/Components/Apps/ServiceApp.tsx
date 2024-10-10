
import { FC, useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { createModal } from "../../Utils/hooks/modal";
import IModalData from "../../StateManager/utils/IModalData";
import { useAppSelector } from "../../StateManager/hooks";
import { GetAllServiceDatabaseLogic } from "../../Business/ServiceDatabaseLogic";
import { GetAllTransferLogic, TransferSelectedLogic } from "../../Business/TransferLogic";
export const ServiceApp: FC = () => {
    const [hideBar, setHideBar] = useState<boolean>(false)
    const [appname, setAppName] = useState<string>("")
    const serviceDatabases = useAppSelector(selector => selector.ServiceDatabaseSlice.ServiceDatabase)
    const transfer = useAppSelector(selector => selector.ServiceDatabaseSlice.Transfer)
    const transferSelected = useAppSelector(selector => selector.ServiceDatabaseSlice.TransferSelected)

    useEffect(() => { GetAllServiceDatabaseLogic() }, [])

    return (
        <div>
            <Container fluid>
                <div className="flex gap-4 mt-3">

                    {/* sidebar */}
                    <div className={`${hideBar ? "w-[50px] h-10" : "w-[380px] overflow-auto"} max-w-[380px] max-h-[350px] px-2 border-2 border-green-600 rounded-md `}>
                        <div className="flex justify-end p-1">
                            <button onClick={() => setHideBar(!hideBar)}>
                                <span className="material-symbols-outlined cursor-pointer">
                                    {hideBar ? "menu" : "close"}
                                </span>
                            </button>
                        </div>
                        <Button hidden={hideBar} variant="outline-primary" className="w-100" onClick={() => {
                            createModal({ name: "addServiceDatabase", title: "Uygulama Ekle" } as IModalData)
                        }}>Servis Ekle</Button>
                        <div hidden={hideBar} className="
                        flex flex-col py-3 
                        *:border-b-2 *:border-b-orange-600 *:rounded-lg *:my-2 *:py-2 *:px-2
                        *:cursor-pointer *:bg-blue-500 *:text-start *:text-white
                        ">
                            {serviceDatabases.length > 0 &&
                                serviceDatabases.map((serviceDatabase, index) => (
                                    <button key={index} className="flex justify-between items-center" onClick={() => {
                                        setAppName(serviceDatabase.appName)
                                        GetAllTransferLogic(serviceDatabase.appName)
                                    }}>
                                        {serviceDatabase.appName}
                                        <span className="flex items-center gap-2">
                                            <span className="material-symbols-outlined cursor-pointer hover:text-red-400" onClick={() => {
                                                createModal({
                                                    name: "updateServiceDatabase", title: "Uygulama Sil",
                                                    data: {
                                                        id: serviceDatabase.id,
                                                        appName: serviceDatabase.appName,
                                                        databaseName: serviceDatabase.databaseName,
                                                        collectionName: serviceDatabase.collentionName
                                                    }
                                                } as IModalData)
                                            }}> edit </span>
                                            <span className="material-symbols-outlined cursor-pointer hover:text-red-400" onClick={() => {
                                                createModal({ name: "deleteServiceDatabase", title: "Uygulama Sil", data: { id: serviceDatabase.id, title: serviceDatabase.appName } } as IModalData)
                                            }}> delete </span>
                                        </span>
                                    </button>
                                ))
                            }
                        </div>

                    </div>

                    <div className={`${hideBar ? "w-[calc(100%-80px)]" : "w-[calc(100%-350px)]"} mb-3 min-h-[calc(100vh-100px)] px-3 border-2 border-blue-700 rounded-lg`}>

                        <div className="my-4 flex justify-end gap-3">
                            <Button variant="outline-primary" disabled={appname.length == 0 || transferSelected.length === 0} onClick={() =>
                                createModal({ name: "createTransfer", title: `${appname} uygulaması için transfer başlatılıyor` } as IModalData)
                            }>Seçilen Varlıkları Ekle</Button>
                        </div>
                        <h1>{transferSelected.length}</h1>
                        {transfer.length > 0 &&
                            <Table striped bordered hover responsive variant="dark">
                                <thead>
                                    <tr>
                                        <th className="w-3">#</th>
                                        {
                                            Object.keys(transfer[0]).map(transfer => (
                                                <th>{transfer}</th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        transfer.map(transfer => (
                                            <tr>
                                                <td><Form.Check
                                                    onClick={e => e.currentTarget.checked
                                                        ? TransferSelectedLogic(transfer,true)
                                                        : TransferSelectedLogic(transfer,false)
                                                }></Form.Check></td>
                                                {
                                                    Object.values(transfer).map(item => (
                                                        <td>{item}</td>
                                                    ))
                                                }</tr>
                                        ))
                                    }


                                </tbody>
                            </Table>
                        }
                    </div>

                </div>
            </Container >

        </div >
    );
}
