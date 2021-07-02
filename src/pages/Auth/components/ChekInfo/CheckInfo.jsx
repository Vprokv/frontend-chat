import React, {useEffect, useState} from 'react';
import {Result} from 'antd';

import {verifyHash} from "../../../Chat/Api"
import {Block, Button} from "../components";

const renderTextInfo = ({}) => {
        return {
            status: "success",
            message: "Перейдите на страницу авторизации"
        };
};

const CheckInfo = ({history}) => {
    const verified = true
    const info = renderTextInfo(verified);


    return (
        <div>
            <Block>
                <Result
                    status={info.status}
                    title={info.status === "success" ? "Готово" : "Ошибка"}
                    subTitle={info.message}
                    extra={
                        info.status === "success" &&
                        verified &&
                            <Button
                            type="primary"
                            onClick={() =>history.push('/signIn')}
                        >
                            Войти
                        </Button>
                    }
                />
            </Block>
        </div>
    )
};

export default CheckInfo;