import { AssetAddModal } from "../../Components/Modal/Asset/AssetAddModal"
import { AssetDeleteModal } from "../../Components/Modal/Asset/AssetDeleteModal"
import { AssetUpdateModal } from "../../Components/Modal/Asset/AssetUpdateModal"
import { AssetTypeAddModal } from "../../Components/Modal/AssetType/AssetTypeAddModal"
import { AssetTypeDeleteModal } from "../../Components/Modal/AssetType/AssetTypeDeleteModal"
import { AssetTypeModal } from "../../Components/Modal/AssetType/AssetTypeModal"
import { AssetTypeUpdateModal } from "../../Components/Modal/AssetType/AssetTypeUpdateModal"
import { ServiceDatabaseAddModal } from "../../Components/Modal/ServiceDatabase/ServiceDatabaseAddModal"
import { ServiceDatabaseDeleteModal } from "../../Components/Modal/ServiceDatabase/ServiceDatabaseDeleteModal"
import { ServiceDatabaseUpdateModal } from "../../Components/Modal/ServiceDatabase/ServiceDatabaseUpdateModal"
import { TransferCreateModal } from "../../Components/Modal/Transfer/TransferCreateModal"

const modalConfig = [
    {
        name:"addAsset",
        element:AssetAddModal
    },
    {
        name:"updateAsset",
        element:AssetUpdateModal
    },
    {
        name:"deleteAsset",
        element:AssetDeleteModal
    },
    {
        name:"listAssetType",
        element:AssetTypeModal
    },
    {
        name:"deleteAssetType",
        element:AssetTypeDeleteModal
    },
    {
        name:"addAssetType",
        element:AssetTypeAddModal
    },
    {
        name:"UpdateAssetType",
        element:AssetTypeUpdateModal
    },
    {
        name:"addServiceDatabase",
        element:ServiceDatabaseAddModal
    },
    {
        name:"deleteServiceDatabase",
        element:ServiceDatabaseDeleteModal
    },
    {
        name:"updateServiceDatabase",
        element:ServiceDatabaseUpdateModal
    },
    {
        name:"createTransfer",
        element:TransferCreateModal
    }
    
]

export default modalConfig