import { FC, useEffect, useState } from "react";
import { Button, Form, FormLabel, Table } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../StateManager/hooks";
import { createModal } from "../../Utils/hooks/modal";
import IModalData from "../../StateManager/utils/IModalData";
import { GetAllAssetLogic } from "../../Business/AssetLogic";


export const AllAssetComponent: FC = () => {
    const [hideId, setHideId] = useState<boolean>(false)
    const [hideCreate, setHideCreate] = useState<boolean>(true)
    const [hideUpdate, setHideUpdate] = useState<boolean>(true)
    const [hideProcess, setHideProcess] = useState<boolean>(false)
    const assets = useAppSelector(selector => selector.AssetSlice.Assets)

    useEffect(() => { GetAllAssetLogic() }, [])

    return (
        <div>
            <div className="flex justify-between items-baseline">
                <div className="mb-2 flex gap-4">
                    <div>
                        <div className="flex gap-2 items-baseline">
                            <Form.Check id="hideId" defaultChecked={hideId} onChange={() => setHideId(!hideId)} />
                            <FormLabel htmlFor="hideId" className="text-lg">Hide Id </FormLabel>
                        </div>
                        <div className="flex gap-2 items-baseline">
                            <Form.Check id="hideCreate" defaultChecked={hideCreate} onChange={() => setHideCreate(!hideCreate)} />
                            <FormLabel htmlFor="hideCreate" className="text-lg">Hide Created Date </FormLabel>
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-2 items-baseline">
                            <Form.Check id="hideUpdate" defaultChecked={hideUpdate} onChange={() => setHideUpdate(!hideUpdate)} />
                            <FormLabel htmlFor="hideUpdate" className="text-lg">Hide Updated Date </FormLabel>
                        </div>
                        <div className="flex gap-2 items-baseline">
                            <Form.Check id="hideProcess" defaultChecked={hideProcess} onChange={() => setHideProcess(!hideProcess)} />
                            <FormLabel htmlFor="hideProcess" className="text-lg">Hide Process</FormLabel>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline-primary" onClick={() => createModal({ name: "addAssetType", title: "Varlık Türü Ekle" } as IModalData)}>
                        Asset Type Ekle
                    </Button>
                    <Button variant="outline-primary" onClick={() => createModal({ name: "listAssetType", title: "Varlık Türlerini Listle" } as IModalData)}>
                        Asset Type Listele
                    </Button>
                    <Button variant="outline-primary" onClick={() => createModal({ name: "addAsset", title: "Varlık Ekle" } as IModalData)}>
                        Asset Ekle
                    </Button>
                    <Button variant="outline-primary" onClick={GetAllAssetLogic}>
                        <span className={`material-symbols-outlined cursor-pointer`}> refresh </span>
                    </Button>
                </div>
            </div>
            {
                assets.length > 0 &&
                <Table striped bordered hover responsive variant="dark">
                    <thead>
                        <tr>
                            <th hidden={hideId} className="w-[325px]">#</th>
                            <th>Asset</th>
                            <th>Asset Type</th>
                            <th hidden={hideCreate} className="w-3">Created Date</th>
                            <th hidden={hideUpdate} className="w-3">Updated Date</th>
                            <th hidden={hideProcess} className="w-3"></th>
                            <th hidden={hideProcess} className="w-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            assets.map((asset, index) => (
                                <tr key={index}>
                                    <td hidden={hideId}>{asset.id}</td>
                                    <td>{asset.value}</td>
                                    <td>{asset.type}</td>
                                    <td hidden={hideCreate}>{asset.createdDate}</td>
                                    <td hidden={hideUpdate}>{asset.updatedDate}</td>
                                    <td hidden={hideProcess} onClick={
                                        () => createModal({ name: "updateAsset", title: "Güncelle", data: { "id": asset.id, "typeId": asset.assetTypeId, "value": asset.value } } as IModalData)
                                    }>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-blue-500"> edit </span>
                                    </td>
                                    <td hidden={hideProcess}>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-red-700" onClick={
                                            () => createModal({ name: "deleteAsset", title: "Silme İşlemi", data: { "title": asset.value, "id": asset.id } } as IModalData)
                                        }> delete </span>
                                    </td>
                                </tr>
                            ))
                        }

                        {/* 
                    <tr>
                        <td hidden={hideId}>d89ec180-aa70-46d9-a55a-08a1bf794603</td>
                        <td>192.168.1.65</td>
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
                        <td>fe80::d432:cd9a:9ae8:f052%10</td>
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
                        <td>google.com</td>
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
                        <td>cloud.google.com</td>
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
                        <td>192.168.1.0/24</td>
                        <td>CIDR</td>
                        <td hidden={hideCreate}></td>
                        <td hidden={hideUpdate}></td>
                        <td>
                            <span className="material-symbols-outlined cursor-pointer hover:text-blue-500"> edit </span>
                        </td>
                        <td>
                            <span className="material-symbols-outlined cursor-pointer hover:text-red-700"> delete </span>
                        </td>
                    </tr>
                     */}
                    </tbody>
                </Table>
            }
        </div >
    );
}
