import { FC, FormEvent, useState } from "react"
import AddServiceDatabaseRequest from "../../../Utils/Models/Request/ServiceDatabase/AddServiceDatabaseRequest"
import { AddServiceDatabaseLogic } from "../../../Business/ServiceDatabaseLogic"
import { Button, Col, Form, FormLabel, Row } from "react-bootstrap"


export const ServiceDatabaseAddModal: FC<{ modalData: any }> = (modalData) => {
    const [data, setData] = useState<AddServiceDatabaseRequest>({
        appName: "",
        collentionName: "",
        databaseName: ""
    })

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        AddServiceDatabaseLogic(data)
    }

    return (
        <div className="h-[30vh] w-[50vw]">
            <div className="flex justify-center items-center">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <FormLabel htmlFor="appName">Uygulama Adı</FormLabel>
                            <Form.Control type="text" id="appName" defaultValue={data.appName} onChange={event => setData({ ...data, appName: event.currentTarget.value })}></Form.Control>
                        </Col>
                        <Col>
                            <FormLabel htmlFor="databaseName">Veritabanı Adı</FormLabel>
                            <Form.Control type="text" id="databaseName" defaultValue={data.databaseName} onChange={event => setData({ ...data, databaseName: event.currentTarget.value })}></Form.Control>
                        </Col>
                        <Col>
                            <FormLabel htmlFor="collentionName">Koleksyon Adı</FormLabel>
                            <Form.Control type="text" id="collentionName" defaultValue={data.collentionName} onChange={event => setData({ ...data, collentionName: event.currentTarget.value })}></Form.Control>
                        </Col>
                    </Row>
                    <Button type="submit" variant="outline-primary" className="mt-3 w-100">Kaydet</Button>
                </Form>
            </div>
        </div >
    );
}
