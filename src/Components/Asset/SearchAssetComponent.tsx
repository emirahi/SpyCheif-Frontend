import { FC, useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useAppSelector } from "../../StateManager/hooks";
import { createModal } from "../../Utils/hooks/modal";
import IModalData from "../../StateManager/utils/IModalData";
import { SearchAssetLogic } from "../../Business/AssetLogic";
import SearchAssetRequest from "../../Utils/Models/Request/Asset/SearchAssetRequest";
import { GetAllAssetTypeLogic } from "../../Business/AssetTypeLogic";


export const SearchAssetComponent: FC = () => {
    const [typeId,setTypeId] = useState<string>("")
    const [match,setMatch] = useState<string>("")
    const searchAsset = useAppSelector(selector => selector.AssetSlice.Search)
    const assetTypes = useAppSelector(selector => selector.AssetTypeSlice.AssetTypes)
    const projectId = useAppSelector(selector => selector.ProjectSlice.active?.id)
    

    const handleSearch = () => {
        if (projectId)
            SearchAssetLogic({ProjectId:projectId,uniq:false,AssetTypeId:typeId,match:match} as SearchAssetRequest)
    }

    useEffect(() => { GetAllAssetTypeLogic() },[])

    return (
        <div>
            <h1 className="text-xl mb-3">Veri Adeti : {searchAsset.length}</h1>
            <div className="mb-3">
                <div className="flex  gap-3">
                    <Form.Control placeholder="Search" onChange={e => setMatch(e.target.value)}/>
                    <Form.Select onChange={e => setTypeId(e.target.value)}>
                        <option selected value="">Varlık Türü Seç</option>
                        {
                            assetTypes.map(assetType => (
                                <option value={assetType.id}>{assetType.type}</option>
                            ))
                        }
                    </Form.Select>
                    <Button variant="outline-primary" onClick={handleSearch}>Search</Button>
                </div>
            </div>
            {
                searchAsset.length > 0 &&
                <Table striped bordered hover responsive variant="dark">
                    <thead>
                        <tr>
                            <th>Asset</th>
                            <th>Asset Type</th>
                            <th className="w-3"></th>
                            <th className="w-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            searchAsset.map(asset => (
                                <tr>
                                    <td>{asset.value}</td>
                                    <td>{asset.type}</td>
                                    <td onClick={
                                        () => createModal({ name: "updateAsset", title: "Güncelle", data: { "id": asset.id, "typeId": asset.assetTypeId, "value": asset.value } } as IModalData)
                                    }>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-blue-500"> edit </span>
                                    </td>
                                    <td>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-red-700" onClick={
                                            () => createModal({ name: "deleteAsset", title: "Silme İşlemi", data: { "title": asset.value, "id": asset.id } } as IModalData)
                                        }> delete </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            }
        </div >
    );
}
