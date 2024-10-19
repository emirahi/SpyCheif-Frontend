import { FC } from "react";
import { Button } from "react-bootstrap";
import { destoryModal } from "../../../Utils/hooks/modal";
import { DeleteProjectLogic } from "../../../Business/ProjectLogic";

export const ProjectDeleteModal: FC<{ modalData: any }> = ({ modalData }) => {
    
    const handleDelete = () => { DeleteProjectLogic(modalData.id); console.log(modalData); }

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
