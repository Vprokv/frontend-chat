import React, {useEffect} from 'react';
import {Result} from 'antd';
import {Block} from "../../../components";

const CheckInfo = ({location}) => {
    useEffect(() => {
        const hash = location.search.split('hash')[1];
        if (hash) {

        }
    })
    return (
        <div>
            <Block>
                <Result
                    status="success"
                    title="Готово"
                    subTitle={
                        <p>
                            Регистрация прошла успешно!
                            <br/>
                            Ссылка с подтверждением аккаунта отправлена на ваш E-mail.
                        </p>
                    }


                />
            </Block>
        </div>
    )
};

export default CheckInfo;