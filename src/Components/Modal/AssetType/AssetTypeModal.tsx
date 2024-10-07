
import { FC, useEffect, useState } from "react";
import { Form, FormLabel, Table } from "react-bootstrap";
import { useAppSelector } from "../../../StateManager/hooks";
import { createModal } from "../../../Utils/hooks/modal";
import { GetAllAssetTypeLogic } from "../../../Business/AssetTypeLogic";
import IModalData from "../../../StateManager/utils/IModalData";

export const AssetTypeModal: FC = () => {
    const [hideId, setHideId] = useState<boolean>(false)
    const [hideCreate, setHideCreate] = useState<boolean>(false)
    const [hideUpdate, setHideUpdate] = useState<boolean>(false)
    const [hideProcess, setHideProcess] = useState<boolean>(false)
    const assetTypes = useAppSelector(selector => selector.AssetTypeSlice.AssetTypes)

    useEffect(() => { GetAllAssetTypeLogic() }, [])

    return (
        <div className="h-[85vh] w-[75vw]">

            <div className="flex justify-between items-baseline">
                <div className="mb-2 flex gap-4">
                    <div className="flex gap-2 items-baseline">
                        <Form.Check id="hideId2" defaultChecked={hideId} onChange={() => setHideId(!hideId)} className="" />
                        <FormLabel htmlFor="hideId2" className="text-lg">Hide Id </FormLabel>
                    </div>
                    <div className="flex gap-2 items-baseline">
                        <Form.Check id="hideCreate2" defaultChecked={hideCreate} onChange={() => setHideCreate(!hideCreate)} />
                        <FormLabel htmlFor="hideCreate2" className="text-lg">Hide Created Date </FormLabel>
                    </div>
                    <div className="flex gap-2 items-baseline">
                        <Form.Check id="hideUpdate2" defaultChecked={hideUpdate} onChange={() => setHideUpdate(!hideUpdate)} />
                        <FormLabel htmlFor="hideUpdate2" className="text-lg">Hide Updated Date </FormLabel>
                    </div>
                    <div className="flex gap-2 items-baseline">
                        <Form.Check id="hideProcess2" defaultChecked={hideProcess} onChange={() => setHideProcess(!hideProcess)} />
                        <FormLabel htmlFor="hideProcess2" className="text-lg">Hide Process</FormLabel>
                    </div>
                </div>
            </div>
            {
                assetTypes.length > 0 &&
                <Table striped bordered hover responsive variant="dark">
                    <thead>
                        <tr>
                            <th hidden={hideId} className="w-96">#</th>
                            <th>Asset Type</th>
                            <th hidden={hideCreate}>Created Date</th>
                            <th hidden={hideUpdate}>Updated Date</th>
                            <th hidden={hideProcess} className="w-3"></th>
                            <th hidden={hideProcess} className="w-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            assetTypes.map((assetType, index) => (
                                <tr key={index}>
                                    <td hidden={hideId}>{assetType.id}</td>
                                    <td>{assetType.type}</td>
                                    <td hidden={hideCreate}>{assetType.createdDate}</td>
                                    <td hidden={hideUpdate}>{assetType.updatedDate}</td>
                                    <td hidden={hideProcess}>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-blue-500" onClick={
                                            () => createModal({
                                                name: "UpdateAssetType", title: "Varlık Türü Güncelle",
                                                data: { "type": assetType.type, id: assetType.id }
                                            } as IModalData)}> edit </span>
                                    </td>
                                    <td hidden={hideProcess}>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-red-700" onClick={
                                            () => createModal({
                                                name: "deleteAssetType", title: "Silme İşlemi",
                                                data: { "title": assetType.type, "id": assetType.id }
                                            } as IModalData)
                                        }> delete </span>
                                    </td>
                                </tr>
                            ))
                        }

                        {/* <tr>
                        <td hidden={hideId}>d89ec180-aa70-46d9-a55a-08a1bf794603</td>
                        <td>IPV4</td>
                        <td hidden={hideCreate}></td>
                        <td hidden={hideUpdate}></td>
                        <td>
                            <span className="material-symbols-outlined cursor-pointer hover:text-blue-500"> edit </span>
                        </td>
                        <td>
                            <span className="material-symbols-outlined cursor-pointer hover:text-red-700"> delete </span>
                        </td>
                    </tr>
                    <tr>
                        <td hidden={hideId}>59707a62-c5ef-4f89-a360-0d433949bb7e</td>
                        <td>Link-local IPv6 Address</td>
                        <td hidden={hideCreate}></td>
                        <td hidden={hideUpdate}></td>
                        <td>
                            <span className="material-symbols-outlined cursor-pointer hover:text-blue-500"> edit </span>
                        </td>
                        <td>
                            <span className="material-symbols-outlined cursor-pointer hover:text-red-700"> delete </span>
                        </td>
                    </tr>
                    <tr>
                        <td hidden={hideId}>efdb2291-fa3e-4845-9b74-a643bcbaf496</td>
                        <td>domain</td>
                        <td hidden={hideCreate}></td>
                        <td hidden={hideUpdate}></td>
                        <td>
                            <span className="material-symbols-outlined cursor-pointer hover:text-blue-500"> edit </span>
                        </td>
                        <td>
                            <span className="material-symbols-outlined cursor-pointer hover:text-red-700"> delete </span>
                        </td>
                    </tr>
                    <tr>
                        <td hidden={hideId}>7ff3c29b-176f-43bd-96b1-f3f9f27dee83</td>
                        <td>subdomain</td>
                        <td hidden={hideCreate}></td>
                        <td hidden={hideUpdate}></td>
                        <td>
                            <span className="material-symbols-outlined cursor-pointer hover:text-blue-500"> edit </span>
                        </td>
                        <td>
                            <span className="material-symbols-outlined cursor-pointer hover:text-red-700"> delete </span>
                        </td>
                    </tr>
                    <tr>
                        <td hidden={hideId}>158c1701-62bd-41f3-83c1-7ec74fcad25e</td>
                        <td>CIDR</td>
                        <td hidden={hideCreate}></td>
                        <td hidden={hideUpdate}></td>
                        <td>
                            <span className="material-symbols-outlined cursor-pointer hover:text-blue-500"> edit </span>
                        </td>
                        <td>
                            <span className="material-symbols-outlined cursor-pointer hover:text-red-700"> delete </span>
                        </td>
                    </tr> */}

                    </tbody>
                </Table>
            }
        </div>
    );
}
