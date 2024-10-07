import { useAppSelector } from "../../StateManager/hooks";
import store from "../../StateManager/store";
import IModalData from "../../StateManager/utils/IModalData";
import { Append, Destory, DestoryAll } from "../../StateManager/utils/ModalSlice";


export const useModals = () => {return useAppSelector((app) => app.ModalSlice.modals) }
export const createModal = (modal:IModalData) => {
  store.dispatch(Append(modal));
};

export const destoryModal = () => store.dispatch(Destory())
export const destoryAllModal = () => store.dispatch(DestoryAll())