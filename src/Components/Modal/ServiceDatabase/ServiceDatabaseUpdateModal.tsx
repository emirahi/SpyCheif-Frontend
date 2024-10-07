import { FC, FormEvent, useState } from "react"
import { UpdateServiceDatabaseLogic } from "../../../Business/ServiceDatabaseLogic"
import UpdateServiceDatabaseRequest from "../../../Utils/Models/Request/ServiceDatabase/UpdateServiceDatabaseRequest"
import { Button, Col, Form, FormLabel, Row } from "react-bootstrap"

export const ServiceDatabaseUpdateModal: FC<{ modalData: any }> = ({ modalData }) => {
    const [data, setData] = useState<UpdateServiceDatabaseRequest>({
        id:modalData.id,
        appName:modalData.appName,
        collectionName:modalData.collectionName,
        databaseName:modalData.databaseName
    })

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        UpdateServiceDatabaseLogic(data)
    }

    return (
        <div className="h-[30vh] w-[50vw]">
            <div className="flex justify-center items-center">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <FormLabel htmlFor="appName">Uygulama Adı</FormLabel>
                            <Form.Control type="text" id="appName" defaultValue={data.appName} onChange={event =>
                                setData({ ...data, appName: event.currentTarget.value })}></Form.Control>
                        </Col>
                        <Col>
                            <FormLabel htmlFor="databaseName">Veritabanı Adı</FormLabel>
                            <Form.Control type="text" id="databaseName" defaultValue={data.databaseName} onChange={event =>
                                setData({ ...data, databaseName: event.currentTarget.value })}></Form.Control>
                        </Col>
                        <Col>
                            <FormLabel htmlFor="collectionName">Koleksyon Adı</FormLabel>
                            <Form.Control type="text" id="collectionName" defaultValue={data.collectionName} onChange={event =>
                                setData({ ...data, collectionName: event.currentTarget.value })}></Form.Control>
                        </Col>
                    </Row>
                    <Button type="submit" variant="outline-primary" className="mt-3 w-100">Kaydet</Button>
                </Form>
            </div>
        </div>
    );
}
