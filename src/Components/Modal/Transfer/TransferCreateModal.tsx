import { FC, useEffect, useState } from "react";
import { GetAllAssetTypeLogic } from "../../../Business/AssetTypeLogic";
import { useAppSelector } from "../../../StateManager/hooks";
import { Button, Form, FormLabel, Table } from "react-bootstrap";
import { AddAssetLogic } from "../../../Business/AssetLogic";

export const TransferCreateModal: FC = () => {
    const [assetTypeId, setAssetTypeId] = useState<string>("")
    const [key, setKey] = useState<string>("")
    const [count, setCount] = useState<number>(0)
    const assetTypes = useAppSelector(selector => selector.AssetTypeSlice.AssetTypes)
    const transferSelected = useAppSelector(selector => selector.ServiceDatabaseSlice.TransferSelected)

    useEffect(() => { GetAllAssetTypeLogic() })

    const handleAddAsset = () => {
        transferSelected.map((x,index) => {
            console.log(assetTypeId,x[key],index)
            AddAssetLogic({assetTypeId,value:x[key]})
            setCount(index+1)
        })
    }

    return (
        <div>
            <div className="min-h-[30vh] min-w-[50vw]">
                <Form.Select className="mb-3" onChange={e => setAssetTypeId(e.target.value)}>
                    <option value=""></option>
                    {
                        assetTypes.map(assetType => (
                            <option value={assetType.id}>{assetType.type}</option>
                        ))
                    }
                </Form.Select>
                <div className="flex justify-between">
                    <div className="flex gap-4">
                        {
                            Object.keys(transferSelected[0]).map(transfer => (
                                <div className="flex gap-2">
                                    <Form.Check id={transfer.toString()} type="radio" name="transfer" data-bs-theme="dark" onClick={() => setKey(transfer)}></Form.Check>
                                    <FormLabel htmlFor={transfer.toString()}>{transfer}</FormLabel>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <h1 className="text-lg">Varlıklara Eklenenler : <span className="ml-3">{count} / {transferSelected.length}</span></h1>
                    </div>
                </div>
                <Table striped bordered hover responsive variant="dark">
                    <thead>
                        <tr>
                            {
                                Object.keys(transferSelected[0]).map(transfer => (
                                    <th>{transfer}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>

                        {
                            transferSelected.map(transfer => (
                                <tr>
                                    {
                                        Object.values(transfer as Object).map(item => (
                                            <td>{item}</td>
                                        ))
                                    }</tr>
                            ))
                        }


                    </tbody>
                </Table>
                <Button variant="outline-primary" className="w-100" onClick={handleAddAsset}>Aktar</Button>
            </div>
        </div>
    );
}
