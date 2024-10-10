import { FC, FormEvent, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../StateManager/hooks"
import UpdateAssetRequest from "../../../Utils/Models/Request/Asset/UpdateAssetRequest"
import { Button, Col, Form, FormLabel, Row } from "react-bootstrap"
import { GetAllAssetTypeLogic } from "../../../Business/AssetTypeLogic"
import { UpdateAssetLogic } from "../../../Business/AssetLogic"


export const AssetUpdateModal: FC<{ modalData: any }> = ({ modalData }) => {
    const [value, setValue] = useState<string>(modalData.value)
    const [type, setType] = useState<string>(modalData.typeId)
    const assetTypes = useAppSelector(selector => selector.AssetTypeSlice.AssetTypes)
    const assetType = useAppSelector(selector => selector.AssetTypeSlice.AssetTypes.find(x => x.id === type))

    useEffect(() => { GetAllAssetTypeLogic() }, [])

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (assetType !== undefined)
            UpdateAssetLogic(assetType?.type,{ assetTypeId: assetType?.id, id: modalData.id, value } as UpdateAssetRequest)
        GetAllAssetTypeLogic()
    }

    return (
        <div className="h-[25vh] w-[25vw]">
            <div className="flex justify-center items-center">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <FormLabel htmlFor="value">Tür Adı</FormLabel>
                            <Form.Control type="text" id="value" defaultValue={value} onChange={event => setValue(event.currentTarget.value)}></Form.Control>
                        </Col>
                        <Col>
                            <FormLabel htmlFor="type">Tür Adı</FormLabel>
                            <Form.Select defaultValue={type} onChange={e => setType(e.target.value)}>
                                <option></option>
                                {assetTypes.map((assetType, index) => (
                                    <option key={index} value={assetType.id}>{assetType.type}</option>
                                ))}
                            </Form.Select>
                        </Col>
                        <Button type="submit" className="mt-3 w-100">Kaydet</Button>
                    </Row>
                </Form>
            </div>
        </div>
    );
}
