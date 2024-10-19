import { FC, FormEvent, useState } from "react"

import { Button, Col, Form, FormLabel, Row } from "react-bootstrap"
import UpdateProjectRequest from "../../../Utils/Models/Request/Project/UpdateProjectRequest"
import { UpdateProjectLogic } from "../../../Business/ProjectLogic"

export const ProjectUpdateModal: FC<{ modalData: any }> = ({ modalData }) => {
    const [data, setData] = useState<UpdateProjectRequest>({
        id:modalData.id,
        projectName:modalData.projectName,
        description:modalData.description
    })

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        UpdateProjectLogic(data)
    }

    return (
        <div className="h-[30vh] w-[50vw]">
            <div className="flex justify-center items-center">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <FormLabel htmlFor="projectName">Proje Adı</FormLabel>
                            <Form.Control type="text" id="projectName" defaultValue={data.projectName} onChange={event =>
                                setData({ ...data, projectName: event.currentTarget.value })}></Form.Control>
                        </Col>
                        <Col>
                            <FormLabel htmlFor="description">Proje Açıklaması</FormLabel>
                            <Form.Control type="text" id="description" defaultValue={data.description} onChange={event =>
                                setData({ ...data, description: event.currentTarget.value })}></Form.Control>
                        </Col>
                    </Row>
                    <Button type="submit" variant="outline-primary" className="mt-3 w-100">Kaydet</Button>
                </Form>
            </div>
        </div>
    );
}
