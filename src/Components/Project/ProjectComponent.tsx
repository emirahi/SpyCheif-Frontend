
import { createModal } from "../../Utils/hooks/modal";
import { GetAllProjectLogic, SetActiveLogic } from "../../Business/ProjectLogic";
import { useAppSelector } from "../../StateManager/hooks";
import { FC, useEffect, useState } from "react";
import { Button, Form, FormLabel, Table } from "react-bootstrap";
import IModalData from "../../StateManager/utils/IModalData";

export const ProjectComponent: FC = () => {

    const [hideId, setHideId] = useState<boolean>(false)
    const [hideCreate, setHideCreate] = useState<boolean>(true)
    const [hideUpdate, setHideUpdate] = useState<boolean>(true)
    const [hideProcess, setHideProcess] = useState<boolean>(false)
    const projects = useAppSelector(selector => selector.ProjectSlice.projects)

    useEffect(() => { GetAllProjectLogic() }, [])

    return (
        <div>
            <div className="container mx-auto mt-5">
                <div className="flex justify-between items-baseline">
                    <div className="mb-2 flex gap-4">
                        <div className="flex gap-2 items-baseline">
                            <Form.Check id="hideId" defaultChecked={hideId} onChange={() => setHideId(!hideId)} />
                            <FormLabel htmlFor="hideId" className="text-lg">Hide Id </FormLabel>
                        </div>
                        <div className="flex gap-2 items-baseline">
                            <Form.Check id="hideCreate" defaultChecked={hideCreate} onChange={() => setHideCreate(!hideCreate)} />
                            <FormLabel htmlFor="hideCreate" className="text-lg">Hide Created Date </FormLabel>
                        </div>
                        <div className="flex gap-2 items-baseline">
                            <Form.Check id="hideUpdate" defaultChecked={hideUpdate} onChange={() => setHideUpdate(!hideUpdate)} />
                            <FormLabel htmlFor="hideUpdate" className="text-lg">Hide Updated Date </FormLabel>
                        </div>
                        <div className="flex gap-2 items-baseline">
                            <Form.Check id="hideProcess" defaultChecked={hideProcess} onChange={() => setHideProcess(!hideProcess)} />
                            <FormLabel htmlFor="hideProcess" className="text-lg">Hide Process</FormLabel>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline-primary" className="w-60" onClick={() => createModal({
                            name: "addProject", title: "Proje Oluştur"
                        } as IModalData)}>Create Project</Button>
                    </div>
                </div>
                <div>
                    {
                        projects.length == 0 ? <h1 className="text-center text-3xl"> Henüz Projeniz Yok </h1> :
                            <Table striped bordered hover responsive variant="dark">
                                <thead>
                                    <tr>
                                        <th hidden={hideId} className="w-[325px]">#</th>
                                        <th>Project Name</th>
                                        <th>Project Description</th>
                                        <th hidden={hideCreate} className="w-3">Created Date</th>
                                        <th hidden={hideUpdate} className="w-3">Updated Date</th>
                                        <th hidden={hideProcess} className="w-[100px]"></th>
                                        <th hidden={hideProcess} className="w-[100px]"></th>
                                        <th className="w-[100px]"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        projects.map((project, index) => (
                                            <tr key={index}>
                                                <td hidden={hideId}>{project.id}</td>
                                                <td>{project.projectName}</td>
                                                <td className="">{project.description}</td>
                                                <td hidden={hideCreate}>{project.createdDate}</td>
                                                <td hidden={hideUpdate}>{project.updatedDate}</td>
                                                <td hidden={hideProcess} className="text-center">
                                                    <span className="material-symbols-outlined cursor-pointer hover:text-blue-500"
                                                        onClick={() => createModal({
                                                            name: "updateProject", title: "Projeyi Sil",
                                                            data: { "id": project.id, "projectName": project.projectName, "description": project.description }
                                                        } as IModalData)}> edit </span>
                                                </td>
                                                <td hidden={hideProcess} className="text-center">
                                                    <span className="material-symbols-outlined cursor-pointer hover:text-red-700"
                                                        onClick={() => createModal({
                                                            name: "deleteProject", title: "Projeyi Sil",
                                                            data: { "title": project.projectName, "id": project.id }
                                                        } as IModalData)}> delete </span>
                                                </td>
                                                <td className="text-center">
                                                    <span className="material-symbols-outlined cursor-pointer w-100 hover:text-blue-500"
                                                        onClick={() => SetActiveLogic(project.id)}> chevron_right </span>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                    }
                </div>
            </div>
        </div>
    );
}
