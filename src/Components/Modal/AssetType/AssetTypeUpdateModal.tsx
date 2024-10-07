
import { FC, FormEvent, useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";
import UpdateAssetTypeRequest from "../../../Utils/Models/Request/AssetType/UpdateAssetTypeRequest";
import { UpdateAssetTypeLogic } from "../../../Business/AssetTypeLogic";

export const AssetTypeUpdateModal: FC<{ modalData: any }> = ({ modalData }) => {
    const [type, setType] = useState<string>(modalData.type)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        UpdateAssetTypeLogic({ id: modalData.id, typeName: type } as UpdateAssetTypeRequest)
    }

    return (
        <div className="h-[25vh] w-[25vw]">
            <div className="flex justify-center items-center">
                <Form onSubmit={handleSubmit}>
                    <FormLabel htmlFor="type">Tür Adı</FormLabel>
                    <Form.Control type="text" id="type" defaultValue={type} onChange={event => setType(event.currentTarget.value)}></Form.Control>
                    <Button type="submit" className="mt-3 w-100">Kaydet</Button>
                </Form>
            </div>
        </div>
    );
}
