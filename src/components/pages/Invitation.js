import React, {useState} from 'react'
import {Button, Col, DatePicker, Input, Row} from 'antd';
import 'antd/dist/antd.css';

function onChange(date, dateString) {
    console.log(date, dateString);
}

let is_field_disabled = false;

function Invitation() {
    const [isFieldDisabled, setIsFieldDisabled] = useState(false)
    const sendRequest = () => {
        alert("заявка отправлена")
        setIsFieldDisabled(true)
    }
    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 16},
    };


    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    /* eslint-enable no-template-curly-in-string */

    const onFinish = (values: any) => {
        console.log(values);
        alert("заявка отправлена")
    };


    return (
        <>
            <Row style={{paddingTop: "25px"}}>
                <div>
                    <h2>Не нашли подходящий проект?</h2>
                    <span style={{fontSize: "16px", weight: "400", whiteSpace: "pre-wrap"}}>Создайте заявку на решение проблемы и одна из команд нашего акселератора создаст проект для её
                        решения</span>
                    <br/>
                    <span>
                    Заявка должна заинтересовать продуктовую команду, поэтому опишите преимущества своей идеи,
                        перспективы и достоинства её</span>
                </div>
            </Row>
            <Row style={{paddingTop: "10px"}}>
                <div align="left" style={{display: "block; block;", width: "100%"}}>
                    <h4>Описание проблемы</h4>
                </div>
                <div align="left" style={{display: "block; block;", width: "100%"}}>
                    <Input.TextArea disabled={isFieldDisabled}
                                    style={{border: "1px solid #179691", borderRadius: "4px", width: "100%"}}
                                    placeholder={"Опишите своими словами существующую в организации проблему. Можно сформулировать проблему в форму задачи"}/>
                </div>
            </Row>
            <Row style={{paddingTop: "10px"}}>
                <div align="left" style={{display: "block; block;", width: "100%"}}>
                    <h4>Как проявляется ваша проблема?</h4>
                </div>
                <div align="left" style={{display: "block; block;", width: "100%"}}>
                    <Input.TextArea disabled={isFieldDisabled}
                                    style={{border: "1px solid #179691", borderRadius: "4px", width: "100%"}}
                                    placeholder={"Опишите своими словами существующую в организации проблему. Можно сформулировать проблему в форму задачи"}/>
                </div>
            </Row>
            <Row style={{paddingTop: "10px"}}>
                <div align="left" style={{display: "block; block;", width: "100%"}}>
                    <h4>Как проявляется ваша проблема?</h4>
                </div>
                <div align="left" style={{display: "block; block;", width: "100%"}}>
                    <Input.TextArea disabled={isFieldDisabled}
                                    style={{border: "1px solid #179691", borderRadius: "4px", width: "100%"}}
                                    placeholder={"Опишите своими словами существующую в организации проблему. Можно сформулировать проблему в форму задачи"}/>
                </div>
            </Row>
            <Row style={{paddingTop: "16px"}}>
                <Col style={{paddingRight: "8px"}} span={12}>
                    <div align="left" style={{display: "block; block;", width: "100%"}}>
                        <h4>Пробовали ли вы решать?</h4>
                    </div>
                    <div align="left" style={{display: "block; block;", width: "100%"}}>
                        <Input disabled={isFieldDisabled}
                               style={{border: "1px solid #179691", borderRadius: "4px", width: "100%"}}
                               placeholder={"Были ли попытки решения вашей проблемы"}></Input>
                    </div>
                </Col>
                <Col span={12}>
                    <div align="left" style={{display: "block; block;", width: "100%"}}>
                        <h4>Желательный срок решения вашей проблемы?</h4>
                    </div>
                    <div align="left" style={{display: "block; block;", width: "100%"}}>
                        <DatePicker disabled={isFieldDisabled} placeholder={"выберите дату..."}
                                    style={{border: "1px solid #179691", borderRadius: "4px", width: "100%"}}
                                    onChange={onChange}/>
                    </div>
                </Col>
            </Row>

            <Row style={{paddingTop: "16px"}}>
                <div align="left" style={{display: "block; block;", width: "100%"}}>
                    <h2>Как с вами связаться?</h2>
                </div>
                <div align="left" style={{display: "block; block;", width: "100%"}}>
                    <Input disabled={isFieldDisabled} style={{border: "1px solid #179691", borderRadius: "4px"}}
                           placeholder={"Ваше ФИО"}></Input>
                </div>
            </Row>
            <Row style={{paddingTop: "16px"}}>
                <Col style={{paddingRight: "8px"}} span={12}>
                    <Input disabled={isFieldDisabled} style={{border: "1px solid #179691", borderRadius: "4px"}}
                           placeholder={"Контактный телефон"}></Input>
                </Col>
                <Col span={12}>
                    <Input style={{border: "1px solid #179691", borderRadius: "4px"}}
                           placeholder={"Электронная почта"}></Input>
                </Col>
            </Row>
            <Row style={{paddingTop: "16px"}}>
                <Button shape={"round"} disabled={isFieldDisabled} type={"text"}
                        style={{
                            background: "#179691",
                            fontWeight: "600",
                            fontSize: "15px",
                            color: "white",
                            width: "307px"
                        }}
                        onClick={sendRequest}>Разместить заявку</Button>
            </Row>

        </>
    )
}

export default Invitation;
