
import { FC } from "react";
import { destoryModal, useModals } from "../hooks/modal";
import modalConfig from "./ModalConfig";

export const BaseModel: FC = () => {

    const modals = useModals()

    return (
        <div>
            {
                modals.map((modal, index) => {
                    const modalItem = modalConfig.find(m => m.name == modal.name)

                    if (modalItem !== undefined && modalItem !== null) {
                        return (
                            <>
                                <div className="min-w-[100vw] min-h-[100vh] absolute top-0 left-0 flex justify-center items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
                                    <div className="bg-white max-w-[85vw] w-max max-h-[90vh] opacity-100 p-3 rounded-md *:text-black">
                                        <div>
                                            <div className="flex justify-between">
                                                <h1 className="text-2xl">{modal.title}</h1>
                                                <button onClick={destoryModal}>
                                                    <span className="material-symbols-outlined"> close </span>
                                                </button>
                                            </div>
                                            <hr className="my-3" />
                                        </div>
                                        <div>
                                            <modalItem.element key={index} modalData={modal.data} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                })
            }
        </div>
    );
}
