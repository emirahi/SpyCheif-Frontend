import { FC, MouseEventHandler } from "react";
import { Button } from "react-bootstrap";
import { destoryModal } from "../../../Utils/hooks/modal";
import { DeleteAssetLogic } from "../../../Business/AssetLogic";

export const AssetDeleteModal: FC<{ modalData: any }> = ({ modalData }) => {
    
    const handleDelete = () => { DeleteAssetLogic(modalData.id) }

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
