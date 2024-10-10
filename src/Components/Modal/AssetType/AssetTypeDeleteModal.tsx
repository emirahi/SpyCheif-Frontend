import { FC } from "react";
import { destoryModal } from "../../../Utils/hooks/modal";
import { Button } from "react-bootstrap";
import { DeleteAssetTypeLogic } from "../../../Business/AssetTypeLogic";

export const AssetTypeDeleteModal: FC<{ modalData: any }> = ({ modalData }) => {
    
    const handleDelete = async () => {
        DeleteAssetTypeLogic(modalData.id)
    }

    return (
        <div>
            <h1>{modalData.title} - {modalData.id} veriyi silmek istiyor musunuz ? </h1>
            <div className="flex justify-end gap-3 mt-3">
                <Button variant="outline-danger" onClick={handleDelete}>Delete</Button>
                <Button onClick={destoryModal}>Close</Button>
            </div>
        </div>
    );
}
