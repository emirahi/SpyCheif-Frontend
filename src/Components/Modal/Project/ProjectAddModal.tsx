import { FC, FormEvent, useState } from "react"
import { Button, Form, FormLabel } from "react-bootstrap"
import AddProjectRequest from "../../../Utils/Models/Request/Project/AddProjectRequest"
import { AddProjectLogic } from "../../../Business/ProjectLogic"


export const ProjectAddModal: FC<{ modalData: any }> = (modalData) => {
    const [data, setData] = useState<AddProjectRequest>({ projectName: "", description: "" })

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        AddProjectLogic(data)
    }

    return (
        <div className="min-h-[30vh] w-[50vw]">
            <div className="container mx-auto">
                <Form onSubmit={handleSubmit}>
                    <div>
                        <FormLabel htmlFor="projectName">Proje Adı</FormLabel>
                        <Form.Control type="text" id="projectName" defaultValue={data.projectName} onChange={event => setData({ ...data, projectName: event.currentTarget.value })}></Form.Control>
                    </div>
                    <div className="my-6">
                        <FormLabel htmlFor="description">Proje Açıklaması</FormLabel>
                        <Form.Control as={"textarea"} id="description" defaultValue={data.description} onChange={event => setData({ ...data, description: event.currentTarget.value })}></Form.Control>
                    </div>
                    <Button type="submit" variant="outline-primary" className="mt-3 w-100">Kaydet</Button>
                </Form>
            </div>
        </div>
    );
}
