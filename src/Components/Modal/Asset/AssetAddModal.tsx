import { FC, FormEvent, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../StateManager/hooks"
import AddAssetRequest from "../../../Utils/Models/Request/Asset/AddAssetRequest"
import { destoryModal } from "../../../Utils/hooks/modal"
import { Button, Col, Form, FormLabel, Row } from "react-bootstrap"
import { AddAssetLogic } from "../../../Business/AssetLogic"
import { GetAllAssetTypeLogic } from "../../../Business/AssetTypeLogic"

export const AssetAddModal: FC<{ modalData: any }> = (modalData) => {
    const [type, setType] = useState<string>("1")
    const [value, setValue] = useState<string>("")
    const assetTypes = useAppSelector(selector => selector.AssetTypeSlice.AssetTypes)
    const projectId = useAppSelector(selector => selector.ProjectSlice.active?.id)

    useEffect(() => { GetAllAssetTypeLogic() }, [])

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (projectId){
            AddAssetLogic({ ProjectId:projectId ,assetTypeId: type, value: value } as AddAssetRequest)
            destoryModal()
        }
    }

    return (
        <div className="h-[25vh] w-[25vw]">
            <div className="flex justify-center items-center">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <FormLabel htmlFor="type">Tür Adı</FormLabel>
                            <Form.Select onChange={e => setType(e.target.value)}>
                                <option></option>
                                {assetTypes.map((assetType, index) => (
                                    <option key={index} value={assetType.id}>{assetType.type}</option>
                                ))}
                            </Form.Select>
                        </Col>
                        <Col>
                            <FormLabel htmlFor="value">Varlık Adı</FormLabel>
                            <Form.Control type="text" id="value" defaultValue={value} onChange={event => setValue(event.currentTarget.value)}></Form.Control>
                        </Col>
                        <Button type="submit" className="mt-3 w-100">Kaydet</Button>
                    </Row>
                </Form>
            </div>
        </div>
    );
}
