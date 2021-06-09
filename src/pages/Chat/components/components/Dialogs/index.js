import React from 'react';
import orderBy from 'lodash/orderBy';
import './Dialogs.scss';
import {DialogItem} from "../";
import {Input, Empty} from "antd";


const { Search } = Input;

const Dialogs = ({
                     items,
                     userId,
                     onSearch,
                     inputValue,
                     currentDialogId,
                     onSelectDialog}) =>(
    <div className="dialogs">
        <div className="dialogs__search">
            <Search
                placeholder="Поиск среди контактов"
                onChange={e => onSearch(e.target.value)}
                value={inputValue}
            />
        </div>
        {items.length ? (
            orderBy(items, ["createdAt"], ["desc"]).map(item => (
                <DialogItem
                    key={item._id}
                    onSelect={onSelectDialog}
                    isMe={item.author._id === userId}
                    currentDialogId={currentDialogId}
                    {...item} />
            ))
        ) : (
            <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="Ничего не найдено"
            />
        )}
    </div>
);


export default Dialogs;